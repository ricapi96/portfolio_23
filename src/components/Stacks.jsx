// Stacks.jsx
import React from "react";
import "./Stacks.css";
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

function Stacks() {
  return (
    <section className="stacks">
      <h2 id="stacks">Technical Stacks</h2>
      <p>Here are some of the technologies and tools I'm proficient in:</p>
      <ul className="stacks-list">
        <li>
          <img src={html} alt="HTML5" className="stack-icon" />
          HTML
        </li>
        <li>
          <img src={css} alt="CSS" className="stack-icon" />
          CSS
        </li>
        <li>
          <img src={javascript} alt="JavaScript" className="stack-icon" />
          JavaScript (ES6)
        </li>
        <li>
          <img src={jquery} alt="jQuery" className="stack-icon" />
          jQuery
        </li>
        <li>
          <img src={api} alt="API's" className="stack-icon" />
          API's
        </li>
        <li>
          <img src={bootstrap} alt="Bootstrap" className="stack-icon" />
          Bootstrap
        </li>
        <li>
          <img src={express} alt="Express" className="stack-icon" />
          Express
        </li>
        <li>
          <img src={node} alt="Node" className="stack-icon" />
          Node
        </li>
        <li>
          <img src={mysql} alt="MySQL" className="stack-icon" />
          MySQL
        </li>
        <li>
          <img src={sequelize} alt="Sequelize" className="stack-icon" />
          Sequelize
        </li>
        <li>
          <img src={mongoose} alt="Mongoose" className="stack-icon" />
          Mongoose
        </li>
        <li>
          <img src={mongoDB} alt="MongoDB" className="stack-icon" />
          MongoDB
        </li>
        <li>
          <img src={react} alt="React" className="stack-icon" />
          React
        </li>
        {/* Add more items */}
      </ul>
    </section>
  );
}

export default Stacks;
