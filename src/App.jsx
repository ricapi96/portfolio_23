// src/App.jsx
import React from 'react';
import Header from './components/Header';
// import ProjectCard from './components/ProjectCard';
import AboutMe from './components/AboutMe';
// import Contact from './components/Contact';
// import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        
        <AboutMe />
        {/* <ProjectCard />
        <Contact /> */}
      </main>
    </div>
  );
}

export default App;