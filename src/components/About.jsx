import React from "react";
import { FaMessage } from "react-icons/fa6";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="md:px-10 lg:px-24 py-24 px-4 bg-tertiary">
      <motion.div
        className="flex flex-col gap-3 justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-jetBrains text-4xl font-bold text-center border-b-2 border-primary inline-block mx-auto">
          About Me
        </h1>
        <p className="text-center font-Poppins text-lg">My Introduction</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-12 gap-6 py-14 md:px-16 lg:px-32 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="md:col-span-4 col-span-12 bg-primary rounded flex justify-center items-center overflow-hidden md:h-[60vh] h-[70vh]">
          <motion.img
            src="/images/about.png"
            alt="About me"
            className="md:object-cover object-center rounded-t bg-primary"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <div className="md:col-span-8 col-span-12 md:p-4 font-Poppins flex flex-col gap-6">
          <motion.div
            className="font-Poppins capitalize"
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
            <div className="flex items-center gap-2 flex-col text-center">
              <p className="md:text-3xl text-2xl font-bold font-jetBrains">
                01+
              </p>
              <p>
                Years of
                <br />
                Experience
              </p>
            </div>
            <div className="flex items-center gap-2 flex-col text-center">
              <p className="md:text-3xl text-2xl font-bold font-jetBrains">
                18
              </p>
              <p>
                Completed
                <br />
                Projects
              </p>
            </div>
            <div className="flex items-center gap-2 flex-col text-center">
              <p className="md:text-3xl text-2xl font-bold font-jetBrains">
                01
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
            <button className="border-2 font-bold flex items-center gap-3 font-jetBrains border-primary rounded py-3 px-6">
              Contact me <FaMessage />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
