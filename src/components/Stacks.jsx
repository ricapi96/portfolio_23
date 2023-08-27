// Stacks.jsx
import React from 'react';
import './Stacks.css';
// icons
import html from '../../public/images/html.png'; 

function Stacks() {
  return (
    <section className="stacks">
      <h2 id='stacks'>Technical Stacks</h2>
      <p>
        Here are some of the technologies and tools I'm proficient in:
      </p>
      <ul className='stacks-list'>
        <li>
            <img src={html} alt='HTML5' className='stack-icon' />
            HTML
        </li>
        <li>Node.js</li>
        <li>JavaScript (ES6+)</li>
        {/* Add more items */}
      </ul>
    </section>
  );
}

export default Stacks;
