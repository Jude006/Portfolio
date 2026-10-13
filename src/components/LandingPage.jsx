import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { FaDownload, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import resume from "../assets/images/Jude resume.pdf";
import { Link } from "react-scroll";
import { FaTiktok } from "react-icons/fa6";

/* ---------- data ---------- */
const SOCIALS = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@the_gentle_dev",
    Icon: FaTiktok,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jude-orifa-95127b330/",
    Icon: FaLinkedin,
  },
  { label: "X (Twitter)", href: "https://x.com/orifa_jude", Icon: FaTwitter },
];

const FOCUS = ["Full Stack Web", "Mobile Apps", "Scalable Products"];

const STATS = [
  { value: 3, label: "Years of experience" },
  { value: 53, label: "Code commits" },
  { value: 10, label: "Technologies mastered" },
  { value: 70, label: "Projects completed" },
];

// angle (deg) on the orbit ring + label
const ORBIT = [
  { angle: 0, label: "React" },
  { angle: 90, label: "Flutter" },
  { angle: 180, label: "Node.js" },
  { angle: 270, label: "MongoDB" },
];

/* ---------- motion variants ---------- */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ---------- count-up (replaces the interval logic) ---------- */
const Counter = ({ to, reduce }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return <span ref={ref}>{val}+</span>;
};

/* ---------- rotating focus line ---------- */
const FocusRotator = ({ reduce }) => {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % FOCUS.length), 2600);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <div className="flex items-center gap-3 text-sm font-jetBrains md:text-base">
      <span className="text-gray-500">Focused on</span>
      <span className="relative inline-flex h-7 min-w-[10.5rem] overflow-hidden rounded-md bg-primary/10 px-3 text-primary">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={FOCUS[i]}
            className="absolute inset-0 flex items-center px-3 font-semibold"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {FOCUS[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
};

/* ---------- component ---------- */
const LandingPage = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-tertiary">
      {/* background: soft dot grid + blue glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: "radial-gradient(#168DD233 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse at 70% 40%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 70% 40%, black 30%, transparent 75%)",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl"
        animate={
          reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.6, 0.9, 0.6] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative grid items-center grid-cols-12 px-4 pt-16 pb-10 mx-auto max-w-7xl gap-y-12 md:pt-24 lg:px-12">
        {/* ---------- left: content ---------- */}
        <motion.div
          className="flex order-2 col-span-12 gap-6 md:order-1 md:col-span-7 md:gap-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* social rail */}
          <motion.div
            variants={item}
            className="flex flex-col items-center gap-5"
          >
            <span className="w-px h-12 bg-primary/40" aria-hidden />
            {SOCIALS.map(({ label, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-2xl text-primary"
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
              >
                <Icon />
              </motion.a>
            ))}
            <span className="w-px h-12 bg-primary/40" aria-hidden />
          </motion.div>

          <div className="flex flex-col gap-5">
            <motion.p
              variants={item}
              className="text-base text-gray-600 font-jetBrains md:text-lg"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={item}
              className="font-jetBrains text-5xl font-bold leading-[1.05] tracking-tighter text-primary md:text-7xl"
            >
              Jude Orifa
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-2xl font-bold tracking-tighter text-gray-900 font-jetBrains md:text-4xl"
            >
              Software Engineer
            </motion.h2>

            <motion.div variants={item}>
              <FocusRotator reduce={reduce} />
            </motion.div>

            <motion.p
              variants={item}
              className="max-w-xl text-sm leading-relaxed text-gray-600 font-Poppins md:text-base"
            >
              I build responsive full-stack web apps and native mobile solutions
              with SEO-minded engineering and intuitive UI/UX, delivering fast,
              reliable digital products across every platform.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-4 mt-2"
            >
              <motion.a
                href={resume}
                download="Jude Orifa Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md shadow-lg bg-primary font-jetBrains text-secondary shadow-primary/30 md:text-base"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                Download Resume
                <motion.span
                  animate={reduce ? undefined : { y: [0, 3, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaDownload />
                </motion.span>
              </motion.a>

              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="projects"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  spy={true}
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold transition-colors border-2 rounded-md cursor-pointer border-primary font-jetBrains text-primary hover:bg-primary hover:text-secondary md:text-base"
                >
                  View my work
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* ---------- right: portrait + orbit ---------- */}
        <div className="flex justify-center order-1 col-span-12 md:order-2 md:col-span-5">
          <motion.div
            className="relative flex h-[300px] w-[300px] items-center justify-center md:h-[380px] md:w-[380px] [--r:150px] md:[--r:190px]"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* orbit ring with tech chips */}
            <motion.div
              aria-hidden
              className="absolute inset-0 border-2 border-dashed rounded-full border-primary/60"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            >
              {ORBIT.map(({ angle, label }) => (
                <div
                  key={label}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(var(--r) * -1))`,
                  }}
                >
                  <motion.span
                    className="block whitespace-nowrap rounded-full bg-secondary px-3 py-1 font-jetBrains text-[11px] font-semibold text-primary shadow-md md:text-xs"
                    style={{ rotate: -angle }}
                    animate={
                      reduce ? undefined : { rotate: [-angle, -angle - 360] }
                    }
                    transition={{
                      duration: 36,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {label}
                  </motion.span>
                </div>
              ))}
            </motion.div>

            {/* portrait */}
            <motion.div
              className="relative h-[230px] w-[230px] overflow-hidden rounded-full border-4 border-secondary shadow-2xl shadow-primary/30 md:h-[290px] md:w-[290px]"
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/images/Jude.jpeg"
                alt="Portrait of Jude Orifa"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ---------- stats ---------- */}
      <motion.div
        className="relative max-w-5xl px-4 mx-auto pb-14 md:pb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid grid-cols-2 px-6 py-8 shadow-xl gap-y-8 rounded-2xl bg-secondary shadow-primary/10 md:grid-cols-4 md:divide-x md:divide-gray-200">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 text-center"
            >
              <p className="text-3xl font-bold font-jetBrains text-primary md:text-5xl">
                <Counter to={value} reduce={reduce} />
              </p>
              <p className="text-xs text-gray-600 font-Poppins md:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LandingPage;
