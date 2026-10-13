import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FiCheck, FiCopy } from "react-icons/fi";
import Footer from "./Footer";

const EASE = [0.22, 1, 0.36, 1];
const FORM_ENDPOINT = "https://formspree.io/f/mldebdwz";
const EMAIL = "judeorifa28@gmail.com";
const PHONE_DISPLAY = "(+234) 806 807 8495";
const PHONE_LINK = "+2348068078495";

const SERVICES = [
  "Full-Stack Web Development",
  "Mobile App Development",
  "Custom Management System",
  "UI/UX Design",
  "Graphic Design",
  "SEO & Performance",
  "Something else",
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jude-orifa-95127b330/", Icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/Jude006", Icon: FaGithub },
  { label: "X (Twitter)", href: "https://x.com/orifa_jude", Icon: FaTwitter },
  { label: "Facebook", href: "https://web.facebook.com/profile.php?id=61566629853803", Icon: FaFacebook },
];

const INITIAL = { name: "", email: "", phone: "", service: "", message: "", _gotcha: "" };

/* ---------- validation ---------- */
const validate = (v) => {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Please enter a valid email address.";
  if (v.message.trim().length < 10) e.message = "Please write at least a few words (10 characters).";
  return e;
};

/* ---------- floating-label field ---------- */
const baseInput =
  "peer block w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 pb-2 pt-6 font-jetBrains text-sm text-gray-900 outline-none transition-colors focus:border-primary focus:ring-0";

const Field = ({ id, label, error, textarea, ...props }) => {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <Tag
        id={id}
        name={id}
        placeholder=" "
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${baseInput} ${error ? "border-red-500" : ""} ${textarea ? "resize-none" : ""}`}
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute top-0 left-0 text-xs text-gray-500 transition-all duration-200 pointer-events-none font-Poppins peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary"
      >
        {label}
      </label>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-red-600 font-Poppins">
          {error}
        </p>
      )}
    </div>
  );
};

/* ---------- contact detail row ---------- */
const DetailRow = ({ Icon, label, children }) => (
  <div className="flex items-start gap-4 py-5 border-b border-gray-300 first:border-t">
    <span className="mt-1 text-xl text-primary">
      <Icon />
    </span>
    <div className="flex-1 min-w-0">
      <p className="text-xs text-gray-500 font-Poppins">{label}</p>
      <div className="mt-0.5 break-words font-jetBrains text-sm font-semibold text-gray-900 md:text-base">
        {children}
      </div>
    </div>
  </div>
);

const linkCls = "transition-colors hover:text-primary";

/* ---------- animated success check ---------- */
const SuccessCheck = () => (
  <svg viewBox="0 0 52 52" className="w-20 h-20" aria-hidden>
    <motion.circle
      cx="26" cy="26" r="23" fill="none" strokeWidth="3" className="stroke-primary"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, ease: EASE }}
    />
    <motion.path
      d="M15 27l8 8 14-16" fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
      className="stroke-primary"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
    />
  </svg>
);

/* ---------- section ---------- */
const Contact = () => {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...values,
          _subject: `New portfolio message from ${values.name}`,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(INITIAL);
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable: the email is still a normal mailto link */
    }
  };

  const reveal = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
  };

  return (
    <>
      <section id="contact" className="px-4 py-16 md:px-8 md:py-24">
        <div className="grid max-w-6xl mx-auto gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ---------- left: details ---------- */}
          <motion.div className="lg:col-span-5" {...reveal} transition={{ duration: 0.7, ease: EASE }}>
            <h2 className="text-3xl font-bold tracking-tighter font-jetBrains md:text-5xl">
              Let's work together
            </h2>
            <motion.span
              aria-hidden
              className="block w-16 h-1 mt-4 origin-left rounded-full bg-primary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            />
            <p className="max-w-md mt-5 text-sm leading-relaxed text-gray-600 font-Poppins md:text-base">
              For project inquiries, collaboration or hiring, send me a message
              and I'll reply by email. You can also reach me directly below.
            </p>

            <div className="mt-8">
              <DetailRow Icon={FaPhoneAlt} label="Phone">
                <a href={`tel:${PHONE_LINK}`} className={linkCls}>{PHONE_DISPLAY}</a>
              </DetailRow>

              <DetailRow Icon={FaWhatsapp} label="WhatsApp">
                <a
                  href={`https://wa.me/${PHONE_LINK.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkCls}
                >
                  08068078495
                </a>
              </DetailRow>

              <DetailRow Icon={FaEnvelope} label="Email">
                <div className="flex items-center gap-3">
                  <a href={`mailto:${EMAIL}`} className={linkCls}>{EMAIL}</a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="flex items-center justify-center transition-colors rounded-full h-7 w-7 shrink-0 text-primary hover:bg-primary/10"
                  >
                    {copied ? <FiCheck /> : <FiCopy />}
                  </button>
                </div>
              </DetailRow>

              <DetailRow Icon={FaMapMarkerAlt} label="Location">
                Adalamo, Ogun State, Nigeria
              </DetailRow>
            </div>

            <div className="flex items-center gap-5 mt-8">
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
            </div>
          </motion.div>

          {/* ---------- right: form ---------- */}
          <motion.div
            className="lg:col-span-7"
            {...reveal}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {status === "success" ? (
                <motion.div
                  key="success"
                  className="flex min-h-[26rem] flex-col items-center justify-center gap-4 text-center"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  role="status"
                >
                  <SuccessCheck />
                  <h3 className="text-2xl font-bold tracking-tighter font-jetBrains">Message sent</h3>
                  <p className="max-w-sm text-sm text-gray-600 font-Poppins">
                    Thanks for reaching out. I've received your message and will reply to you by email.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="px-5 py-3 mt-2 text-sm font-semibold transition-colors border-2 rounded-md border-primary font-jetBrains text-primary hover:bg-primary hover:text-secondary"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  noValidate
                  className="grid gap-7"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold font-jetBrains md:text-2xl">Send a message</h3>

                  {/* spam trap: hidden from people, bots fill it in */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={values._gotcha}
                    onChange={onChange}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden
                  />

                  <div className="grid gap-7 sm:grid-cols-2">
                    <Field id="name" label="Full name" autoComplete="name" value={values.name} onChange={onChange} error={errors.name} />
                    <Field id="email" type="email" label="Email address" autoComplete="email" value={values.email} onChange={onChange} error={errors.email} />
                  </div>

                  <div className="grid gap-7 sm:grid-cols-2">
                    <Field id="phone" type="tel" label="Phone number (optional)" autoComplete="tel" value={values.phone} onChange={onChange} />

                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={values.service}
                        onChange={onChange}
                        className={`${baseInput} cursor-pointer appearance-none pr-7`}
                      >
                        <option value="">Not sure yet</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <label htmlFor="service" className="absolute top-0 left-0 text-xs text-gray-500 pointer-events-none font-Poppins">
                        What do you need?
                      </label>
                      <FaChevronDown className="absolute text-xs pointer-events-none bottom-3 right-1 text-primary" />
                    </div>
                  </div>

                  <Field id="message" textarea rows={4} label="Tell me about your project" value={values.message} onChange={onChange} error={errors.message} />

                  <AnimatePresence>
                    {status === "error" && (
                      <motion.p
                        role="alert"
                        className="text-sm text-red-600 font-Poppins"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        Something went wrong and your message wasn't sent. Please try again, or email me
                        directly at{" "}
                        <a href={`mailto:${EMAIL}`} className="font-semibold underline">{EMAIL}</a>.
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center justify-center w-full gap-3 px-6 py-4 text-sm font-semibold rounded-md shadow-lg bg-primary font-jetBrains text-secondary shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:justify-self-start"
                    whileHover={status === "sending" ? undefined : { y: -3 }}
                    whileTap={status === "sending" ? undefined : { scale: 0.97 }}
                  >
                    {status === "sending" ? (
                      <>
                        <motion.span
                          className="w-4 h-4 border-2 rounded-full border-secondary border-t-transparent"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      "Send message"
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;