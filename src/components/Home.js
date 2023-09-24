import React from "react";

import Profile from "../Images/rohit.png";

const Home = () => {
  return (
    <>
      {/* <!-- Section 1 --> */}
      <section className="section-1 center" id="home">
        <h1 className="section-1-heading">Web Developer</h1>
        <img src={Profile} alt="Rohit Singh" className="person-img" />
        <h3 className="person-name">Rohit Singh</h3>
        <a href="#projects" className="section-1-btn">
          Projects
        </a>
      </section>
      {/* <!-- End of Section 1 --> */}
    </>
  );
};

export default Home;
