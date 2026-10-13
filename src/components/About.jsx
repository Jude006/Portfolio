import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import resume from "../assets/images/Jude resume.pdf";

const EASE = [0.22, 1, 0.36, 1];

const FACTS = [
  { label: "Focus", value: "Full-stack web and mobile development" },
  { label: "Right now", value: "Mobile Developer at KontriFund, a fintech startup" },
  { label: "Education", value: "Diploma in Software Engineering, Aptech Computer Education" },
  { label: "Also", value: "UI/UX and graphic design" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const About = () => {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="px-4 py-16 bg-secondary md:px-8 md:py-24">
      <div className="grid items-center max-w-6xl gap-12 mx-auto md:grid-cols-12 md:gap-14">
        {/* ---------- portrait ---------- */}
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="relative max-w-sm mx-auto isolate md:max-w-none">
            {/* offset outline */}
            <motion.span
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 border-2 -z-10 rounded-2xl border-primary md:translate-x-4 md:translate-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />

            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-primary">
              <img
                src="/images/about.png"
                alt="Portrait of Jude Orifa"
                loading="lazy"
                className="object-cover object-top w-full h-full"
              />
            </div>

            {/* current role */}
            <motion.div
              className="absolute flex items-center gap-3 px-4 py-3 shadow-lg inset-x-4 bottom-4 rounded-xl bg-secondary/95 backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                {!reduce && (
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
                <span className="relative h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <p className="text-xs leading-snug text-gray-700 font-Poppins md:text-sm">
                Currently building at{" "}
                <span className="font-semibold text-primary">KontriFund</span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ---------- content ---------- */}
        <motion.div
          className="md:col-span-7"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.h2
            variants={item}
            className="text-3xl font-bold tracking-tighter font-jetBrains md:text-5xl"
          >
            About me
          </motion.h2>
          <motion.span
            variants={{
              hidden: { scaleX: 0 },
              show: { scaleX: 1, transition: { duration: 0.6, ease: EASE } },
            }}
            aria-hidden
            className="block w-16 h-1 mt-4 origin-left rounded-full bg-primary"
          />

          <motion.p
            variants={item}
            className="mt-6 text-xl font-semibold leading-snug tracking-tight text-gray-900 font-jetBrains md:text-2xl"
          >
            I build full-stack web and mobile products that are fast, secure
            and easy to use.
          </motion.p>

          <motion.div
            variants={item}
            className="grid max-w-2xl gap-4 mt-5 text-sm leading-relaxed text-gray-600 font-Poppins md:text-base"
          >
            <p>
              I'm Jude Orifa, a software engineer with 3+ years of experience.
              I build responsive web apps with React, Node.js and MongoDB, and
              cross-platform mobile apps with Flutter and React Native.
            </p>
            <p>
              I currently work as a mobile developer at KontriFund, building
              secure savings and group contribution features. I've also taught
              software engineering at Aptech Computer Education, and I design
              the interfaces I build, from UI/UX to graphics.
            </p>
          </motion.div>

          {/* quick facts */}
          <motion.dl
            variants={item}
            className="max-w-2xl mt-8 border-t border-gray-300"
          >
            {FACTS.map(({ label, value }) => (
              <div
                key={label}
                className="grid gap-1 border-b border-gray-300 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6"
              >
                <dt className="text-sm font-bold font-jetBrains text-primary">
                  {label}
                </dt>
                <dd className="text-sm text-gray-800 font-Poppins">{value}</dd>
              </div>
            ))}
          </motion.dl>

          {/* actions */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mt-8">
            <ScrollLink
              to="contact"
              href="#contact"
              smooth
              duration={500}
              offset={-72}
              className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-primary px-6 py-3 font-jetBrains text-sm font-semibold text-secondary shadow-lg shadow-primary/30 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Contact me <FaArrowRight />
            </ScrollLink>
            <a
              href={resume}
              download="Jude Orifa Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-colors duration-300 border-2 rounded-md border-primary font-jetBrains text-primary hover:bg-primary hover:text-secondary"
            >
              Download Resume <FaDownload />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;