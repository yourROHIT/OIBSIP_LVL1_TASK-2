import React from "react";

import { sociallinks } from "../Data";
import Sociallinks from "../Function/Sociallinks";

const Socialmedia = () => {
  return (
    <>
      {/* <!-- Section 5 --> */}
      <footer className="section-5 center">
        <div className="social-media">
          {sociallinks.map((links) => {
            return <Sociallinks {...links} key={links.id} />;
          })}
        </div>
        <p className="copyright">
          Copyright &copy; Rohit Singh. Protfolio Project
        </p>
      </footer>
      {/* <!-- End of Section 5 --> */}
    </>
  );
};

export default Socialmedia;
