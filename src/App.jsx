// src/App.jsx
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';
// import Contact from './components/Contact';
// import './styles.css';

function App() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1.',
      technologies: 'React, Redux',
      imageUrl: 'path/to/image1.jpg',
      projectUrl: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2.',
      technologies: 'Vue.js, Express',
      imageUrl: 'path/to/image2.jpg',
      projectUrl: 'https://github.com/yourusername/project2'
    },
    // Add more projects as needed
  ];

  return (
    <div className="app">
      <Header />
      <main>
        <AboutMe />
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}

        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;