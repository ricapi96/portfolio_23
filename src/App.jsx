// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMePage from './pages/AboutMePage';
import ProjectsPage from './pages/ProjectsPage';
import StacksPage from './pages/StacksPage';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {

  return (
    <Router>
    <div className="app">
      
        <Header />
        <Navbar />
        <div className='main-content'>
          {/* ... */}
          <Routes>
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/stacks" element={<StacksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          </Routes>
          </div>

        <Footer />
      
    </div>
    </Router>
  );
}

export default App;