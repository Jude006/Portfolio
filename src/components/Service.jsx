import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaLayerGroup,
  FaMobileAlt,
  FaPaintBrush,
  FaSearchDollar,
  FaTimes,
} from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { Link } from "react-scroll";

const EASE = [0.22, 1, 0.36, 1];

/* ---------- data (built from your projects and skills) ---------- */
const SERVICES = [
  {
    icon: FaCode,
    title: "Full-Stack Web Development",
    summary:
      "End-to-end web apps, from the interface your users see to the database and API behind it.",
    features: [
      "Responsive React frontends styled with Tailwind CSS",
      "REST APIs built with Node.js and Express",
      "MongoDB databases with secure JWT authentication",
      "Admin dashboards and role-based access",
      "Deployment on Vercel and Render",
    ],
    tools: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    projects: ["SmartSkul", "Voice Of Glory Assembly", "Dev Quest"],
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    summary:
      "Fast, secure mobile apps for Android and iOS, including apps that handle real payments.",
    features: [
      "Cross-platform apps with Flutter and React Native",
      "Native Android development with Kotlin",
      "Payment integration with Paystack and CoralPay",
      "Secure sign-up, login and user accounts",
      "Smooth, phone-first interfaces",
    ],
    tools: ["Flutter", "Kotlin", "React Native", "PostgreSQL", "Paystack"],
    projects: ["KontriFund"],
  },
  {
    icon: FaLayerGroup,
    title: "Custom Management Systems",
    summary:
      "Web platforms that replace paper records, spreadsheets and manual WhatsApp follow-ups.",
    features: [
      "Records for students, members or customers",
      "Fee tracking, payments and online giving",
      "Automated email and WhatsApp reminders",
      "Results, report cards and analytics dashboards",
      "Separate admin and user portals",
    ],
    tools: ["React", "Node.js", "MongoDB", "Nodemailer", "Paystack"],
    projects: ["SmartSkul", "Marian Schools", "Voice of Glory Assembly"],
  },
  {
    icon: MdOutlineDesignServices,
    title: "UI/UX Design",
    summary:
      "Clean, modern interfaces that are easy to use, designed for web and mobile before a line of code is written.",
    features: [
      "Wireframes and clickable prototypes",
      "Mobile-first layouts that scale to desktop",
      "Consistent colors, typography and components",
      "Clear user flows and accessible contrast",
    ],
    tools: ["Figma", "Wireframing", "Prototyping", "Design systems"],
    projects: ["SmartSkul"],
  },
  {
    icon: FaPaintBrush,
    title: "Graphic Design",
    summary:
      "Brand visuals that make a business look professional online and in print.",
    features: [
      "Logos and brand identity",
      "Social media graphics and flyers",
      "Banners and marketing visuals",
      "Brand-consistent assets for your website",
    ],
    tools: ["Figma", "Photoshop", "Social media graphics"],
    projects: ["Echoes Creative"],
  },
  {
    icon: FaSearchDollar,
    title: "SEO & Performance",
    summary:
      "Websites that load quickly and are built so people can find them on Google.",
    features: [
      "Semantic HTML and optimized meta tags",
      "Fast loading and Core Web Vitals tuning",
      "Mobile-first responsive layouts",
      "Clean page structure for search engines",
    ],
    tools: ["Semantic HTML", "Meta tags", "Core Web Vitals", "Lighthouse"],
    projects: ["Marian Schools", "Voice of Glory Assembly"],
  },
];

/* ---------- small pieces ---------- */
const Chip = ({ children }) => (
  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 font-jetBrains text-primary">
    {children}
  </span>
);

/* ---------- service card ---------- */
const ServiceCard = ({ service, index, onOpen, reduce }) => {
  const Icon = service.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: EASE, delay: (index % 3) * 0.1 }}
      className="h-full group"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Learn more about ${service.title}`}
        className="relative flex h-full w-full flex-col gap-5 overflow-hidden rounded-2xl border border-gray-200 bg-secondary p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:p-7"
      >
        {/* accent bar grows on hover */}
        <span
          aria-hidden
          className="absolute top-0 left-0 w-0 h-1 transition-all duration-500 bg-primary group-hover:w-full"
        />

        <span className="flex items-center justify-center text-3xl transition-all duration-300 h-14 w-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-secondary">
          <motion.span
            className="flex"
            whileHover={reduce ? undefined : { rotate: -8, scale: 1.1 }}
          >
            <Icon />
          </motion.span>
        </span>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold font-jetBrains md:text-xl">
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-600 font-Poppins">
            {service.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {service.tools.slice(0, 3).map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        <span className="inline-flex items-center gap-2 text-sm font-semibold font-jetBrains text-primary">
          Learn more
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </button>
    </motion.article>
  );
};

/* ---------- detail modal ---------- */
const ServiceModal = ({ service, onClose, onGo }) => {
  const Icon = service.icon;
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={service.title}
    >
      <motion.div
        className="relative max-h-[92vh] w-full overflow-y-auto overscroll-contain rounded-t-3xl bg-secondary p-6 shadow-2xl sm:max-w-2xl sm:rounded-3xl md:p-8"
        initial={{ y: 80, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.45, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute flex items-center justify-center text-gray-700 transition-colors rounded-full right-4 top-4 h-9 w-9 bg-tertiary hover:bg-primary hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <FaTimes />
        </button>

        <div className="flex items-center gap-4 pr-10">
          <span className="flex items-center justify-center text-3xl h-14 w-14 shrink-0 rounded-xl bg-primary text-secondary">
            <Icon />
          </span>
          <h3 className="text-xl font-bold tracking-tighter font-jetBrains md:text-3xl">
            {service.title}
          </h3>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-gray-700 font-Poppins md:text-base">
          {service.summary}
        </p>

        <h4 className="text-sm font-bold mt-7 font-jetBrains text-primary">
          What you get
        </h4>
        <motion.ul
          className="grid gap-3 mt-3 text-sm text-gray-700 font-Poppins md:text-base"
          initial="hidden"
          animate="show"
          variants={{
            show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
          }}
        >
          {service.features.map((f) => (
            <motion.li
              key={f}
              className="flex gap-3"
              variants={{
                hidden: { opacity: 0, x: -14 },
                show: { opacity: 1, x: 0 },
              }}
            >
              <FaCheckCircle className="mt-1 shrink-0 text-primary" />
              <span>{f}</span>
            </motion.li>
          ))}
        </motion.ul>

        <h4 className="text-sm font-bold mt-7 font-jetBrains text-primary">
          Tools I use
        </h4>
        <div className="flex flex-wrap gap-2 mt-3">
          {service.tools.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        <h4 className="text-sm font-bold mt-7 font-jetBrains text-primary">
          See it in my work
        </h4>
        <div className="flex flex-wrap gap-2 mt-3">
          {service.projects.map((p) => (
            <span
              key={p}
              className="px-3 py-1 text-xs font-medium text-gray-700 border border-gray-200 rounded-full font-jetBrains"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          <button
            type="button"
            onClick={() => onGo("#contact")}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-jetBrains text-sm font-semibold text-secondary shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
          >
            Start a project <FaArrowRight />
          </button>
          <button
            type="button"
            onClick={() => onGo("#projects")}
            className="inline-flex items-center px-6 py-3 text-sm font-semibold transition-colors border-2 rounded-md border-primary font-jetBrains text-primary hover:bg-primary hover:text-secondary"
          >
            View my work
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ---------- section ---------- */
const Services = () => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);

  // close the modal first, then scroll, so the page isn't scroll-locked
  const goTo = useCallback((hash) => {
    setActive(null);
    setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  }, []);

  useEffect(() => {
    if (active === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  return (
    <section id="services" className="px-4 py-16 md:px-8 md:py-24">
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
            Services
          </h2>
          <motion.span
            aria-hidden
            className="w-16 h-1 origin-center rounded-full bg-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          />
          <p className="max-w-lg text-sm text-gray-600 font-Poppins md:text-base">
            From the first sketch to a live product, here is how I can help your
            business or idea go digital.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              reduce={reduce}
              onOpen={() => setActive(i)}
            />
          ))}
        </div>

        {/* closing call to action */}
        <motion.div
          className="flex flex-col items-center justify-between gap-5 px-6 py-8 text-center mt-14 rounded-2xl bg-primary text-secondary md:flex-row md:px-10 md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div>
            <h3 className="text-xl font-bold tracking-tighter font-jetBrains md:text-2xl">
              Have a project in mind?
            </h3>
            <p className="mt-1 text-sm font-Poppins text-secondary/90">
              Tell me what you need and I'll help you turn it into a working
              product.
            </p>
          </div>
          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block shrink-0"
          >
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-80}
              spy={true}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md cursor-pointer bg-secondary font-jetBrains text-primary"
            >
              Let's work together <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <ServiceModal
            key="service-modal"
            service={SERVICES[active]}
            onClose={close}
            onGo={goTo}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
