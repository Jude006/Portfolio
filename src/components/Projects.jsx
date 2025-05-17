import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowAltCircleRight, FaArrowCircleLeft, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Trip Tracker",
    number: "01",
    description: "A trip tracker app developed to track and manage user trips,calculate expenses with ai assistant",
    img: "/images/triptrack.png",
    technologies: 'HTML, JavaScript, React, and Tailwind,Node,Express,mongoDb',
    link: "https://trip-track-frontend.vercel.app/",
  },
  {
    title: "Honey Guide",
    number: "02",
    description: "A travel website developed for my first job, providing users with essential travel information and resources.",
    img: "/images/guide.png",
    technologies: 'HTML, JavaScript, React, and Tailwind',
    link: "https://honeys-escape.vercel.app/",
  },
  {
    title: "Alberto Watch",
    number: "03",
    description: "My first React project, showcasing a sleek watch catalog with an engaging user interface.",
    img: "/images/watch1.png",
    technologies: 'HTML, JavaScript, React, and Tailwind',
    link: "https://my-watch-five.vercel.app/",
  },
  {
    title: "School Dashboard",
    number: "04",
    description: "A web application desgined to manage student activities",
    img: "/images/Dashboard.png",
    technologies: 'HTML, JavaScript, React, and Tailwind',
    link: "https://school-admin-dashboard-47xp.vercel.app/",
  },
  {
    title: "JWebLearn",
    number: "05",
    description: "A web application where users can explore various tech courses and register for detailed information on tech professions.",
    img: "/images/learn.png",
    technologies: 'HTML, JavaScript, React, and Tailwind',
    link: "https://web-app-two-mu.vercel.app/",
  },
  {
    title: "Alberto Store",
    number: "06",
    description: "A project from APTECH Computer Education in India, this e-commerce website offers a range of products with a focus on user-friendly navigation.",
    img: "/images/watch2.png",
    technologies: 'HTML, JavaScript, and Tailwind',
    link: "https://alberto-store.vercel.app/",
  },
  {
    title: "JPlants",
    number: "07",
    description: "An application that allows users to browse and purchase a variety of plants, complete with a shopping cart feature for easy transactions.",
    img: "/images/plant.png",
    technologies: 'HTML, JavaScript, React, and Tailwind',
    link: "https://my-bag-app.vercel.app/",
  },
  {
    title: "Travel Smart",
    number: "08",
    description: "Built for the Global Tech Wiz event, this application helps users plan their travels effectively with user-friendly tools and resources.",
    img: "/images/travel.png",
    technologies: 'HTML, JavaScript, and Tailwind',
    link: "https://travel-smart-l6ow.vercel.app/",
  },
  {
    title: "Jude Auto Hub",
    number: "09",
    description: "My first project using Tailwind CSS, this website allows users to book mechanics for car repairs and purchase various auto parts easily.",
    img: "/images/auto.png",
    technologies: 'HTML, JavaScript, and Tailwind',
    link: "https://jude-auto-hub-judes-projects-0f262ccc.vercel.app/",
  },
];

const Projects = () => {
  const swiperRef = React.useRef(null); 

  return (
    <div className="md:px-8 px-4 py-16">
      <div className="flex flex-col justify-center gap-2">
        <h1 className="text-3xl font-bold text-center mb-2 font-jetBrains border-b-2 border-primary inline-block mx-auto">
          My Projects
        </h1>
        <p className="text-center text-lg text-black mb-6 font-Poppins">
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
        ref={swiperRef} // Attach the reference to the Swiper
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-12 gap-3 md:py-10 md:px-10 px-4 lg:px-24">
              <div className="md:col-span-5 col-span-12 py-4 px-2 flex flex-col justify-center gap-4">
                <span className="stroke md:text-7xl text-3xl">
                  {project.number}
                </span>
                <h2 className="text-2xl font-semibold font-jetBrains">
                  {project.title}
                </h2>
                <h3 className="text-lg font-Poppins text-primary">{project.technologies}</h3>
                <p className="font-Poppins capitalize">{project.description}</p>
                <div className="flex items-center gap-4 cursor-pointer">
                 <a href="https://github.com/">
                 <button className="border-2 border-primary py-3 px-5 rounded-2xl text-3xl">
                    <FaGithub />
                  </button>
                 </a>
                  <a href={project.link}>
                    <button className="flex items-center gap-2 border-2 border-primary rounded-2xl py-3 px-5">
                      Demo <FaArrowAltCircleRight className="text-3xl text-primary" />
                    </button>
                  </a>
                </div>
              </div>
              <div className="md:col-span-7 col-span-12  p-2 bg-secondary">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[100%] rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-center gap-10 mt-4">
        <button
          className="p-2 bg-primary text-white rounded-full"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <FaArrowCircleLeft className="text-2xl" />
        </button>
        <button
          className="p-2 bg-primary text-white rounded-full"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <FaArrowAltCircleRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Projects;
