import { memo } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { skills } from '../../../data/portfolioData';
import './Skills.css';

const Skills = memo(() => {
  const [elementRef, isVisible] = useIntersectionObserver();

  const categoryTitles = {
    programming: 'Programming Languages',
    dataScience: 'Data Science & ML',
    tools: 'Tools & Frameworks',
    soft: 'Soft Skills',
  };

  return (
    <section 
      id="skills" 
      ref={elementRef}
      className={`skills-section ${isVisible ? 'animate-in' : ''}`}
    >
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Technologies and tools I work with, measured by years of hands-on experience
        </p>

        <div className="skills-container">
          {Object.entries(skills).map(([category, skillList], index) => (
            <SkillCategory 
              key={category}
              title={categoryTitles[category] || category}
              skills={skillList}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

const SkillCategory = memo(({ title, skills, delay }) => {
  const [categoryRef, isVisible] = useIntersectionObserver();

  return (
    <div 
      ref={categoryRef}
      className={`skill-category glass-card ${isVisible ? 'animate-in' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="category-title">{title}</h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            isVisible={isVisible}
            delay={index * 50}
          />
        ))}
      </div>
    </div>
  );
});

const SkillCard = memo(({ skill, isVisible, delay }) => {
  const getExperienceLabel = (years) => {
    if (years < 1) return `${years * 12} months`;
    if (years === 1) return '1 year';
    return `${years} years`;
  };

  return (
    <div 
      className={`skill-card ${isVisible ? 'fade-in' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="skill-icon-wrapper">
        <i 
          className={`bi ${skill.icon}`} 
          style={{ color: skill.color || 'var(--accent-color)' }}
        ></i>
      </div>
      
      <div className="skill-content">
        <div className="skill-header">
          <h4 className="skill-name">{skill.name}</h4>
          <span className="skill-experience">
            {getExperienceLabel(skill.yearsOfExperience)}
          </span>
        </div>
        
        {skill.description && (
          <p className="skill-description">{skill.description}</p>
        )}
        
        {skill.projects && skill.projects.length > 0 && (
          <div className="skill-meta">
            <span className="project-count">
              <i className="bi bi-folder-fill"></i>
              {skill.projects.length} project{skill.projects.length > 1 ? 's' : ''}
            </span>
          </div>
        )}
      </div>
    </div>
  );
});

SkillCategory.displayName = 'SkillCategory';
SkillCard.displayName = 'SkillCard';
Skills.displayName = 'Skills';

export default Skills;
