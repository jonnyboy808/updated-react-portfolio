import React from "react";
import resume from "../assets/images/for-portfolio.png";

function Resume() {
  return (
    <div class="sections resume">
      <div>
        <h2>Resume</h2>
        <div>
          <a href="https://drive.google.com/file/d/1yNEIfrkiyH9aohrgKPTdzcPNS7R1Uxop/view?usp=sharing" target="_blank" rel="noreferrer">
            <img src={resume} alt={"Screen capture of the front page of my resume."} width="350px"/>
          </a>
        </div>
      </div>
      <div>
        <h2>Skills</h2>
        <ul class="section-content">
          <li>React</li>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>HTML</li>
          <li>Heroku</li>
          <li>Git</li>
          <li>CSS</li>
          <li>APIs</li>
          <li>Insomnia</li>
          <li>MongoDB</li>
          <li>GitHub</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
