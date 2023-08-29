// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#stacks">Stacks</a></li>
        <li><a href="#contact">Contact</a></li>
        <NavLink to="/images" className="navbar-link">
        Images Page
      </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
