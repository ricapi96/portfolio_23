// AboutMePage.jsx
import React from 'react';
import bigCity from '/images/city.png';
import ducks from '/images/background3.jpg';
import giza from '/images/giza.jpg';
import coke from '/images/coke.png';

function AboutMePage() {
  return (
    <section className="about-me">
      <h2 id='about'>About Me</h2>
      <p>
        Hi there! I'm Erica, a dedicated Front-end developer with a passion for coding and learning My journey began when I pursued a degree in computer science and engineering, where I gained a strong foundation in coding and problem-solving.
      </p>
      <img src={bigCity} alt="Me with city background" className="big-city rounded-image" />
      <p>
      When I'm not working on web design, I enjoy spending time outdoors, often with my furry and feathered companions, including my dogs and ducks. I have a genuine passion for animals and the natural world. It's a refreshing break from the digital realm and a reminder of the beauty in simplicity.
      </p>
      <img src={ducks} alt="Lady no kids" className="ducks rounded-image" />
      <p>
        In my downtime, I'm an avid traveler, seeking inspiration from diverse cultures and landscapes. I have a great passion for ancient civilizations and history.</ p>
        <img src={giza} alt="Pyramids" className="giza rounded-image" />
        
        <p>When I'm not on the road, I'm likely immersed in the virtual worlds of video games, where creativity and strategy come together in exciting ways.
      </p>
      <hr />
      
      <p>
        I'm excited to combine my technical skills with my passion for design to create intuitive user experiences that make a positive impact. Let's build something amazing together!
      </p>
      <img src={coke} alt="Me with a coke" className="coke rounded-image " />
      <hr />
      
    </section>
  );
}

export default AboutMePage;