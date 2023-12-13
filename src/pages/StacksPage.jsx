// StacksPage.jsx
import React from "react";

// icons
import html from "/images/html.png";
import css from "/images/css.png";
import javascript from "/images/javascript.png";
import jquery from "/images/jquery.png";
import bootstrap from "/images/bootstrap.png";
import express from "/images/express.png";
import api from "/images/api.png";
import node from "/images/node.png";
import mysql from "/images/mysql.png";
import sequelize from "/images/sequelize.png";
import mongoose from "/images/mongoose.png";
import mongoDB from "/images/mongoDB.png";
import react from "/images/react.png";

function TechnologyCard({ name, icon, description }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="tech-card" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={icon} alt={name} className="tech-icon" />
      {isHovered && (
        <div className="tech-info">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

function StacksPage() {
  const stacks = [
    {
      name: 'HTML',
      icon: html,
    },
    {
      name: 'CSS',
      icon: css,
    },
    {
      name: 'JavaScript (ES6)',
      icon: javascript,
    },
    {
      name: 'jQuery',
      icon: jquery,
    },
    {
      name: "API's",
      icon: api,
    },
    {
      name: 'Bootstrap',
      icon: bootstrap,
    },
    {
      name: 'Express',
      icon: express,
    },
    {
      name: 'Node',
      icon: node,
    },
    {
      name: 'MySQL',
      icon: mysql,
    },
    {
      name: 'Sequelize',
      icon: sequelize,
    },
    {
      name: 'Mongoose',
      icon: mongoose,
    },
    {
      name: 'MongoDB',
      icon: mongoDB,
    },
    {
      name: 'React',
      icon: react,
    },
    // Add more stacks
  ];

  return (
    <section className="stacks">
      <h2 id="stacks" className='animate__animated animate__bounceInDown'>Technical Stacks</h2>
      <p>Here are some of the technologies and tools I'm proficient in:</p>
      <div className="stacks-grid">
        {stacks.map(stack => (
          <TechnologyCard 
            key={stack.name} 
            name={stack.name} 
            icon={stack.icon} 
            description=""
          />
        ))}
      </div>
    </section>
  );
}


export default StacksPage;
