import React from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Socialmedia from "./components/Socialmedia";

function App() {
  const Pagerefresh = (event) => {
    event.preventdefault();
  };

  return (
    <React.Fragment>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <div className="container" onSubmit={Pagerefresh}>
        <Home />
        <Navbar />
        <Skills />
        <Project />
        <Contact />
        <Socialmedia />
      </div>
    </React.Fragment>
  );
}

export default App;
