import React, { useState } from "react";
import barista from "../assets/images/barista.png";
import memomates from "../assets/images/memomates.png";
import techtonic from "../assets/images/tech-tonic.png";

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
  ]);

  return (
    <section className="sections work">
      <h2 className="work-h2tag">My Projects</h2>
      {projects.map((project, i) => (
        <div className="wrapper">
          <div className="container" key={i}>
            <a href={project.deployedLink} target="_blank" rel="noreferrer">
              <img src={project.imgAsset} alt={project.name} />
            </a>
            <div className="text-block">
              {project.name}
              <br />
              <a href={project.repoLink} target="_blank" rel="noreferrer">Visit the GitHub Repo</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
