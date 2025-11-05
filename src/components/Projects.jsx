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
    title: "FurShield",
    number: "01",
    description:
      "A comprehensive pet care platform offering veterinary services, animal shelter bookings, and pet management. Premium pet care, health tracking, and expert veterinary services all in one place - because your companion deserves the best protection.",
    img: "/images/furshield.PNG",
    technologies:
      "HTML, JavaScript, React, Tailwind, Node.js, Express, MongoDB",
    link: "https://furshield.vercel.app/",
  },
  {
    title: "Dev Quest",
    number: "02",
    description:
      "A gamified developer productivity platform where programmers transform coding tasks into epic RPG quests. Track progress, set time-bound goals, earn streaks, and unlock achievements while accessing AI-powered learning materials. Level up your skills through an engaging reward system that turns daily coding into an adventure.",
    img: "/images/dev-quest.PNG",
    technologies:
      "HTML, JavaScript, React, Tailwind, Node.js, Express, MongoDB, AI Integration",
    link: "https://dev-quest-ochre.vercel.app/",
  },
  {
    title: "CareerPilot",
    number: "03",
    description:
      "An intelligent job search platform that transforms your career journey. Track applications, discover opportunities across 50+ job boards, and land your dream job with smart analytics and reminders. Trusted by thousands worldwide with 95% success rate and 24/7 support.",
    img: "/images/career.PNG",
    technologies:
      "React, Tailwind, Node.js, Express, MongoDB, React Native, Mobile App, APK Distribution",
    link: "https://career-pilot-neon.vercel.app/user/dashboard",
  },
  {
    title: "Mobile App Showcase",
    number: "04",
    description:
      "A cross-platform mobile application featuring React Native development with backend integration. Built for seamless performance on both iOS and Android devices with full-stack capabilities.",
    img: "/images/mobile.PNG",
    technologies: "Flutter, Node.js, Express, MongoDB, Mobile Development",
    // video: "/videos/app.mp4",
  },
  {
    title: "Trip Tracker",
    number: "05",
    description:
      "A trip tracker app developed to track and manage user trips,calculate expenses with ai assistant",
    img: "/images/triptrack.png",
    technologies: "HTML, JavaScript, React, and Tailwind,Node,Express,mongoDb",
    link: "https://trip-track-frontend.vercel.app/",
  },
  {
    title: "Honey Guide",
    number: "06",
    description:
      "A travel website developed for my first job, providing users with essential travel information and resources.",
    img: "/images/guide.png",
    technologies: "HTML, JavaScript, React, and Tailwind",
    link: "https://honeys-escape.vercel.app/",
  },
  {
    title: "Alberto Watch",
    number: "07",
    description:
      "My first React project, showcasing a sleek watch catalog with an engaging user interface.",
    img: "/images/watch1.png",
    technologies: "HTML, JavaScript, React, and Tailwind",
    link: "https://my-watch-five.vercel.app/",
  },
  {
    title: "School Dashboard",
    number: "08",
    description: "A web application desgined to manage student activities",
    img: "/images/Dashboard.png",
    technologies: "HTML, JavaScript, React, and Tailwind",
    link: "https://school-admin-dashboard-47xp.vercel.app/",
  },
  {
    title: "JWebLearn",
    number: "09",
    description:
      "A web application where users can explore various tech courses and register for detailed information on tech professions.",
    img: "/images/learn.png",
    technologies: "HTML, JavaScript, React, and Tailwind",
    link: "https://web-app-two-mu.vercel.app/",
  },
  {
    title: "Alberto Store",
    number: "10",
    description:
      "A project from APTECH Computer Education in India, this e-commerce website offers a range of products with a focus on user-friendly navigation.",
    img: "/images/watch2.png",
    technologies: "HTML, JavaScript, and Tailwind",
    link: "https://alberto-store.vercel.app/",
  },
  {
    title: "JPlants",
    number: "11",
    description:
      "An application that allows users to browse and purchase a variety of plants, complete with a shopping cart feature for easy transactions.",
    img: "/images/plant.png",
    technologies: "HTML, JavaScript, React, and Tailwind",
    link: "https://my-bag-app.vercel.app/",
  },
  {
    title: "Travel Smart",
    number: "12",
    description:
      "Built for the Global Tech Wiz event, this application helps users plan their travels effectively with user-friendly tools and resources.",
    img: "/images/travel.png",
    technologies: "HTML, JavaScript, and Tailwind",
    link: "https://travel-smart-l6ow.vercel.app/",
  },
  {
    title: "Jude Auto Hub",
    number: "13",
    description:
      "My first project using Tailwind CSS, this website allows users to book mechanics for car repairs and purchase various auto parts easily.",
    img: "/images/auto.png",
    technologies: "HTML, JavaScript, and Tailwind",
    link: "https://jude-auto-hub-judes-projects-0f262ccc.vercel.app/",
  },
];

const Projects = () => {
  const swiperRef = React.useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideoModal = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
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
          delay: 5000,
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
