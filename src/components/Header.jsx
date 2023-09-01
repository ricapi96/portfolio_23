// Header.jsx
import React from 'react';
import logo from '/images/logo.png';
 

function Header() {
  return (
    <header className="header">
      
      <h1>Erica Roquemore</h1>
      <img src={logo} alt="Logo" className="logo" />
      <h3>Front-end Developer</h3>
    </header>
  );
}

export default Header;