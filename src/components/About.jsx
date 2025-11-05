import React from "react";
import { FaMessage } from "react-icons/fa6";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="px-4 py-24 md:px-10 lg:px-24 bg-tertiary">
      <motion.div
        className="flex flex-col justify-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="inline-block mx-auto text-4xl font-bold text-center border-b-2 font-jetBrains border-primary">
          About Me
        </h1>
        <p className="text-lg text-center font-Poppins">My Introduction</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-12 gap-6 px-4 py-14 md:px-16 lg:px-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="md:col-span-4 col-span-12 bg-primary rounded flex justify-center items-center overflow-hidden md:h-[60vh] h-[70vh]">
          <motion.img
            src="/images/about.png"
            alt="About me"
            className="object-center rounded-t md:object-cover bg-primary"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <div className="flex flex-col col-span-12 gap-6 md:col-span-8 md:p-4 font-Poppins">
          <motion.div
            className="capitalize font-Poppins"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h1>
              I'm a passionate fullstack developer specializing in building
              responsive web applications
               and cross-platform mobile solutions. With expertise across
              the development stack,
               I create seamless digital experiences that combine robust
              backends with intuitive
               frontends and performant mobile interfaces.
            </h1>
          </motion.div>

          <motion.div
            className="flex justify-between gap-2 items-center max-w-[70%]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-2xl font-bold md:text-3xl font-jetBrains">
                02+
              </p>
              <p>
                Years of  
                <br />
                Experience 
              </p>
            </div> 
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-2xl font-bold md:text-3xl font-jetBrains">
                18
              </p>
              <p> 
                Completed
                <br />
                Projects
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-2xl font-bold md:text-3xl font-jetBrains">
                02
              </p>
              <p>
                Companies 
                <br /> 
                Worked
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <button className="flex items-center gap-3 px-6 py-3 font-bold border-2 rounded font-jetBrains border-primary">
              Contact me <FaMessage />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
