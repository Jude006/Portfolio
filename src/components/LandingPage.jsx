import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const LandingPage = () => {
  const [experienceCount, setExperienceCount] = useState(0);
  const [commitCount, setCommitCount] = useState(0);
  const [technologiesCount, setTechnologiesCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    const experienceTarget = 1;
    const experienceInterval = setInterval(() => {
      setExperienceCount((prev) => (prev < experienceTarget ? prev + 1 : prev));
      if (experienceCount === experienceTarget) clearInterval(experienceInterval);
    }, 500);

    const commitTarget = 44;
    const commitInterval = setInterval(() => {
      setCommitCount((prev) => (prev < commitTarget ? prev + 1 : prev));
      if (commitCount === commitTarget) clearInterval(commitInterval);
    }, 45);

    const technologiesTarget = 10; // Changed from 7 to 10
    const technologiesInterval = setInterval(() => {
      setTechnologiesCount((prev) => (prev < technologiesTarget ? prev + 1 : prev));
      if (technologiesCount === technologiesTarget) clearInterval(technologiesInterval);
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
        className="bg-tertiary grid grid-cols-12 py-16"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="md:col-span-7 col-span-12 lg:px-28 px-4 md:order-1 order-2 md:mt-0 mt-10">
          <motion.div
            className="flex gap-10"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="text-primary text-2xl cursor-pointer flex flex-col justify-center gap-5">
              <a href="https://web.facebook.com/profile.php?id=61566629853803"><p><FaFacebook /></p></a>
              <a href="https://www.linkedin.com/in/jude-orifa-95127b330/"><p><FaLinkedin /></p></a>
              <a href="https://x.com/orifa_jude"><p><FaTwitter /></p></a>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="md:text-3xl text-2xl font-jetBrains font-bold tracking-tighter">
                Full Stack & Mobile Developer
              </h1>
              <p className="md:text-5xl text-3xl font-jetBrains font-bold tracking-tighter w-full">
                Hello I'm{" "}
              </p>
              <p className="md:text-5xl text-3xl font-jetBrains font-bold tracking-tighter w-full text-primary stroke">
                Jude Orifa
              </p>
              <p className="font-Poppins capitalize">I develop responsive full-stack web apps and native mobile solutions with SEO optimization and intuitive UI/UX, delivering high-performance digital experiences across all platforms.</p>
              <div>
                <button className="flex gap-2 items-center font-jetBrains py-3 px-6 border-2 border-primary rounded">Download Cv <span className="text-xl"><FaDownload /></span></button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-5 col-span-12 flex w-full md:order-2 order-1 overflow-hidden md:justify-start justify-center">
          <motion.div
            className="relative h-[300px] w-[300px] flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="rotating-border h-full w-full border-dashed rounded-full border-2 border-primary"></div>
            <img 
              src="/images/Jude.jpeg" 
              alt="Static Image" 
              className='absolute w-full h-full object-cover rounded-full p-1'
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="bg-tertiary py-10 grid md:grid-cols-4 grid-cols-2 gap-4 md:px-28 justify-around px-4 w-full font-Poppins"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="flex gap-2 items-center">
          <p className="md:text-5xl text-3xl font-jetBrains font-bold text-primary stroke">{experienceCount}</p>
          <p className="text-lg">Years Of <br /> Experience</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="md:text-5xl text-3xl font-jetBrains font-bold text-primary stroke">{commitCount}</p>
          <p className="text-lg">Code <br /> Commits</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="md:text-5xl text-3xl font-jetBrains font-bold text-primary stroke">{technologiesCount}</p>
          <p className="text-lg">Technologies <br /> Mastered</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="md:text-5xl text-3xl font-jetBrains font-bold text-primary stroke">{projectsCount}</p>
          <p className="text-lg">Projects <br /> Completed</p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default LandingPage;