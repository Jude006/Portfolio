import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
  FaPlay,
  FaTimes,
} from "react-icons/fa";
// Move your existing `projects` array into src/data/projects.js
// and export it:  export const projects = [ ... ];
import { projects } from "../data/projects";

const EASE = [0.22, 1, 0.36, 1];

/* ---------- helpers ---------- */
const getCategory = (p) =>
  p.category ||
  (/react native/i.test(p.technologies)
    ? "Mobile"
    : /node|express|mongo|firebase/i.test(p.technologies)
    ? "Full Stack"
    : "Frontend");

const techList = (p) =>
  (p.technologies || "").split(",").map((t) => t.trim()).filter(Boolean);

// accepts an array, or a "\n"-separated string with emoji bullets
const toList = (v) =>
  Array.isArray(v)
    ? v
    : v
    ? v.split("\n").map((s) => s.replace(/^[✅•\-\s]+/, "").trim()).filter(Boolean)
    : [];

const cleanStory = (s) => (s || "").replace(/^\u{1F4A1}\s*/u, "");

/* ---------- small pieces ---------- */
const Chip = ({ children }) => (
  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 font-jetBrains text-primary">
    {children}
  </span>
);

const Block = ({ title, children }) => (
  <div>
    <h4 className="mb-2 text-sm font-bold font-jetBrains text-primary">{title}</h4>
    {children}
  </div>
);

/* ---------- project card ---------- */
const ProjectCard = React.forwardRef(({ project, index, onOpen, reduce }, ref) => {
  const tech = techList(project);
  return (
    <motion.article
      ref={ref}
      layout={!reduce}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: EASE, delay: (index % 3) * 0.08 }}
      className="group"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open ${project.title} case study`}
        className="flex flex-col w-full h-full overflow-hidden text-left transition-all duration-300 border border-gray-200 rounded-2xl bg-secondary hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <div className="relative w-full overflow-hidden aspect-video bg-tertiary">
          <img
            src={project.img}
            alt={`${project.title} preview`}
            loading="lazy"
            className="object-cover object-top w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span className="absolute px-3 py-1 text-xs font-semibold rounded-full shadow left-3 top-3 bg-secondary/95 font-jetBrains text-primary">
            {getCategory(project)}
          </span>
        </div>

        <div className="flex flex-col flex-1 gap-3 p-5">
          <h3 className="text-lg font-bold font-jetBrains md:text-xl">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 font-Poppins">
            {project.shortDescription || project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tech.slice(0, 3).map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
            {tech.length > 3 && (
              <span className="px-1 py-1 text-xs text-gray-500 font-jetBrains">
                +{tech.length - 3}
              </span>
            )}
          </div>
          <span className="inline-flex items-center gap-2 pt-2 mt-auto text-sm font-semibold font-jetBrains text-primary">
            View case study
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </button>
    </motion.article>
  );
});
ProjectCard.displayName = "ProjectCard";

/* ---------- case-study modal ---------- */
const CaseStudy = ({ project, position, total, onClose, onPrev, onNext }) => {
  const [showVideo, setShowVideo] = useState(false);
  const closeRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    setShowVideo(false);
    scrollRef.current?.scrollTo({ top: 0 });
  }, [project.title]);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  const impact = toList(project.impact);
  const story = cleanStory(project.story);

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
      aria-label={`${project.title} case study`}
    >
      <motion.div
        ref={scrollRef}
        className="relative max-h-[94vh] w-full overflow-y-auto overscroll-contain rounded-t-3xl bg-secondary shadow-2xl sm:max-w-4xl sm:rounded-3xl"
        initial={{ y: 80, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.45, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* sticky top bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-secondary/95 backdrop-blur">
          <span className="text-xs text-gray-500 font-jetBrains">
            Project {position} of {total}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="flex items-center justify-center text-gray-700 transition-colors rounded-full h-9 w-9 bg-tertiary hover:bg-primary hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <FaTimes />
          </button>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="p-5 md:p-8"
          >
            {/* media */}
            <div className="overflow-hidden border border-gray-200 rounded-2xl bg-tertiary">
              {showVideo && project.video ? (
                <video
                  controls
                  autoPlay
                  playsInline
                  src={project.video}
                  className="mx-auto max-h-[60vh] w-full bg-black object-contain"
                />
              ) : (
                <img
                  src={project.img}
                  alt={`${project.title} preview`}
                  className="object-contain w-full aspect-video"
                />
              )}
            </div>

            {/* title + actions */}
            <div className="flex flex-col gap-4 mt-6 md:flex-row md:items-start md:justify-between">
              <div>
                <span className="text-xs font-semibold font-jetBrains text-primary">
                  {getCategory(project)}
                </span>
                <h3 className="text-2xl font-bold tracking-tighter font-jetBrains md:text-4xl">
                  {project.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-jetBrains text-sm font-semibold text-secondary shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
                  >
                    Live demo <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-colors border-2 rounded-md border-primary font-jetBrains text-primary hover:bg-primary hover:text-secondary"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.video && (
                  <button
                    type="button"
                    onClick={() => setShowVideo((v) => !v)}
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-colors border-2 rounded-md border-primary font-jetBrains text-primary hover:bg-primary hover:text-secondary"
                  >
                    <FaPlay className="text-xs" />
                    {showVideo ? "Show preview" : "Watch demo"}
                  </button>
                )}
              </div>
            </div>

            {/* tech */}
            <div className="flex flex-wrap gap-2 mt-5">
              {techList(project).map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>

            {/* case study content */}
            <div className="grid mt-8 text-sm leading-relaxed text-gray-700 gap-7 font-Poppins md:text-base">
              <Block title="Overview">
                <p>{project.description}</p>
              </Block>

              {story && (
                <Block title="The story behind it">
                  <p>{story}</p>
                </Block>
              )}

              {project.problemSolved && (
                <Block title="Problem solved">
                  <p>{project.problemSolved}</p>
                </Block>
              )}

              {impact.length > 0 && (
                <div className="p-5 rounded-2xl bg-primary/5">
                  <Block title="Impact">
                    <ul className="grid gap-2">
                      {impact.map((line) => (
                        <li key={line} className="flex gap-3">
                          <FaCheckCircle className="mt-1 shrink-0 text-primary" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </Block>
                </div>
              )}

              {project.features?.length > 0 && (
                <Block title="Key features">
                  <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </Block>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* prev / next */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 md:px-8">
          <button
            type="button"
            onClick={onPrev}
            disabled={total < 2}
            className="inline-flex items-center gap-2 text-sm font-semibold font-jetBrains text-primary disabled:opacity-40"
          >
            <FaChevronLeft /> Previous
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={total < 2}
            className="inline-flex items-center gap-2 text-sm font-semibold font-jetBrains text-primary disabled:opacity-40"
          >
            Next <FaChevronRight />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ---------- section ---------- */
const Projects = () => {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null); // index within `visible`

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map(getCategory)))],
    []
  );

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => getCategory(p) === filter)),
    [filter]
  );

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % visible.length)),
    [visible.length]
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + visible.length) % visible.length)),
    [visible.length]
  );

  // lock page scroll + keyboard controls while the modal is open
  useEffect(() => {
    if (active === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  const current = active !== null ? visible[active] : null;

  return (
    <section id="projects" className="px-4 py-16 bg-tertiary md:px-8 md:py-24">
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
            My Projects
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
            Real products I've built for real clients. Open any project for the
            full case study, live demo and source code.
          </p>
        </motion.div>

        {/* filters */}
        <div
          className="flex flex-wrap justify-center gap-2 mt-10"
          role="tablist"
          aria-label="Filter projects"
        >
          {categories.map((c) => {
            const on = filter === c;
            const count = c === "All" ? projects.length : projects.filter((p) => getCategory(p) === c).length;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={on}
                onClick={() => setFilter(c)}
                className={`relative rounded-full px-4 py-2 font-jetBrains text-xs font-semibold transition-colors md:text-sm ${
                  on ? "text-secondary" : "bg-secondary text-gray-700 hover:text-primary"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">
                  {c} <span className="opacity-70">{count}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* grid */}
        <motion.div
          layout={!reduce}
          className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <ProjectCard
                key={p.title}
                project={p}
                index={i}
                reduce={reduce}
                onOpen={() => setActive(i)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {current && (
          <CaseStudy
            key="case-study"
            project={current}
            position={active + 1}
            total={visible.length}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;