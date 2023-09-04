import React from 'react';
import featherIcon from '/public/images/feather-solid.svg'; // Update the path to your SVG

function Header() {
  return (
    <header className="header">
      <h1>Erica Roquemore</h1>
      <img src={featherIcon} alt="Feather Icon" className="feather-icon" />
      <h3>Front-end Developer</h3>
    </header>
  );
}

export default Header;