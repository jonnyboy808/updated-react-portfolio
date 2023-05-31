import React from "react";
import jResume from "../assets/images/jonathan-resume.png";

function Resume() {
  return (
    <div className="sections resume">
      <div>
        <h2>Skills</h2>
        <ul className="section-content">
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
      <div>
        <h2>Resume</h2>
        <div>
          <a href="https://drive.google.com/file/d/1SjH-WjHUKi9NLEmgSixZPLKzpEQcyts7/view?usp=sharing" target="_blank" rel="noreferrer">
            <img
              src={jResume}
              alt={"Screen capture of the front page of my resume."}
              width="350px"
            />
          </a>
        </div>
      </div>
    </div>

  );
}

export default Resume;
