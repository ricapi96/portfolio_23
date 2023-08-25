// src/App.jsx
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
// import './styles.css';

function App() {
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
    // Add more projects 
  ];

  return (
    <div className="app">
      <Header />
      <main>
        <AboutMe />
        <h2>My Projects</h2>
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

        <Contact />
      </main>
    </div>
  );
}

export default App;