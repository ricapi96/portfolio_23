// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';
import Stacks from './components/Stacks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImagesPage from './pages/ImagesPage';
import './App.css';

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
    <Router>
    <div className="app">
      
        <Header />
        <Navbar />
        <main>
          {/* ... */}
          <Routes>
          <Route path="/images" element={<ImagesPage />} />
          </Routes>
        </main>
        <Footer />
      
    </div>
    </Router>
  );
}

export default App;