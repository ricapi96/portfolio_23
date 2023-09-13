// ProjectsPage.jsx
import React from 'react';

function ProjectsPage() {
  const projects = [
    {
      title: 'NoteTaker',
      description: 'Note taker app that allows one to save a note to local storage.',
      technologies: 'JavaScript, Express.js',
      imageUrl: '/images/notes.jpg',
      projectUrl: 'https://github.com/ricapi96/express-note-taker'
    },
    {
      title: '3-Dogs',
      description: 'A Dog website to showcase my furry friends.',
      technologies: 'HTML, CSS, JavaScript',
      imageUrl: '/images/heaven.jpg',
      projectUrl: 'https://ricapi96.github.io/3-dogs/'
    },
    {
      title: 'DevCrowd',
      description: 'A social media platform that lets Developers connect with eachother.',
      technologies: 'MERN application',
      imageUrl: '/images/dev-crowd.png',
      projectUrl: 'https://github.com/ashak90/project-03-dev-crowd'
    },
    {
      title: 'Tech Blog',
      description: 'Blog app for writing blogs. Can save and comment on them, as well.',
      technologies: 'Handlebars, Epress, Node, MySQL, JavaScript',
      imageUrl: '/images/blog.jpg',
      projectUrl: 'https://github.com/ricapi96/my-blogs'
    },
    {
      title: 'E-Commerce Backend',
      description: 'E-Commerce app that allows users to shop for items from the database.',
      technologies: 'Express, Sequelize, Node, MySQL, JavaScript',
      imageUrl: '/images/e-commerce.jpg',
      projectUrl: 'https://github.com/ricapi96/e-commerce-back-end'
    },
    // Add more projects 
  ];

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <div className="project-image-container">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
          </div>
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
