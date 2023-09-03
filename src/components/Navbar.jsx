// Navbar.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/projects">Projects</RouterLink></li>
        <li><RouterLink to="/stacks">Stacks</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
