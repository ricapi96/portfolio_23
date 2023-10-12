// AboutMePage.jsx
import React from "react";
import bigCity from "/images/city.png";
import "animate.css";

function AboutMePage() {
  return (
    <section className="about-me">
      <h2 id="about" className="animate__animated animate__flip">
        About Me
      </h2>
      <p>Hi there!</p>
      <p>
        I'm Erica, a passionate Front-end developer with a background in
        computer science and engineering. I hold a Full-Stack Development
        certificate from{" "}
        <a href="https://www.edx.org" target="_blank" rel="noopener noreferrer">
          edX
        </a>{" "}
        and currently, I work for the same company, where I also teach Web
        Development. Coding and continuous learning drive me!
      </p>
      <img
        src={bigCity}
        alt="me with city background"
        className="big-city rounded-image"
      />
      <br />
      <p>
        When I'm not working on web development, I enjoy spending time outdoors.
        It offers a refreshing break from the digital realm, and I find
        inspiration in nature's simplicity. In my downtime, I'm an avid
        traveler, seeking inspiration from diverse cultures and landscapes. I
        also love being immersed in the virtual worlds of video games, where
        creativity and strategy come together in exciting ways.
      </p>

      <br />

      <br />

      <hr />

      <p>
        I'm excited to combine my technical skills with my passion for design to
        create intuitive user experiences that make a positive impact. Let's
        build something amazing together!
      </p>
      <br />

      <br />
      <br />
    </section>
  );
}

export default AboutMePage;
