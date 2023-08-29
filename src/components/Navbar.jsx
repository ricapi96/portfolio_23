// Navbar.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><ScrollLink to="about" smooth={true} duration={500}>About Me</ScrollLink></li>
        <li><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></li>
        <li><ScrollLink to="stacks" smooth={true} duration={500}>Stacks</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
        <li><RouterLink to="/images">Images Page</RouterLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
