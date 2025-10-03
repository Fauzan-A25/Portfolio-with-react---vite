import { memo, useState } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { projects, projectCategories } from '../../../data/portfolioData';
import './Projects.css';

const Projects = memo(() => {
  const [elementRef, isVisible] = useIntersectionObserver();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false); // ✅ NEW: State untuk show all

  // ✅ UPDATED: Filter logic yang benar
  const getFilteredProjects = () => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Show only featured or all
    if (!showAll) {
      filtered = filtered.filter(p => p.featured);
    }

    return filtered;
  };

  const filteredProjects = getFilteredProjects();
  const totalProjects = projects.length;
  const featuredCount = projects.filter(p => p.featured).length;

  return (
    <section
      id="projects"
      ref={elementRef}
      className={`projects-section ${isVisible ? 'animate-in' : ''}`}
    >
      <div className="container">
        {/* Header */}
        <div className="projects-header">
          <h2 className="section-title">
            {showAll ? 'All Projects' : 'Featured Projects'}
          </h2>
          <p className="section-subtitle">
            {showAll 
              ? `Displaying all ${totalProjects} projects`
              : 'Showcasing my latest work in data science and machine learning'
            }
          </p>
        </div>

        {/* Category Filter */}
        <div className="project-filters">
          {projectCategories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <div className="no-projects">
              <i className="bi bi-folder-x"></i>
              <p>No projects found in this category</p>
            </div>
          )}
        </div>

        {/* View All / Show Less Button */}
        <div className="projects-footer">
          {!showAll ? (
            <button 
              className="modern-btn btn-outline"
              onClick={() => setShowAll(true)}
            >
              <i className="bi bi-grid-3x3"></i>
              View All Projects ({totalProjects})
            </button>
          ) : (
            <button 
              className="modern-btn btn-outline"
              onClick={() => setShowAll(false)}
            >
              <i className="bi bi-star"></i>
              Show Featured Only ({featuredCount})
            </button>
          )}
        </div>
      </div>
    </section>
  );
});

const ProjectCard = memo(({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="project-image-wrapper">
        <img
          src={project.image || 'https://via.placeholder.com/600x400/1a1a1a/00d4aa?text=No+Image'}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
        
        {/* Overlay with Buttons */}
        <div className={`project-overlay ${isHovered ? 'active' : ''}`}>
          <div className="overlay-buttons">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="overlay-btn"
                title="View Code"
              >
                <i className="bi bi-github"></i>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="overlay-btn"
                title="Live Demo"
              >
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            )}
          </div>
        </div>

        {/* Status Badge */}
        <div className="project-status-badge">
          <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="project-content">
        {/* Category & Year */}
        <div className="project-meta">
          <span className="category">
            <i className="bi bi-folder"></i>
            {project.category}
          </span>
          <span className="year">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="project-title">{project.title}</h3>

        {/* Description */}
        <p className="project-description">{project.description}</p>

        {/* Tags */}
        <div className="project-tags">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="tag more">+{project.tags.length - 3}</span>
          )}
        </div>

        {/* Footer - Links */}
        <div className="project-footer">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className="bi bi-github"></i>
              Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link primary"
            >
              <i className="bi bi-play-circle"></i>
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';
Projects.displayName = 'Projects';

export default Projects;
