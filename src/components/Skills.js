import React from "react";

import { services } from "../Data";
import Services from "../Function/Services";

const Skills = () => {
  return (
    <>
      {" "}
      {/* <!-- Section 2 --> */}
      <section className="section-2" id="skills">
        <h1 className="section-heading section-2-heading">Skills</h1>
        <div className="progress-bars-wrapper">
          <div className="progress-bar">
            <p className="progress-text">
              HTML
              <span>97</span>%
            </p>
            <div className="progress-percent-1"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              CSS
              <span>89</span>%
            </p>
            <div className="progress-percent-2"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              JavaScript
              <span>85</span>%
            </p>
            <div className="progress-percent-3"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              SASS
              <span>80</span>%
            </p>
            <div className="progress-percent-4"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              ReactJS
              <span>60</span>%
            </p>
            <div className="progress-percent-5"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              NodeJS
              <span>50</span>%
            </p>
            <div className="progress-percent-6"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              MongoDB
              <span>50</span>%
            </p>
            <div className="progress-percent-7"></div>
          </div>
        </div>

        <div className="services">
          {services.map((service) => {
            return <Services {...service} key={service.id} />;
          })}
        </div>
      </section>
      {/* <!-- End of Section 2 --> */}
    </>
  );
};

export default Skills;
