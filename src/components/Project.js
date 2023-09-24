import React from "react";

import { projects } from "../Data";
import Project from "../Function/Projects";

const Projects = () => {
  return (
    <>
      {" "}
      {/* <!-- Section 3 --> */}
      <section className="section-3" id="projects">
        <h1 className="section-heading section-3-heading">My Projects</h1>
        <div className="projects-wrapper center">
          {projects.map((project) => {
            return <Project {...project} key={project.id} />;
          })}
        </div>
      </section>
      {/* <!-- End of Section 3 --> */}
    </>
  );
};

export default Projects;
