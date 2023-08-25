// Contact.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css'; 

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>
        Have a project in mind or just want to say hi? Feel free to get in touch with me. I'm always open to new opportunities and collaborations.
      </p>
      <p>
        You can reach me via email at <a href="enroquemore@gmail.com">enroquemore@gmail.com</a>, or connect with me on <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>.</p>
      <p>
        Let's work together to bring your ideas to life!
      </p>
      <div className="social-links">
        <a href="https://github.com/ricapi96" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
      </div>
    </section>
  );
}

export default Contact;

