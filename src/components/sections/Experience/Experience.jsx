import { memo } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import './Experience.css';

// Import dengan error handling
let experiences = [];
try {
  const portfolioData = await import('../../../data/portfolioData');
  experiences = portfolioData.experiences || [];
} catch (error) {
  console.error('Error loading experiences:', error);
}

const Experience = memo(() => {
  const [elementRef, isVisible] = useIntersectionObserver();

  // Debug log
  console.log('Experience rendering, data:', experiences);
  console.log('isVisible:', isVisible);

  // Jika data kosong, tampilkan placeholder
  if (!experiences || experiences.length === 0) {
    return (
      <section 
        id="experience" 
        className="experience-section"
        style={{ 
          background: 'var(--primary-bg)', 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="container">
          <h2 style={{ color: 'white', textAlign: 'center' }}>
            No experiences data found. Please add experiences to portfolioData.js
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="experience" 
      className={`experience-section ${isVisible ? 'animate-in' : ''}`}
      ref={elementRef}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <i className="bi bi-briefcase"></i> Professional Experience
          </h2>
          <p className="section-subtitle">
            My journey through professional roles and organizational leadership
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`experience-card ${isVisible ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot">
                <i className="bi bi-building"></i>
              </div>

              {/* Card Content */}
              <div className="experience-content">
                {/* Header */}
                <div className="experience-header">
                  <div className="title-group">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="company-info">
                      <span className="company-name">
                        <i className="bi bi-building"></i>
                        {exp.company}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Period */}
                <div className="experience-period">
                  <i className="bi bi-calendar-event"></i>
                  <span>{exp.period}</span>
                </div>

                {/* Description */}
                <p className="experience-description">{exp.description}</p>

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="experience-technologies">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;
