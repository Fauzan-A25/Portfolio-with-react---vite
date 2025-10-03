import { memo } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { personalInfo, stats } from '../../../data/portfolioData';
import './About.css';

const About = memo(() => {
  const [elementRef, isVisible] = useIntersectionObserver();

  return (
    <section 
      id="about" 
      ref={elementRef}
      className={`about-section ${isVisible ? 'animate-in' : ''}`}
    >
      <div className="container">
        {/* Centered Content */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="about-content">
              <h2 className="section-title">About Me</h2>
              <div className="title-underline"></div>
              
              <p className="about-text">
                Second-year undergraduate student of <strong>Data Science at {personalInfo.university}</strong> with 
                strong skills in data analysis, statistical evaluation, and problem-solving. Actively involved 
                in academic activities with excellent attention to detail and observation skills.
              </p>

              <p className="about-text">
                Proficient in programming with <strong>Python</strong> for data processing and analysis. 
                Experienced in participating in various Data Science competitions, demonstrating strong 
                analytical and critical thinking skills. A collaborative team player dedicated to delivering 
                accurate and reliable data insights.
              </p>

              {/* Highlights */}
              <div className="about-highlights">
                <div className="highlight-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Strong analytical and problem-solving skills</span>
                </div>
                <div className="highlight-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Experience in ML competitions and projects</span>
                </div>
                <div className="highlight-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Team collaboration and communication</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="stat-card glass-card"
                  >
                    <i className={`bi ${stat.icon} stat-icon`} style={{ color: stat.color }}></i>
                    <h3 className="stat-value">{stat.value}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="about-cta">
                <a href="#contact" className="modern-btn">
                  <i className="bi bi-chat-dots"></i>
                  Let's Talk
                </a>
                <a href="#projects" className="modern-btn btn-outline">
                  <i className="bi bi-folder"></i>
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
