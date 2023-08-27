// ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';
// icons
// import html from '../../public/images/html.png';

function ProjectCard(props) {
  const { title, description, technologies, imageUrl, projectUrl } = props;

  return (
    
    <div className="project-card">
        
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-technologies">Technologies used: {technologies}</p>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
