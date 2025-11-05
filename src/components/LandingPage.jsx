import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import resume from "../assets/images/Jude resume.pdf";
// import {Link} from 'react-router-dom'

const LandingPage = () => {
  const [experienceCount, setExperienceCount] = useState(0);
  const [commitCount, setCommitCount] = useState(0);
  const [technologiesCount, setTechnologiesCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    const experienceTarget = 2;
    const experienceInterval = setInterval(() => {
      setExperienceCount((prev) => (prev < experienceTarget ? prev + 1 : prev));
      if (experienceCount === experienceTarget)
        clearInterval(experienceInterval);
    }, 500);

    const commitTarget = 44;
    const commitInterval = setInterval(() => {
      setCommitCount((prev) => (prev < commitTarget ? prev + 1 : prev));
      if (commitCount === commitTarget) clearInterval(commitInterval);
    }, 45);

    const technologiesTarget = 10;
    const technologiesInterval = setInterval(() => {
      setTechnologiesCount((prev) =>
        prev < technologiesTarget ? prev + 1 : prev
      );
      if (technologiesCount === technologiesTarget)
        clearInterval(technologiesInterval);  
    }, 150);

    const projectsTarget = 18;
    const projectsInterval = setInterval(() => {
      setProjectsCount((prev) => (prev < projectsTarget ? prev + 1 : prev));
      if (projectsCount === projectsTarget) clearInterval(projectsInterval);
    }, 85);

    return () => {
      clearInterval(experienceInterval);
      clearInterval(commitInterval);
      clearInterval(technologiesInterval);
      clearInterval(projectsInterval);
    };
  }, [experienceCount, commitCount, technologiesCount, projectsCount]);

  return (
    <motion.section
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="grid grid-cols-12 py-16 bg-tertiary"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="order-2 col-span-12 px-4 mt-10 md:col-span-7 lg:px-28 md:order-1 md:mt-0">
          <motion.div
            className="flex gap-10"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="flex flex-col justify-center gap-5 text-2xl cursor-pointer text-primary">
              <a href="https://web.facebook.com/profile.php?id=61566629853803">
                <p>
                  <FaFacebook />
                </p>
              </a>
              <a href="https://www.linkedin.com/in/jude-orifa-95127b330/">
                <p>
                  <FaLinkedin />
                </p>
              </a>
              <a href="https://x.com/orifa_jude">
                <p>
                  <FaTwitter />
                </p>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold tracking-tighter md:text-3xl font-jetBrains">
                Full Stack & Mobile Developer
              </h1>
              <p className="w-full text-3xl font-bold tracking-tighter md:text-5xl font-jetBrains">
                Hello I'm{" "}
              </p>
              <p className="w-full text-3xl font-bold tracking-tighter md:text-5xl font-jetBrains text-primary stroke">
                Jude Orifa
              </p>
              <p className="capitalize font-Poppins">
                I develop responsive full-stack web apps and native mobile
                solutions with SEO optimization and intuitive UI/UX, delivering
                high-performance digital experiences across all platforms.
              </p>
              <a href={resume}>
                <button className="flex items-center gap-2 px-6 py-3 border-2 rounded font-jetBrains border-primary">
                  Download Resume{" "}
                  <span className="text-xl">
                    <FaDownload />
                  </span>
                </button>
              </a>
            </div>
          </motion.div>
        </div>
 
        <div className="flex justify-center order-1 w-full col-span-12 overflow-hidden md:col-span-5 md:order-2 md:justify-start">
          <motion.div
            className="relative h-[300px] w-[300px] flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="w-full h-full border-2 border-dashed rounded-full rotating-border border-primary"></div>
            <img
              src="/images/Jude.jpeg"
              alt="Static Image"
              className="absolute object-cover w-full h-full p-1 rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="grid justify-around w-full grid-cols-2 gap-4 px-4 py-10 bg-tertiary md:grid-cols-4 md:px-28 font-Poppins"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="flex items-center gap-2">
          <p className="text-3xl font-bold md:text-5xl font-jetBrains text-primary stroke">
            {experienceCount}
          </p>
          <p className="text-lg">
            Years Of <br /> Experience
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-3xl font-bold md:text-5xl font-jetBrains text-primary stroke">
            {commitCount}
          </p>
          <p className="text-lg">
            Code <br /> Commits
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-3xl font-bold md:text-5xl font-jetBrains text-primary stroke">
            {technologiesCount}
          </p>
          <p className="text-lg">
            Technologies <br /> Mastered
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-3xl font-bold md:text-5xl font-jetBrains text-primary stroke">
            {projectsCount}
          </p>
          <p className="text-lg">
            Projects <br /> Completed
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default LandingPage;
