import React from "react";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Service from "./components/Service";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div className="relative bg-tertiary">
      <Navbar />
      <div>
        <Element name="landingPage">
          <LandingPage />
        </Element>
        <Element name="about">
          <About />
        </Element>

        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>

        <Element name="service">
          <Service />
        </Element>
        <Element name="resume">
          <Resume />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
};

export default App;
