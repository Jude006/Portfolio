import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  FaChevronDown,
  FaMobileAlt,
  FaSearchDollar,
  FaServer,
} from "react-icons/fa";
import { MdAnimation, MdOutlineDesignServices } from "react-icons/md";
import { VscBracketDot, VscSourceControl } from "react-icons/vsc";

/* ---------- data ---------- */
const SKILLS = [
  {
    icon: VscBracketDot,
    title: "Frontend Development",
    experience: "3+ years",
    percentage: 95,
    tools: ["NextJS","React", "JavaScript", "Tailwind CSS", "HTML & CSS"],
  },
  {
    icon: FaServer,
    title: "Backend Development",
    experience: "3+ years",
    percentage: 75,
    tools: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Development",
    experience: "3+ years",
    percentage: 80,
    tools: ["Flutter","React Native", "Expo", "Native navigation"],
  },
  {
    icon: VscSourceControl,
    title: "Version Control",
    experience: "3+ years",
    percentage: 90,
    tools: ["Git", "GitHub", "Branching workflows"],
  },
  {
    icon: MdAnimation,
    title: "Animation Frameworks",
    experience: "3+ years",
    percentage: 85,
    tools: ["Framer Motion", "CSS animations", "Micro-interactions"],
  },
  {
    icon: FaSearchDollar,
    title: "SEO Optimization",
    experience: "3+ years",
    percentage: 80,
    tools: ["Semantic HTML", "Meta tags", "Core Web Vitals"],
  },
  {
    icon: MdOutlineDesignServices,
    title: "UI/UX & Graphic Design",
    experience: "2+ years",
    percentage: 85,
    tools: ["Figma", "Wireframing", "Photoshop", "Graphic design"],
  },
];

/* ---------- motion ---------- */
const EASE = [0.22, 1, 0.36, 1];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/* ---------- count-up percentage ---------- */
const Percent = ({ to, reduce }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.4,
      delay: 0.25,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return <span ref={ref}>{val}%</span>;
};

/* ---------- single skill card ---------- */
const SkillCard = ({ skill, open, onToggle, reduce }) => {
  const Icon = skill.icon;
  const panelId = `skill-panel-${skill.title.replace(/\W+/g, "-")}`;

  return (
    <motion.article
      variants={card}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.25 }}
      className={`rounded-2xl border bg-secondary p-5 transition-colors duration-300 ${
        open
          ? "border-primary shadow-lg shadow-primary/15"
          : "border-gray-200 hover:border-primary/50"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex items-center w-full gap-4 text-left rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
      >
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl transition-colors duration-300 ${
            open ? "bg-primary text-secondary" : "bg-primary/10 text-primary"
          }`}
        >
          <Icon />
        </span>

        <span className="flex-1">
          <span className="block text-base font-semibold text-gray-900 font-Poppins md:text-lg">
            {skill.title}
          </span>
          <span className="block text-sm text-gray-500 font-Poppins">
            {skill.experience}
          </span>
        </span>

        <motion.span
          className="text-primary"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          aria-hidden
        >
          <FaChevronDown />
        </motion.span>
      </button>

      {/* progress (always visible, fills when scrolled into view) */}
      <div className="flex items-center gap-3 mt-5">
        <div className="flex-1 h-2 overflow-hidden bg-gray-200 rounded-full">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ width: reduce ? `${skill.percentage}%` : 0 }}
            whileInView={{ width: `${skill.percentage}%` }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.4, delay: 0.25, ease: EASE }}
          />
        </div>
        <span className="text-sm font-bold text-right w-11 font-jetBrains text-primary">
          <Percent to={skill.percentage} reduce={reduce} />
        </span>
      </div>

      {/* expandable tools */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <motion.ul
              className="flex flex-wrap gap-2 pt-4"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            >
              {skill.tools.map((tool) => (
                <motion.li
                  key={tool}
                  variants={{
                    hidden: { opacity: 0, scale: 0.85 },
                    show: { opacity: 1, scale: 1 },
                  }}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 font-jetBrains text-primary"
                >
                  {tool}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

/* ---------- section ---------- */
const Skills = () => {
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="skills" className="px-6 py-16 md:px-10 md:py-24 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* heading */}
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <h2 className="text-3xl font-bold tracking-tighter font-jetBrains md:text-5xl">
            Skills
          </h2>
          <motion.span
            aria-hidden
            className="w-16 h-1 origin-center rounded-full bg-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          />
          <p className="max-w-md text-sm text-gray-600 font-Poppins md:text-base">
            What I use to build full-stack web and mobile products. Tap a card
            to see the tools behind it.
          </p>
        </motion.div>

        {/* cards */}
        <motion.div
          className="grid items-start grid-cols-1 gap-5 mt-12 md:grid-cols-2 lg:grid-cols-3"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {SKILLS.map((skill, index) => (
            <SkillCard
              key={skill.title}
              skill={skill}
              reduce={reduce}
              open={activeIndex === index}
              onToggle={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;