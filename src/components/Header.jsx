import React from 'react';
import featherIcon from '/images/feather-solid.svg';
import 'animate.css';

function Header() {
  return (
    <header className="header">
      <h1 className='animate__animated animate__flip'>Erica Roquemore</h1>
      <img src={featherIcon} alt="Feather Icon" className="feather-icon animate__animated animate__hinge" />
      <h3 className='animate__animated animate__slideInUp'>Front-end Developer</h3>
      
    </header>
  );
}

export default Header;