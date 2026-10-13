import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll } from "react-scroll";
import {
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const EASE = [0.22, 1, 0.36, 1];
const HEADER_OFFSET = -72;

const EMAIL = "judeorifa28@gmail.com";
const PHONE_DISPLAY = "(+234) 806 807 8495";
const PHONE_LINK = "+2348068078495";

// `id` must match the id on each section
const PAGES = [
  { id: "landingPage", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

const SERVICES = [
  "Full-Stack Web Development",
  "Mobile App Development",
  "Custom Management Systems",
  "UI/UX Design",
  "Graphic Design",
  "SEO & Performance",
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jude-orifa-95127b330/", Icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/Jude006", Icon: FaGithub },
  { label: "X (Twitter)", href: "https://x.com/orifa_jude", Icon: FaTwitter },
  { label: "Facebook", href: "https://web.facebook.com/profile.php?id=61566629853803", Icon: FaFacebook },
];

const linkStyle =
  "relative w-fit cursor-pointer font-Poppins text-sm text-gray-300 transition-colors duration-300 hover:text-secondary after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full";

const Heading = ({ children }) => (
  <h3 className="mb-5 text-base font-bold font-jetBrains text-secondary">{children}</h3>
);

const col = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-secondary">
      <div className="px-4 pt-16 pb-8 mx-auto max-w-7xl md:px-8 lg:px-12">
        <motion.div
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* brand */}
          <motion.div variants={col} className="lg:col-span-4">
            <button
              type="button"
              onClick={() => animateScroll.scrollToTop({ duration: 500, smooth: true })}
              aria-label="Back to top"
              className="text-3xl font-bold tracking-tighter font-jetBrains focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              J<span className="text-primary">Tech.</span>
            </button>
            <p className="max-w-xs mt-4 text-sm leading-relaxed text-gray-300 font-Poppins">
              Software engineer building full-stack web and mobile products
              that are fast, secure and easy to use.
            </p>
            <div className="flex items-center gap-5 mt-6">
              {SOCIALS.map(({ label, href, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-2xl text-gray-300 transition-colors hover:text-primary"
                  whileHover={{ y: -4, scale: 1.15 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* pages */}
          <motion.nav variants={col} aria-label="Footer" className="lg:col-span-2">
            <Heading>Navigate</Heading>
            <ul className="flex flex-col gap-3">
              {PAGES.map(({ id, label }) => (
                <li key={id}>
                  <ScrollLink
                    to={id}
                    href={`#${id}`}
                    smooth
                    duration={500}
                    offset={HEADER_OFFSET}
                    className={linkStyle}
                  >
                    {label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* services */}
          <motion.div variants={col} className="lg:col-span-3">
            <Heading>Services</Heading>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <ScrollLink
                    to="services"
                    href="#services"
                    smooth
                    duration={500}
                    offset={HEADER_OFFSET}
                    className={linkStyle}
                  >
                    {s}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* contact */}
          <motion.div variants={col} className="lg:col-span-3">
            <Heading>Get in touch</Heading>
            <ul className="flex flex-col gap-4 text-sm text-gray-300 font-Poppins">
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-primary" />
                <a href={`mailto:${EMAIL}`} className="break-all transition-colors hover:text-secondary">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 shrink-0 text-primary" />
                <a href={`tel:${PHONE_LINK}`} className="transition-colors hover:text-secondary">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-primary" />
                <span>Adalamo, Ogun State, Nigeria</span>
              </li>
            </ul>

            <ScrollLink
              to="contact"
              href="#contact"
              smooth
              duration={500}
              offset={HEADER_OFFSET}
              className="mt-6 inline-flex cursor-pointer items-center rounded-md bg-primary px-5 py-3 font-jetBrains text-sm font-semibold text-secondary shadow-lg shadow-primary/30 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start a project
            </ScrollLink>
          </motion.div>
        </motion.div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center border-t mt-14 border-white/10 sm:flex-row sm:text-left">
          <p className="text-xs text-gray-400 font-Poppins">
            &copy; {year} Jude Orifa. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 font-Poppins">
            Built with React, Tailwind CSS and Framer Motion.
          </p>
          <motion.button
            type="button"
            onClick={() => animateScroll.scrollToTop({ duration: 600, smooth: true })}
            aria-label="Back to top"
            className="flex items-center justify-center w-10 h-10 text-sm transition-colors border rounded-full border-white/20 text-secondary hover:border-primary hover:bg-primary"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.92 }}
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;