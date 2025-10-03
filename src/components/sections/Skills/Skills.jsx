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
          Technologies and tools I work with to bring ideas to life
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
          <SkillBar 
            key={skill.name} 
            skill={skill} 
            isVisible={isVisible}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
});

const SkillBar = memo(({ skill, isVisible, delay }) => {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <div className="skill-name">
          <i 
            className={`bi ${skill.icon}`} 
            style={{ color: skill.color || 'var(--accent-color)' }}
          ></i>
          <span>{skill.name}</span>
        </div>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar-container">
        <div 
          className="skill-bar-fill"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`,
            background: skill.color ? `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)` : 'var(--accent-gradient)',
          }}
        ></div>
      </div>
    </div>
  );
});

SkillCategory.displayName = 'SkillCategory';
SkillBar.displayName = 'SkillBar';
Skills.displayName = 'Skills';

export default Skills;
