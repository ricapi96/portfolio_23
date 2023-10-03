// Contact.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import coke from '/images/coke.png';
import ContactForm from '../components/ContactForm';

function ContactPage() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const openForm = () => {
    console.log('Opening the form');
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleSubmit = () => {
    
    setSubmitted(true);
  };

  return (
    <section className="contact">
      <h2 id='contact' className='animate__animated animate__rubberBand'>Contact Me</h2>
      <p>
        Have a project in mind or just want to say hi? Feel free to get in touch with me. I'm always open to new opportunities and collaborations.
      </p>
      <p>
        You can reach me via email at <a href="mailto:enroquemore@gmail.com">enroquemore@gmail.com</a>, or connect with me on <a href="https://www.linkedin.com/in/ericaroquemore" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>.</p>
      <p>
        Let's work together to bring your ideas to life!
      </p>

      <button onClick={openForm}>Message Me</button>

      {/* Message modal */}
      {showForm && !submitted && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeForm}>&times;</span>
            <ContactForm onSubmit={handleSubmit} />
          </div>
        </div>
      )}

      {submitted && (
        <div className="success-message">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}
    </section>
  );
}
      
      
    //   <div className='pics'>
    // <img src={coke} alt="Me with a coke" className="coke rounded-image" />
    // <br />
    // <br />
    // <p>Feel free to send me a message!</p>
    //   <ContactForm />
    //   <br />
    //   <br />
    //   <br />
    // </div> 
      
    // </section>
    
//   );
// }

export default ContactPage;
