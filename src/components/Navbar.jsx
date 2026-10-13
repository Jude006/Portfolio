import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";
import { Link as ScrollLink, animateScroll } from "react-scroll";

const EASE = [0.22, 1, 0.36, 1];
const HEADER_OFFSET = -72; // header height, so sections land just below it

// `id` must match the id on each section
const LINKS = [
  { id: "landingPage", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "resume", label: "Resume" },
];

const scrollProps = {
  spy: true,
  smooth: true,
  duration: 500,
  offset: HEADER_OFFSET,
};

const Logo = () => (
  <button
    type="button"
    onClick={() => animateScroll.scrollToTop({ duration: 500, smooth: true })}
    aria-label="Back to top"
    className="text-xl font-bold tracking-tighter font-jetBrains focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
  >
    J<span className="text-primary">Tech.</span>
  </button>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("landingPage");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // sticky background once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu on Escape or when the screen grows to desktop
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        solid
          ? "bg-secondary/85 shadow-sm backdrop-blur-md"
          : "bg-tertiary"
      }`}
    >
      <nav
        aria-label="Main"
        className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl md:px-8 lg:px-12"
      >
        <Logo />

        {/* desktop links */}
        <ul className="items-center hidden gap-8 lg:flex">
          {LINKS.map(({ id, label }) => {
            const on = active === id;
            return (
              <li key={id}>
                <ScrollLink
                  to={id}
                  href={`#${id}`}
                  {...scrollProps}
                  onSetActive={() => setActive(id)}
                  className={`relative cursor-pointer py-1 font-Poppins text-sm font-medium transition-colors duration-300 ${
                    on ? "text-primary" : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {label}
                  {on && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                </ScrollLink>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          {/* desktop CTA */}
          <ScrollLink
            to="contact"
            href="#contact"
            smooth
            duration={500}
            offset={HEADER_OFFSET}
            className="hidden cursor-pointer rounded-md bg-primary px-6 py-3 font-jetBrains text-sm font-semibold text-secondary shadow-lg shadow-primary/30 transition-transform duration-300 hover:-translate-y-0.5 lg:inline-flex"
          >
            Contact Me
          </ScrollLink>

          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md bg-secondary shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
          >
            <motion.span
              className="h-0.5 w-5 rounded bg-gray-900"
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="h-0.5 w-5 rounded bg-gray-900"
              animate={{ opacity: open ? 0 : 1 }}
            />
            <motion.span
              className="h-0.5 w-5 rounded bg-gray-900"
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="overflow-hidden border-t border-gray-200 lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <motion.ul
              className="flex flex-col px-4 pt-2 pb-5 md:px-8"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
            >
              {LINKS.map(({ id, label }) => {
                const on = active === id;
                return (
                  <motion.li
                    key={id}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      show: { opacity: 1, x: 0 },
                    }}
                    className="border-b border-gray-200"
                  >
                    <ScrollLink
                      to={id}
                      href={`#${id}`}
                      {...scrollProps}
                      onSetActive={() => setActive(id)}
                      onClick={() => setOpen(false)}
                      className={`flex cursor-pointer items-center justify-between py-4 font-Poppins text-base font-medium transition-colors ${
                        on ? "text-primary" : "text-gray-800"
                      }`}
                    >
                      {label}
                      {on && <span className="w-2 h-2 rounded-full bg-primary" />}
                    </ScrollLink>
                  </motion.li>
                );
              })}
              <motion.li
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                className="pt-5"
              >
                <ScrollLink
                  to="contact"
                  href="#contact"
                  smooth
                  duration={500}
                  offset={HEADER_OFFSET}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-4 text-sm font-semibold rounded-md shadow-lg cursor-pointer bg-primary font-jetBrains text-secondary shadow-primary/30"
                >
                  Contact Me
                </ScrollLink>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* scroll progress */}
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-primary"
        style={{ scaleX: progress }}
      />
    </header>
  );
};

export default Navbar;