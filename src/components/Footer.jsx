import React from "react";
import { FaMessage } from "react-icons/fa6";
import { FaDownload, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-primary bg-opacity-25 px-4 md:px-10 lg:px-24 py-20 mt-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 items-center">
      <div>
        <h1 className="font-jetBrains text-3xl font-bold text-start">J<span className="text-primary">Tech.</span></h1>
        <p className="font-Poppins  text-start">
          specializing in creating dynamic, responsive web applications{" "}
        </p>
      </div>
      <div>
        <ul className="font-Poppins font-semibold cursor-pointer flex flex-col gap-1">
          <Link to="landingPage" smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <li>About</li>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <li>Skills & Technology</li>
          </Link>
        </ul>
      </div>
      <div>
        <ul className="font-Poppins font-semibold cursor-pointer flex flex-col gap-1">
          <Link to="projects" smooth={true} duration={500}>
            <li>Projects</li>
          </Link>
          <Link to="service" smooth={true} duration={500}>
            <li>Services</li>
          </Link>
          <Link to="resume" smooth={true} duration={500}>
            <li>Resume</li>
          </Link>
        </ul>
      </div>
      <div className="items-start  flex flex-col justify-start gap-3  w-full">
      <div className=" text-primary text-2xl cursor-pointer flex  justify-start w-full gap-5 ">
                <a href="https://web.facebook.com/profile.php?id=61566629853803"><p><FaFacebook /></p></a>
               <a href="https://www.linkedin.com/in/jude-orifa-95127b330/"><p><FaLinkedin /></p></a>
                <a href="https://x.com/orifa_jude"><p><FaTwitter /></p></a>
            </div>
        <div className="w-full">
            <h1 className="font-jetBrains textx-l font-bold text-start w-full capitalize flex items-center gap-2">Send Us a message <FaMessage /></h1>
        </div>
        <input
          type="text"
          placeholder="Send a message"
          className="py-3 px-8 rounded bg-primary text-secondary font-jetBrains inset-0"
        />

      </div>
    </div>
  );
};

export default Footer;
