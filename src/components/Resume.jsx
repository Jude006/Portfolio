import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('Experience');

  const experienceData = [
    {
      title: "Frontend Developer",
      description: "Developed and implemented responsive web interfaces using HTML, CSS, JavaScript, and ReactJS. Collaborated with cross-functional teams to create user-friendly web applications.",
      company: "Aptech Computer Education",
      location: "Lagos, Nigeria"
    },
{
  title: "Technical Instructor",
  description: "Instructed students in frontend and backend development technologies including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
  company: "Aptech Computer Education", 
  location: "Lagos, Nigeria"
},
    {
  title: "Mobile App Developer",
  description: "Developed cross-platform mobile applications using Flutter . Built responsive mobile interfaces and integrated with backend services.",
  company: "Pm E-commerce",
 location: "Freelance Project"
}
  ];

  const educationData = [
    {
      institution: "Aptech Computer Education",
      degree: "Diploma in Software Engineering",
      year: "2023 - 2024",
      location: "Lagos, Nigeria",
      description: "Focused on full-stack development, software engineering principles, and UI/UX design."
    },
    {
      institution: "Online Learning Platforms",
      degree: "Certification in UI/UX Design",
      year: "2023",
      location: "Remote",
      description: "Completed courses in UX Design from platform like Udemy . Specialized in user research, design systems, and prototyping."
    },
    {
      institution: "Aptech Computer Education",
      degree: "Certification in Frontend Development",
      year: "2023",
      location: "Lagos, Nigeria",
      description: "Specialized in HTML, CSS, JavaScript, and responsive web design."
    }
  ];

  const skillsData = [
      { name: "HTML & CSS", image: "/images/html.png", description: "Proficient in creating responsive and modern websites using HTML5 and CSS3." },
      { name: "JavaScript", image: "/images/javascript.png", description: "Strong experience in JavaScript, ES6, and DOM manipulation." },
      { name: "Tailwind CSS", image: "/images/tailwind.png", description: "Expertise in using Tailwind CSS for modern and fast UI development." },
      { name: "ReactJS", image: "/images/react.png", description: "Skilled in building dynamic web applications with React, hooks, and state management." },
      { name: "Node.js", image: "/images/node.png", description: "Capable of building RESTful APIs and server-side applications using Node.js." },
      { name: "Java", image: "/images/java.jpg", description: "Experienced in object-oriented programming with Java for backend systems." },
      { name: "Dart", image: "/images/dart.jpg", description: "Proficient in Dart programming for building cross-platform mobile applications." },
      { name: "Flutter", image: "/images/flutter.png", description: "Expert in developing high-performance mobile apps for Android and iOS using Flutter." },
      { name: "React Native", image: "/images/react-native.webp", description: "Skilled in creating native mobile applications using React Native framework." },
      { name: "Next.js", image: "/images/nextjs.webp", description: "Experienced in building server-side rendered and static websites with Next.js." }
  ];

  const renderContent = () => {
    if (activeSection === 'Experience') {
      return experienceData.map((item, index) => (
        <motion.div 
          key={index} 
          className="mb-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold font-jetBrains">{item.title} - {item.company}</h3>
          <p className="text-sm font-Poppins">{item.description}</p>
          <span className="text-xs font-Poppins ">{item.year} | {item.location}</span>
        </motion.div>
      ));
    } else if (activeSection === 'Education') {
      return educationData.map((item, index) => (
        <motion.div 
          key={index} 
          className="mb-4 "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold font-jetBrains">{item.degree} - {item.institution}</h3>
          <p className="text-sm font-Poppins">{item.description}</p>
          <span className="text-xs font-Poppins">{item.year} | {item.location}</span>
        </motion.div>
      ));
    } else if (activeSection === 'Skills') {
      return skillsData.map((skill, index) => (
        <motion.div 
        key={index} 
        className="flex items-center gap-6 p-4 mb-4 border-b-2 rounded-lg bg-secondary border-primary"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-shrink-0">
          <img src={skill.image} alt={skill.name} className="object-cover object-center w-20 h-20 rounded-full" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold font-jetBrains">{skill.name}</h3>
          <p className="text-sm font-Poppins">{skill.description}</p>
        </div>
      </motion.div>
      ));
    }
  };

  return (
    <section className='py-20'>
      <div className='flex justify-center w-full'>
        <h1 className='inline mx-auto text-3xl font-bold text-center border-b-2 font-jetBrains border-primary'>My Resume</h1>
      </div>
      <div className='grid grid-cols-12 md:px-10 px-4 lg:px-24 py-10 gap-6 md:max-h-[60vh]'>
        <div className='col-span-12 px-4 py-6 rounded-lg shadow-md md:col-span-4 bg-secondary'>
          <div>
            <h1 className='text-3xl font-bold font-jetBrains'>Why Hire Me?</h1>
          </div>
          <div className='mt-4'>
            <p className='font-jetBrains'>Motivated and innovative tech professional with a passion for digital solutions.</p>
          </div>
          <div className='flex flex-col gap-3 my-6'>
            <button
              onClick={() => setActiveSection('Experience')}
              className={`focus:bg-primary bg-primary bg-opacity-25 py-3 px-6 w-full text-secondary rounded-xl hover:bg-opacity-50 duration-300 ease-linear font-jetBrains ${activeSection === 'Experience' && 'bg-opacity-50'}`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveSection('Education')}
              className={`focus:bg-primary bg-primary bg-opacity-25 py-3 px-6 w-full text-secondary rounded-xl hover:bg-opacity-50 duration-300 ease-linear font-jetBrains ${activeSection === 'Education' && 'bg-opacity-50'}`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveSection('Skills')}
              className={`focus:bg-primary bg-primary bg-opacity-25 py-3 px-6 w-full text-secondary rounded-xl hover:bg-opacity-50 duration-300 ease-linear font-jetBrains ${activeSection === 'Skills' && 'bg-opacity-50'}`}
            >
              Skills
            </button>
          </div>
        </div>
        <motion.div 
          className='md:col-span-8 col-span-12  py-6 px-6 rounded-lg shadow-md overflow-y-auto  max-h-[60vh] bg-secondary'
          key={activeSection} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
