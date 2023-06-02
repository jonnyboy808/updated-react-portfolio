import React from "react";
import proPic from "../assets/images/proPic.jpeg";

function About() {
  return (
    <section class="sections">
      <h2>About Me</h2>
        <div class="about-me">
          <img src={proPic} alt="Profile of Jonathan." />
          <p>
            Welcome to my portfolio! Thank you so much for visiting my page and taking a look around. I am a soon to graduate student within UC Berkeley's extension for coding. Learning all of the skills that it take to become a full stack web developer. While the journey has been challenging, I will admit it has opened my eyes and interest to get down to the basic workings of how we all interact and navigate throughout the web.
          </p>
        </div>
    </section>
  );
}

export default About;
