import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/images/Jude resume.pdf";

const EASE = [0.22, 1, 0.36, 1];
const TABS = ["Experience", "Education", "Skills"];

/* ---------- content ---------- */
// `period` is optional. Add it to any role once you have the dates.
const EXPERIENCE = [
  {
    role: "Mobile Developer",
    company: "KontriFund",
    type: "Fintech startup",
    period: "Present",
    current: true,
    points: [
      "Build and maintain the KontriFund mobile app for personal savings and group contributions, using Flutter and Kotlin.",
      "Integrate Paystack and CoralPay so members can contribute and save securely.",
      "Work with PostgreSQL-backed services to give every member a clear, transparent record of contributions.",
      "Ship features in a fast-moving startup team focused on trust and financial discipline.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Freelance",
    type: "Web and mobile",
    period: "3+ years",
    points: [
      "Designed, built and launched web and mobile products for clients in education, retail, church and fintech.",
      "Delivered full-stack systems with React, Node.js, Express and MongoDB, including school management platforms with fees, results and automated email reminders.",
      "Handled the whole process from UI design to deployment, with SEO-ready, mobile-first interfaces.",
    ],
  },
  {
    role: "Mobile App Developer",
    company: "PM E-commerce",
    type: "Freelance project",
    points: [
      "Developed cross-platform mobile applications with Flutter.",
      "Built responsive mobile interfaces and connected them to backend services.",
    ],
  },
  {
    role: "Technical Instructor",
    company: "Aptech Computer Education",
    type: "Lagos, Nigeria",
    points: [
      "Taught frontend and backend development, covering HTML, CSS, JavaScript, React, Node.js, Express and MongoDB.",
      "Guided students through hands-on practice, from fundamentals to building complete projects.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Aptech Computer Education",
    type: "Lagos, Nigeria",
    points: [
      "Built responsive web interfaces with HTML, CSS, JavaScript and React.",
      "Collaborated with cross-functional teams to deliver user-friendly web applications.",
    ],
  },
];

const EDUCATION = [
  {
    year: "2023 – 2024",
    title: "Diploma in Software Engineering",
    place: "Aptech Computer Education, Lagos, Nigeria",
    text: "Full-stack development, software engineering principles and UI/UX design.",
  },
  {
    year: "2023",
    title: "Certification in Frontend Development",
    place: "Aptech Computer Education, Lagos, Nigeria",
    text: "HTML, CSS, JavaScript and responsive web design.",
  },
  {
    year: "2023",
    title: "Certification in UI/UX Design",
    place: "Online (Udemy)",
    text: "User research, design systems and prototyping.",
  },
];

const SKILLS = [
  { group: "Mobile", items: ["Flutter", "Dart", , "React Native"] },
  { group: "Frontend", items: ["HTML & CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "Java","Django", "MongoDB", "PostgreSQL"] },
  { group: "Payments & services", items: ["Paystack", "CoralPay", "JWT", "Nodemailer"] },
  { group: "Design", items: ["UI/UX", "Figma", "Photoshop", "Graphic design"] },
  { group: "Tools", items: ["Git", "GitHub"] },
];

/* ---------- motion ---------- */
const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const row = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/* ---------- experience: vertical timeline ---------- */
const Experience = ({ reduce }) => (
  <motion.ol variants={list} initial="hidden" animate="show" className="relative pl-8">
    <motion.span
      aria-hidden
      className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-gray-300"
      initial={{ scaleY: reduce ? 1 : 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 1.1, ease: EASE }}
    />
    {EXPERIENCE.map((job) => (
      <motion.li key={job.role + job.company} variants={row} className="relative pb-10 last:pb-0">
        <span
          aria-hidden
          className={`absolute -left-8 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 bg-tertiary ${
            job.current ? "border-primary" : "border-gray-400"
          }`}
        >
          {job.current && (
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-primary"
              animate={reduce ? undefined : { scale: [1, 1.8, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </span>

        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-bold font-jetBrains md:text-xl">{job.role}</h3>
          {job.period && (
            <span
              className={`font-jetBrains text-xs font-semibold ${
                job.current ? "text-primary" : "text-gray-500"
              }`}
            >
              {job.period}
            </span>
          )}
        </div>
        <p className="mt-0.5 font-Poppins text-sm">
          <span className="font-semibold text-primary">{job.company}</span>
          <span className="text-gray-500"> / {job.type}</span>
        </p>
        <ul className="grid max-w-2xl gap-2 mt-3 text-sm leading-relaxed text-gray-700 font-Poppins">
          {job.points.map((p) => (
            <li key={p} className="flex gap-3">
              <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-primary" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </motion.li>
    ))}
  </motion.ol>
);

/* ---------- education: ruled ledger ---------- */
const Education = () => (
  <motion.div variants={list} initial="hidden" animate="show" className="border-t border-gray-300">
    {EDUCATION.map((e) => (
      <motion.div
        key={e.title}
        variants={row}
        className="grid gap-1 border-b border-gray-300 py-6 sm:grid-cols-[8rem_1fr] sm:gap-6"
      >
        <span className="font-jetBrains text-xs font-semibold text-primary sm:pt-1.5">
          {e.year}
        </span>
        <div>
          <h3 className="text-lg font-bold font-jetBrains md:text-xl">{e.title}</h3>
          <p className="mt-0.5 font-Poppins text-sm text-gray-500">{e.place}</p>
          <p className="max-w-xl mt-2 text-sm leading-relaxed text-gray-700 font-Poppins">
            {e.text}
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

/* ---------- skills: grouped ledger ---------- */
const Skills = () => (
  <motion.div variants={list} initial="hidden" animate="show" className="border-t border-gray-300">
    {SKILLS.map((s) => (
      <motion.div
        key={s.group}
        variants={row}
        className="grid gap-2 border-b border-gray-300 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6"
      >
        <h3 className="font-jetBrains text-sm font-bold text-primary sm:pt-0.5">{s.group}</h3>
        <ul className="flex flex-wrap text-sm text-gray-800 gap-x-6 gap-y-2 font-Poppins">
          {s.items.map((i) => (
            <li key={i} className="flex items-center gap-2">
              <span aria-hidden className="h-1.5 w-1.5 bg-primary" />
              {i}
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
  </motion.div>
);

/* ---------- section ---------- */
const Resume = () => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState("Experience");

  return (
    <section id="resume" className="px-4 py-16 bg-tertiary md:px-8 md:py-24">
      <div className="grid max-w-6xl gap-10 mx-auto md:grid-cols-12 md:gap-14">
        {/* left: summary + tabs */}
        <motion.aside
          className="md:col-span-4 md:sticky md:top-24 md:self-start"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <h2 className="text-3xl font-bold tracking-tighter font-jetBrains md:text-5xl">
            Resume
          </h2>
          <motion.span
            aria-hidden
            className="block w-16 h-1 mt-4 origin-left rounded-full bg-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          />
          <p className="max-w-sm mt-5 text-sm leading-relaxed text-gray-700 font-Poppins">
            Software engineer with 3+ years of experience across full-stack web
            and mobile. I build the KontriFund mobile app at a fintech startup,
            and I've also taught software engineering at Aptech Computer
            Education.
          </p>

          <div
            role="tablist"
            aria-label="Resume sections"
            className="flex gap-6 mt-8 overflow-x-auto border-b border-gray-300 md:flex-col md:gap-0 md:overflow-visible md:border-b-0 md:border-l"
          >
            {TABS.map((tab) => {
              const on = active === tab;
              return (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(tab)}
                  className={`relative whitespace-nowrap py-3 font-jetBrains text-sm font-semibold transition-colors focus:outline-none focus-visible:text-primary md:px-5 md:text-left md:text-base ${
                    on ? "text-primary" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {tab}
                  {on && (
                    <motion.span
                      layoutId="resume-indicator"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-primary md:inset-y-0 md:left-0 md:right-auto md:h-auto md:w-0.5"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <motion.a
            href={resume}
            download="Jude Orifa Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 mt-8 text-sm font-semibold transition-colors border-2 rounded-md border-primary font-jetBrains text-primary hover:bg-primary hover:text-secondary"
            whileTap={{ scale: 0.97 }}
          >
            Download Resume <FaDownload />
          </motion.a>
        </motion.aside>

        {/* right: content */}
        <div className="min-h-[24rem] md:col-span-8" role="tabpanel">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              {active === "Experience" && <Experience reduce={reduce} />}
              {active === "Education" && <Education />}
              {active === "Skills" && <Skills />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Resume;