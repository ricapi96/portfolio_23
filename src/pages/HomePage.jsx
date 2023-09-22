// Homepage.jsx
import React from "react";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home">
      <div className="welcome">
        <h1>Welcome to my Portfolio!</h1>
      </div>

      
      <div className="content">
        <Link to="/moreaboutme" className="btn-more-about-me">
          More About Me
          </Link>
      </div>
    </div>
  );
}

export default HomePage;

