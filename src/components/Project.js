import React, { useState } from "react";
import barista from "../assets/images/barista.png";
import memomates from "../assets/images/memomates.png";
import techtonic from "../assets/images/tech-tonic.png";
import jate from "../assets/images/jate-deployed.png";
import notes from "../assets/images/notes-page.png";
import test from "../assets/images/test-knowledge.png";

const Portfolio = () => {
  const [projects] = useState([
    {
      name: "barista",
      imgAsset: barista,
      repoLink: "https://github.com/jonnyboy808/barista",
      deployedLink: "https://jonnyboy808.github.io/barista/",
    },
    {
      name: "MemoMates",
      imgAsset: memomates,
      repoLink: "https://github.com/jonnyboy808/MemoMates",
      deployedLink: "https://memomates.herokuapp.com/login",
    },
    {
      name: "Tech-Tonic",
      imgAsset: techtonic,
      repoLink: "https://github.com/jonnyboy808/tech-tonic-blog",
      deployedLink: "https://murmuring-badlands-23825.herokuapp.com",
    },
    {
      name: "PWA",
      imgAsset: jate,
      repoLink: "https://github.com/jonnyboy808/personal-pwa-text-editor",
      deployedLink: "https://fierce-refuge-54485.herokuapp.com",
    },
    {
      name: "My Note Entry",
      imgAsset: notes,
      repoLink: "https://github.com/jonnyboy808/my-note-entry",
      deployedLink: "https://boiling-bayou-97610.herokuapp.com",
    },
    {
      name: "Test Your Knowledge",
      imgAsset: test,
      repoLink: "https://github.com/jonnyboy808/test-your-js-knowledge",
      deployedLink: "https://jonnyboy808.github.io/test-your-js-knowledge/",
    },
  ]);

  return (
    <section className="sections work">
      <h2 className="work">My Projects</h2>
      {projects.map((project) => (
        <div className="wrapper">
          <div className="container" >
            <a href={project.deployedLink} target="_blank" rel="noreferrer">
              <img src={project.imgAsset} alt={project.name} />
            </a>
            <div className="text-block">
              {project.name}
              <br />
              <a href={project.repoLink} target="_blank" rel="noreferrer">Click here for repo link</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
