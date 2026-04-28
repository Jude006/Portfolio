import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  FaArrowAltCircleRight,
  FaArrowCircleLeft,
  FaGithub,
  FaPlay,
  FaTimes,
} from "react-icons/fa";

const projects = [
  {
    title: "Voice of Glory Assembly",
    number: "01",
    description:
      "A complete church management system that solves the pain of manual WhatsApp follow-ups. Built because our evangelism team spent 3 hours daily copying and pasting messages to new visitors one by one. Now send personalized bulk WhatsApp messages to 100+ members instantly while managing sermon streaming, events, member portals, online giving, and admin dashboards.Key Problem Solved: 📱 Bulk personalized WhatsApp messaging - Type once, send to hundreds. Eliminates 3 hours of manual work, reduces it to 5 minutes",
    shortDescription:
      "Complete church management system with sermon streaming, online giving, and member portal.",
    img: "/images/vog.PNG",
    technologies:
      "React, Tailwind CSS, Node.js, Express, MongoDB, Paystack, JWT",
    link: "https://voiceofglory.vercel.app/",
    github: "https://github.com/Jude006/voiceofglory",
    problemSolved:
      "Church evangelism team struggled to send personalized follow-up messages to hundreds of outreach contacts individually via WhatsApp. This was time-consuming (taking 2-3 hours daily) and led to inconsistent communication, causing potential new members to be forgotten.",
    story:
      "💡 The idea was born during a church evangelism meeting. As the person responsible for reaching out to people who gave their contacts, I noticed the struggle: copying and pasting messages one by one to WhatsApp, often missing people or sending late replies. I thought, 'What if I could build a system that sends personalized messages to everyone at once?' That night, I started coding Voice of Glory Assembly - a platform that not only solved the WhatsApp messaging problem but evolved into a full church management system.",
    impact:
      "✅ Reduced message sending time from 2-3 hours to 5 minutes\n✅ Increased follow-up response rate by 75%\n✅ Helped retain 40+ new members in first month\n✅ Automated birthday and event reminders",
    features: [
      "Bulk personalized WhatsApp messaging",
      "Sermon streaming and podcast",
      "Online giving with Paystack",
      "Event management system",
      "Member dashboard and profiles",
      "Admin analytics dashboard",
      "Prayer request portal",
      "Media gallery",
      "Automated birthday/event reminders",
      "Role-based access control",
    ],
  },
  {
    title: "FurShield",
    number: "02",
    description:
      "A comprehensive pet care platform offering veterinary services, animal shelter bookings, and pet management. Premium pet care, health tracking, and expert veterinary services all in one place - because your companion deserves the best protection.",
    shortDescription:
      "All-in-one pet care platform with vet services and shelter bookings.",
    img: "/images/furshield.PNG",
    technologies: "React, Tailwind, Node.js, Express, MongoDB",
    link: "https://furshield.vercel.app/",
    github: "https://github.com/Jude006",
    problemSolved:
      "Simplifies pet care management by connecting pet owners with veterinary services and shelter bookings in one unified platform.",
    features: [
      "Vet appointment booking",
      "Pet health tracking",
      "Shelter reservations",
      "Pet care reminders",
    ],
  },
  {
    title: "Dev Quest",
    number: "03",
    description:
      "A gamified developer productivity platform where programmers transform coding tasks into epic RPG quests. Track progress, set time-bound goals, earn streaks, and unlock achievements while accessing AI-powered learning materials.",
    shortDescription: "Gamified platform turning coding tasks into RPG quests.",
    img: "/images/dev-quest.PNG",
    technologies: "React, Tailwind, Node.js, Express, MongoDB, AI Integration",
    link: "https://dev-quest-ochre.vercel.app/",
    github: "https://github.com/Jude006",
    problemSolved:
      "Makes learning to code engaging and addictive through gamification, increasing developer productivity and learning retention.",
    features: [
      "RPG-style quest system",
      "Streak tracking",
      "Achievement unlocks",
      "AI-powered learning",
    ],
  },
  {
    title: "CareerPilot",
    number: "04",
    description:
      "An intelligent job search platform that transforms your career journey. Track applications, discover opportunities across 50+ job boards, and land your dream job with smart analytics and reminders.",
    shortDescription:
      "AI-powered job search platform with application tracking.",
    img: "/images/career.PNG",
    technologies: "React, Tailwind, Node.js, Express, MongoDB, React Native",
    link: "https://career-pilot-neon.vercel.app/user/dashboard",
    github: "https://github.com/Jude006",
    problemSolved:
      "Eliminates job search chaos by centralizing applications and providing intelligent tracking and reminders.",
    features: [
      "Job application tracker",
      "Multi-board search",
      "Analytics dashboard",
      "Application reminders",
    ],
  },
  {
    title: "Trip Tracker",
    number: "05",
    description:
      "A comprehensive trip management application that helps users track and manage their travels with AI-powered expense calculation and route optimization.",
    shortDescription:
      "Trip management with AI expense tracking and route optimization.",
    img: "/images/triptrack.png",
    technologies: "React, Tailwind, Node.js, Express, MongoDB, AI Integration",
    link: "https://trip-track-frontend.vercel.app/",
    github: "https://github.com/Jude006",
    problemSolved:
      "Solves travel expense management and itinerary planning with intelligent automation.",
    features: [
      "AI expense calculator",
      "Route optimization",
      "Trip history",
      "Budget tracking",
    ],
  },
  {
    title: "Honey Guide",
    number: "06",
    description:
      "A comprehensive travel website providing users with essential travel information, destination guides, and booking resources for seamless trip planning.",
    shortDescription:
      "Travel guide platform with destination info and booking.",
    img: "/images/guide.png",
    technologies: "React, Tailwind CSS",
    link: "https://honeys-escape.vercel.app/",
    github: "https://github.com/Jude006",
    problemSolved:
      "Centralizes travel information and resources for stress-free trip planning.",
    features: [
      "Destination guides",
      "Travel tips",
      "Booking integration",
      "User reviews",
    ],
  },
  {
    title: "School Dashboard",
    number: "07",
    description:
      "A comprehensive web application designed to manage student activities, track attendance, monitor academic progress, and streamline administrative tasks.",
    shortDescription:
      "Student management system for schools and administrators.",
    img: "/images/Dashboard.png",
    technologies: "React, Tailwind CSS",
    link: "https://school-admin-dashboard-47xp.vercel.app/",
    github: "https://github.com/Jude006",
    problemSolved:
      "Digitizes and streamlines school administration and student tracking.",
    features: [
      "Student attendance",
      "Grade tracking",
      "Parent communication",
      "Report generation",
    ],
  },
];

const Projects = () => {
  const swiperRef = React.useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null); // ADD THIS LINE
  const openVideoModal = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const toggleReadMore = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  return (
    <div className="px-4 py-16 md:px-8">
      {/* Professional Mobile Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 h-[100%]">
          <div className="relative w-full max-w-sm mx-4 bg-white shadow-2xl rounded-2xl md:max-w-md h-[90%]">
            {/* Close Button */}
            <button
              className="absolute z-10 p-2 text-white transition-colors bg-red-500 rounded-full shadow-lg -top-3 -right-3 hover:bg-red-600"
              onClick={closeVideoModal}
            >
              <FaTimes className="text-lg" />
            </button>

            {/* Video Container */}
            <div className="p-3">
              <video
                controls
                autoPlay
                className="w-full rounded-lg"
                src={selectedVideo}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Mobile Frame */}
            <div className="absolute inset-0 border-4 border-gray-800 pointer-events-none rounded-xl h-[90%]"></div>
          </div>
        </div>
      )}

      <div className="flex flex-col justify-center gap-2">
        <h1 className="inline-block mx-auto mb-2 text-3xl font-bold text-center border-b-2 font-jetBrains border-primary">
          My Projects
        </h1>
        <p className="mb-6 text-lg text-center text-black font-Poppins">
          A selection of projects I've worked on
        </p>
      </div>

      {/* Swiper slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        className="w-full h-full"
        ref={swiperRef}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-12 gap-3 px-4 md:py-10 md:px-10 lg:px-24">
              <div className="flex flex-col justify-center col-span-12 gap-4 px-2 py-4 md:col-span-5">
                <span className="text-3xl stroke md:text-7xl">
                  {project.number}
                </span>
                <h2 className="text-2xl font-semibold font-jetBrains">
                  {project.title}
                </h2>
                <h3 className="text-lg font-Poppins text-primary">
                  {project.technologies}
                </h3>
                <p className="capitalize font-Poppins">{project.description}</p>
            
                {expandedProject === index && (
                  <div className="p-4 mt-2 space-y-3 font-jetBrains">
                    {/* The Story - Most Important Part */}
                    {project.story && (
                      <div className="pb-3 border-b border-blue-200">
                        <h4 className="mb-2 text-sm font-bold text-primary">
                          📖 The Story Behind This Project:
                        </h4>
                        <p className="text-sm text-gray-700">
                          {project.story}
                        </p>
                      </div>
                    )}

                    {/* Problem Solved */}
                    <div>
                      <h4 className="mb-2 text-sm font-bold text-primary">
                        🎯 Problem Solved:
                      </h4>
                      <p className="text-sm text-gray-700">
                        {project.problemSolved}
                      </p>
                    </div>

                    {/* Impact / Results */}
                    {project.impact && (
                      <div className="p-3 rounded-lg bg-green-50">
                        <h4 className="mb-2 text-sm font-bold text-green-700">
                          📊 Real Impact:
                        </h4>
                        <p className="text-sm text-gray-700 whitespace-pre-line">
                          {project.impact}
                        </p>
                      </div>
                    )}

                    {/* Features */}
                    {project.features && (
                      <>
                        <h4 className="mt-2 mb-2 text-sm font-bold text-primary">
                          ✨ Key Features:
                        </h4>
                        <ul className="grid grid-cols-2 gap-1 text-sm text-gray-700">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-1">
                              <span className="text-primary">•</span> {feature}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )}
               

                <div className="flex items-center gap-4 cursor-pointer">
                  <a href="https://github.com/">
                    <button className="px-5 py-3 text-3xl border-2 border-primary rounded-2xl">
                      <FaGithub />
                    </button>
                  </a>
                  {project.video ? (
                    <button
                      className="flex items-center gap-2 px-5 py-3 transition-colors border-2 border-primary rounded-2xl hover:bg-primary hover:text-white"
                      onClick={() => openVideoModal(project.video)}
                    >
                      Watch Demo <FaPlay className="text-xl text-primary" />
                    </button>
                  ) : (
                    <a href={project.link}>
                      <button className="flex items-center gap-2 px-5 py-3 transition-colors border-2 border-primary rounded-2xl hover:bg-primary hover:text-white">
                        Demo{" "}
                        <FaArrowAltCircleRight className="text-xl text-primary" />
                      </button>
                    </a>
                  )}
                </div>
              </div>
              <div className="col-span-12 p-2 md:col-span-7 bg-secondary">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[300px] md:h-[400px] object-contain rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-center gap-10 mt-4">
        <button
          className="p-2 text-white transition-colors rounded-full bg-primary hover:bg-opacity-80"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <FaArrowCircleLeft className="text-2xl" />
        </button>
        <button
          className="p-2 text-white transition-colors rounded-full bg-primary hover:bg-opacity-80"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <FaArrowAltCircleRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Projects;
