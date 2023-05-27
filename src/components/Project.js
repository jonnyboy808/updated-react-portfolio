import React, { useState } from "react";

const Project = () => {
    const [projects] = useState([
      {
        name: "barista",
        repoUrl: "#",
        appUrl: "#",
      },
]);

return (
    <section className="sections work">
      <h2 className="work-h2tag">My Work</h2>
      <div className="section-content">
        {projects.map((project, i) => (
          <div className="wrapper">
            <div className="container" key={i}>
              <a href={project.appUrl}>
                <img src={project.imgAsset} alt={project.name} />
              </a>
              <div className="text-block">
                {project.name}
                <br/>
                <a href={project.repoUrl}>View the GitHub Repository</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;