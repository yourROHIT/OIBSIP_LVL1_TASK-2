import React from "react";

const Navbar = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar center">
        <a href="#home" className="navbar-link">
          Home
        </a>
        <a href="#skills" className="navbar-link">
          Skills
        </a>
        <a href="#projects" className="navbar-link">
          Projects
        </a>
        <a href="#contact" className="navbar-link">
          Contact
        </a>
      </nav>

      {/* <!-- End of Navbar --> */}
    </>
  );
};

export default Navbar;
