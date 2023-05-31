import React, { useState } from "react";
import barista from "../assets/images/barista.png";
import memomates from "../assets/images/memomates.png";
import techtonic from "../assets/images/tech-tonic.png";

// PROJECT/PORTFOLIO COMPONENT
const Portfolio = () => {
  const [projects] = useState([
    {
      name: "barista",
      imgAsset: barista,
      repoUrl: "https://github.com/jonnyboy808/barista",
      appUrl: "https://jonnyboy808.github.io/barista/",
    },
    {
      name: "MemoMates",
      imgAsset: memomates,
      repoUrl: "https://github.com/jonnyboy808/MemoMates",
      appUrl: "https://memomates.herokuapp.com/login",
    },
    {
      name: "Tech-Tonic",
      imgAsset: techtonic,
      repoUrl: "#",
      appUrl: "#",
    },
  ]);

  return (
    <section className="sections work">
      <h2 className="work-h2tag">My Projects</h2>
      {projects.map((project, i) => (
        <div className="wrapper">
          <div className="container" key={i}>
            <a href={project.appUrl}>
              <img src={project.imgAsset} alt={project.name} />
            </a>
            <div className="text-block">
              {project.name}
              <br />
              <a href={project.repoUrl}>Visit the GitHub Repo</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
