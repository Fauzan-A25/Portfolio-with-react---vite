import React, { useState, useRef, useEffect } from 'react';
import './AIAssistant.css';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import portfolioData from '../../data/portfolioData';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: `Hi there! 👋 I'm an AI assistant here to help you explore **${portfolioData.personalInfo.name}'s** portfolio.\n\nFeel free to ask me anything about his skills, projects, work experience, or education. I'm here to help!`,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Cache for responses
  const responseCache = useRef(new Map());

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  
  const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;
  const model = genAI ? genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash", // ✅ Lighter model
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 500, // ✅ Reduced tokens
    }
  }) : null;

  // ✅ STRATEGI 1: Compact Base Context (Always sent, minimal)
  const getBaseContext = () => {
    const { personalInfo } = portfolioData;
    return `Assistant for ${personalInfo.name}, ${personalInfo.title} at ${personalInfo.university}.
Email: ${personalInfo.email}. Answer concisely (<100 words).`;
  };

  // ✅ STRATEGI 2: Dynamic Context Based on Question
  const getRelevantContext = (userMessage) => {
    const lowerMsg = userMessage.toLowerCase();
    const { personalInfo, skills, projects, experiences, education } = portfolioData;
    
    let context = `You are a friendly and professional AI assistant for ${personalInfo.name}'s portfolio website. Your role is to help visitors learn about ${personalInfo.name} in a natural, conversational way.

  IMPORTANT INSTRUCTIONS:
  - Be warm, friendly, and professional
  - If greeted (hi, hello, hey), respond naturally with a greeting and brief introduction
  - When answering questions, be conversational, not robotic
  - Use "he" or "${personalInfo.name}" when referring to him
  - Keep responses concise but engaging
  - If asked about things not in your knowledge, politely say you're focused on ${personalInfo.name}'s portfolio

  BASIC INFO:
  ${personalInfo.name} is a ${personalInfo.title} at ${personalInfo.university}. ${personalInfo.tagline}\n\n`;
    
    // Add relevant details based on question
    if (lowerMsg.includes('skill') || lowerMsg.includes('tech')) {
      const topSkills = [
        ...skills.programming.slice(0, 4).map(s => s.name),
        ...skills.dataScience.slice(0, 4).map(s => s.name)
      ].join(', ');
      context += `Key skills: ${topSkills}.\n`;
    }
    
    if (lowerMsg.includes('project')) {
      const topProjects = projects.slice(0, 3).map(p => 
        `- ${p.title} (${p.year}): ${p.shortDescription}`
      ).join('\n');
      context += `Notable projects:\n${topProjects}\n`;
    }
    
    if (lowerMsg.includes('experience') || lowerMsg.includes('work')) {
      const recentExp = experiences.slice(0, 2).map(e => 
        `- ${e.title} at ${e.company} (${e.period})`
      ).join('\n');
      context += `Recent experience:\n${recentExp}\n`;
    }
    
    if (lowerMsg.includes('education') || lowerMsg.includes('study')) {
      const edu = education[0];
      context += `Education: ${edu.degree} at ${edu.institution} (${edu.period}).\n`;
    }
    
    if (lowerMsg.includes('contact') || lowerMsg.includes('email')) {
      context += `Contact: ${personalInfo.email}, ${personalInfo.location}.\n`;
    }
    
    return context;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // ✅ STRATEGI 3: Enhanced Local Response with Rich Data
  const getLocalResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    const { personalInfo, skills, projects, experiences, education } = portfolioData;
    
    // Greetings - respond naturally
    if (lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon|good evening|halo|hai)/i)) {
      return `Hey there! 👋 Thanks for stopping by!\n\nI'm an AI assistant here to help you get to know **${personalInfo.name}** better. Feel free to ask me about his skills, projects, work experience, or anything else you'd like to know about his portfolio.\n\nWhat would you like to learn about?`;
    }
    
    // How are you / small talk
    if (lowerMessage.includes('how are you') || lowerMessage.includes('how r u')) {
      return `I'm doing great, thanks for asking! 😊\n\nI'm here and ready to help you learn more about **${personalInfo.name}** and his work. Is there anything specific you'd like to know about his skills, projects, or experience?`;
    }
    
    // What can you do / help
    if (lowerMessage.includes('what can you') || lowerMessage.includes('how can you help')) {
      return `Great question! I'm here to help you explore **${personalInfo.name}'s** portfolio. I can tell you about:\n\n• 💻 His **technical skills** and expertise\n• 🚀 **Projects** he's worked on\n• 💼 His **professional experience**\n• 🎓 **Education** and academic background\n• 📧 How to **contact** him\n\nWhat interests you most?`;
    }
    
    // Skills
    if (lowerMessage.includes('skill') || lowerMessage.includes('tech')) {
      const prog = skills.programming.slice(0, 4).map(s => 
        `**${s.name}** (${s.yearsOfExperience} years)`
      ).join(', ');
      const ds = skills.dataScience.slice(0, 3).map(s => 
        `**${s.name}** (${s.yearsOfExperience} years)`
      ).join(', ');
      return `${personalInfo.name} has a solid technical background! Here's what he's proficient in:\n\n**Programming:** ${prog}\n\n**Data Science & ML:** ${ds}\n\nHe's particularly passionate about machine learning and building data-driven applications. Want to know more about any specific technology?`;
    } 
    
    // Projects
    if (lowerMessage.includes('project')) {
      const top3 = projects.slice(0, 3).map(p => 
        `**${p.title}** (${p.year})\n${p.shortDescription}\n*Built with:* ${p.technologies.slice(0, 3).join(', ')}`
      ).join('\n\n');
      return `${personalInfo.name} has worked on some really cool projects! Here are a few highlights:\n\n${top3}\n\nYou can check out his full portfolio on GitHub. Would you like to know more about any specific project?`;
    } 
    
    // Experience
    if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
      const recent = experiences.slice(0, 2).map(e => 
        `**${e.title}** at ${e.company}\n${e.period} • ${e.type}\n${e.description.slice(0, 100)}...`
      ).join('\n\n');
      return `${personalInfo.name} has gained valuable experience through various roles:\n\n${recent}\n\nHe's actively building his professional profile while studying. Interested in learning more about his work?`;
    } 
    
    // Education
    if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('university')) {
      const edu = education[0];
      return `${personalInfo.name} is currently pursuing his **${edu.degree}** at **${edu.institution}** (${edu.period}).\n\nHe's focusing on courses like ${edu.relevantCourses.slice(0, 3).join(', ')}, and more. He's passionate about data science and actively participates in tech communities!\n\nWant to know about his projects or skills?`;
    } 
    
    // Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email')) {
      return `Want to get in touch with ${personalInfo.name}? Here's how:\n\n📧 **Email:** ${personalInfo.email}\n📍 **Location:** ${personalInfo.location}\n🎓 **University:** ${personalInfo.university}\n\nHe's open to collaboration opportunities, project discussions, and professional connections. Feel free to reach out!`;
    }
    
    // Who is he / about
    if (lowerMessage.includes('who') || lowerMessage.includes('about')) {
      return `Let me tell you about **${personalInfo.name}**! 😊\n\nHe's a **${personalInfo.title}** currently studying at **${personalInfo.university}**. ${personalInfo.tagline}\n\nBased in ${personalInfo.location}, he's passionate about data science, machine learning, and building impactful tech solutions. He's worked on multiple projects and continues to expand his skills in the field.\n\nWhat would you like to know more about - his projects, skills, or experience?`;
    }
    
    // Thank you
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return `You're very welcome! 😊\n\nFeel free to ask me anything else about ${personalInfo.name}'s portfolio. I'm here to help!`;
    }
    
    // Bye
    if (lowerMessage.match(/^(bye|goodbye|see you|see ya|later)/i)) {
      return `Thanks for visiting! 👋\n\nFeel free to come back anytime if you have more questions about ${personalInfo.name}. Have a great day!`;
    }
    
    // Default - conversational
    return `I'm here to help you learn more about **${personalInfo.name}** and his portfolio! You can ask me about:\n\n• 💻 His **skills** and technical expertise\n• 🚀 **Projects** he's worked on\n• 💼 **Work experience** and roles\n• 🎓 **Education** background\n• 📧 How to **contact** him\n\nWhat would you like to know? Feel free to ask in your own words!`;
  };

  // ✅ STRATEGI 4: Caching + Retry Logic
  const getGeminiResponse = async (userMessage) => {
    // Check cache first
    const cacheKey = userMessage.toLowerCase().trim();
    if (responseCache.current.has(cacheKey)) {
      console.log('✅ Using cached response');
      return responseCache.current.get(cacheKey);
    }

    // Retry logic with exponential backoff
    const retryWithBackoff = async (fn, maxRetries = 2, delay = 2000) => {
      for (let i = 0; i <= maxRetries; i++) {
        try {
          return await fn();
        } catch (error) {
          if (i === maxRetries || !error.message?.includes('503')) {
            throw error;
          }
          const waitTime = delay * Math.pow(2, i);
          console.log(`⏳ Retry ${i + 1}/${maxRetries} in ${waitTime/1000}s...`);
          await new Promise(resolve => setTimeout(resolve, waitTime));
        }
      }
    };

    try {
      if (!model) {
        return getLocalResponse(userMessage);
      }

      // ✅ Use adaptive context instead of full context
      const relevantContext = getRelevantContext(userMessage);
      
      const response = await retryWithBackoff(async () => {
        const fullPrompt = `${relevantContext}

Q: ${userMessage}

A (markdown, brief):`;

        const result = await model.generateContent(fullPrompt);
        const resp = await result.response;
        const text = resp.text();
        
        if (!text) throw new Error('Empty response');
        return text;
      });

      // Cache response for 1 hour
      responseCache.current.set(cacheKey, response);
      setTimeout(() => responseCache.current.delete(cacheKey), 3600000);

      return response;

    } catch (error) {
      console.error('Gemini API error:', error);
      
      if (error.message?.includes('503')) {
        return `⚠️ **AI is busy.** Here's from local data:\n\n${getLocalResponse(userMessage)}`;
      }
      
      return getLocalResponse(userMessage);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputValue.trim() || isTyping) return;

    const userMessage = {
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    const currentMessage = inputValue;
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const botResponseText = await getGeminiResponse(currentMessage);
      
      const botResponse = {
        type: 'bot',
        text: botResponseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Unexpected error:', error);
      
      const errorMessage = {
        type: 'bot',
        text: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickActions = [
    { text: 'Tell me about skills', icon: 'fa-code' },
    { text: 'Show me projects', icon: 'fa-folder-open' },
    { text: 'What\'s the experience?', icon: 'fa-briefcase' }
  ];

  const handleQuickAction = (text) => {
    setInputValue(text);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.form.requestSubmit();
      }
    }, 100);
  };

  return (
    <>
      <button 
        className={`ai-chat-button ${isOpen ? 'active' : ''}`}
        onClick={toggleChat}
        aria-label="Toggle AI Assistant"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-robot'}`}></i>
        {!isOpen && <span className="button-pulse"></span>}
      </button>

      {isOpen && (
        <div className="ai-chat-window">
          <div className="chat-header">
            <div className="header-info">
              <div className="bot-avatar">
                <i className="fas fa-robot"></i>
              </div>
              <div className="header-text">
                <h3>AI Assistant</h3>
                <span className="status">
                  <span className="status-dot"></span>
                  {API_KEY ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>
            <div className="header-actions">
              <button 
                className="header-btn close-btn"
                onClick={toggleChat}
                aria-label="Close chat"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

          <div className="chat-body">
            <div className="messages-container">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.type}`}>
                  {msg.type === 'bot' && (
                    <div className="message-avatar">
                      <i className="fas fa-robot"></i>
                    </div>
                  )}
                  <div className="message-content">
                    <div className="message-bubble">
                      {msg.type === 'bot' ? (
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: ({node, ...props}) => <p className="markdown-p" {...props} />,
                            strong: ({node, ...props}) => <strong className="markdown-strong" {...props} />,
                            em: ({node, ...props}) => <em className="markdown-em" {...props} />,
                            code: ({node, inline, ...props}) => 
                              inline ? 
                                <code className="markdown-code-inline" {...props} /> : 
                                <code className="markdown-code-block" {...props} />,
                            ul: ({node, ...props}) => <ul className="markdown-ul" {...props} />,
                            ol: ({node, ...props}) => <ol className="markdown-ol" {...props} />,
                            li: ({node, ...props}) => <li className="markdown-li" {...props} />,
                            a: ({node, ...props}) => <a className="markdown-link" target="_blank" rel="noopener noreferrer" {...props} />,
                          }}
                        >
                          {msg.text}
                        </ReactMarkdown>
                      ) : (
                        msg.text
                      )}
                    </div>
                    <span className="message-time">
                      {msg.timestamp.toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="message bot">
                  <div className="message-avatar">
                    <i className="fas fa-robot"></i>
                  </div>
                  <div className="message-content">
                    <div className="message-bubble typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {messages.length <= 1 && (
              <div className="quick-actions">
                <p className="quick-actions-title">Quick questions:</p>
                {quickActions.map((action, index) => (
                  <button 
                    key={index}
                    className="quick-action-btn"
                    onClick={() => handleQuickAction(action.text)}
                  >
                    <i className={`fas ${action.icon}`}></i>
                    {action.text}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="chat-footer">
            <form onSubmit={handleSendMessage} className="message-form">
              <input
                ref={inputRef}
                type="text"
                className="message-input"
                placeholder="Ask me anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isTyping}
              />
              <button 
                type="submit" 
                className="send-btn"
                disabled={!inputValue.trim() || isTyping}
                aria-label="Send message"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            <p className="footer-note">
              <i className="fas fa-info-circle"></i>
              {API_KEY ? 'AI Assistant' : 'Offline'} • May not be 100% accurate
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
