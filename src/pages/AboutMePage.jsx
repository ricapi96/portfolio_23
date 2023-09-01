// AboutMe.jsx
import React from 'react';
import bigCity from '/images/city.png';
import goosey from '/images/goose.png';
import tullip from '/images/tullip.png';
import coke from '/images/coke.png';

function AboutMePage() {
  return (
    <section className="about-me">
      <h2 id='about'>About Me</h2>
      <p>
        Hi there! I'm Erica, a passionate frontend developer with a love for nature and animals. My journey began when I pursued a degree in computer science and engineering, where I gained a strong foundation in coding and problem-solving.
      </p>
      <img src={bigCity} alt="Me with city background" className="big-city rounded-image" />
      <p>
        When I'm not crafting pixel-perfect interfaces, you can find me exploring the great outdoors, often accompanied by my furry friends. I love dogs and ducks! I believe that just as in coding, attention to detail and adaptability are essential when trekking new paths and discovering hidden gems.
      </p>
      <img src={goosey} alt="Lady no kids" className="goose rounded-image" />
      <p>
        In my downtime, I'm an avid traveler, seeking inspiration from diverse cultures and landscapes. When I'm not on the road, I'm likely immersed in the virtual worlds of video games, where creativity and strategy come together in exciting ways.
      </p>
      <img src={tullip} alt="Me with a flower" className="flower rounded-image" />
      <p></p>
      <p>
        I'm excited to combine my technical skills with my passion for design to create intuitive user experiences that make a positive impact. Let's build something amazing together!
      </p>
      <img src={coke} alt="Me with a coke" className="coke rounded-image " />
    </section>
  );
}

export default AboutMePage;






