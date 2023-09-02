// ProjectsPage.jsx
import React from 'react';

function ProjectsPage() {
  const projects = [
    {
      title: 'NoteTaker',
      description: 'Note taker app that allows one to save a note to local storage.',
      technologies: 'JavaScript, Express.js',
      imageUrl: '/images/note-taker.png',
      projectUrl: 'https://github.com/ricapi96/express-note-taker'
    },
    {
      title: '3-Dogs',
      description: 'A Dog website to showcase my furry friends.',
      technologies: 'HTML, CSS, JavaScript',
      imageUrl: '/images/three-dogs.png',
      projectUrl: 'https://ricapi96.github.io/3-dogs/'
    },
    {
      title: '3-Dogs',
      description: 'A Dog website to showcase my furry friends.',
      technologies: 'HTML, CSS, JavaScript',
      imageUrl: '/images/three-dogs.png',
      projectUrl: 'https://ricapi96.github.io/3-dogs/'
    },
    {
      title: '3-Dogs',
      description: 'A Dog website to showcase my furry friends.',
      technologies: 'HTML, CSS, JavaScript',
      imageUrl: '/images/three-dogs.png',
      projectUrl: 'https://ricapi96.github.io/3-dogs/'
    },
    {
      title: '3-Dogs',
      description: 'A Dog website to showcase my furry friends.',
      technologies: 'HTML, CSS, JavaScript',
      imageUrl: '/images/three-dogs.png',
      projectUrl: 'https://ricapi96.github.io/3-dogs/'
    },
    // Add more projects 
  ];

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <img src={project.imageUrl} alt={project.title} className="project-image" />
          <div className="project-details">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies">Technologies used: {project.technologies}</p>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsPage;
