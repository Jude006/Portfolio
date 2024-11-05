import React from "react";
import { FaMessage } from "react-icons/fa6";

const About = () => {
  return (
    <section className="md:px-10 lg:px-24 py-24 px-4 bg-tertiary">
      <div className="flex flex-col gap-3 justify-center">
        <h1 className="font-jetBrains text-4xl font-bold text-center border-b-2 border-primary inline-block mx-auto">
          About Me
        </h1>
        <p className="text-center font-Poppins  text-lg">
          My Introduction
        </p>
      </div>
      <div className="grid grid-cols-12 gap-6 py-14 md:px-16 lg:px-32 px-4">
        <div className="md:col-span-4 col-span-12 bg-primary rounded flex justify-center items-center overflow-hidden md:h-[60vh] h-[70vh]">
          <img
            src="/images/about.png"
            alt=""
            className="md:object-cover object-center   rounded-t bg-primary "
          />
        </div>
        <div className="md:col-span-8 col-span-12  md:p-4 font-Poppins flex flex-col gap-6">
          <div className="font-Poppins capitalize">
            <h1>
              I’m a passionate frontend developer focused on building visually{" "}
              <br /> appealing and responsive websites. With expertise in modern{" "}
              <br /> web technologies, I create seamless user experiences that{" "}
              <br /> balance aesthetics with performance.
            </h1>
          </div>
          <div className="flex  justify-between gap-2 items-center max-w-[70%]">
            <div className="flex items-center gap-2 flex-col text-center">
              <p className="md:text-3xl text-2xl font-bold font-jetBrains">
                01+
              </p>
              <p>
                Years of <br />
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
                worked
              </p>
            </div>
          </div>
          <div>
            <button className="border-2 font-bold flex items-center gap-3 font-jetBrains border-primary rounded py-3 px-6">
              Contact me <FaMessage />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
