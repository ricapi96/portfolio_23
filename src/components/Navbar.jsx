// Navbar.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About Me</RouterLink></li>
        <li><RouterLink to="/projects">Projects</RouterLink></li>
        <li><RouterLink to="/stacks">Stacks</RouterLink></li>
        <li><RouterLink to="/contact">Contact Me</RouterLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
