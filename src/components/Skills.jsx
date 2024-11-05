import React, { useState } from 'react';
import { FaChevronDown, FaServer } from 'react-icons/fa';
import { FiClipboard } from 'react-icons/fi';
import { MdAnimation } from 'react-icons/md';
import { VscBracketDot, VscSourceControl } from 'react-icons/vsc';
import { motion } from 'framer-motion';

const Skills = () => {
  // State to manage which section is active (expanded)
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function to open/close accordion
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const skillsData = [
    { icon: <VscBracketDot />, title: "Frontend Developer", experience: "More than 1 year", percentage: 95 },
    { icon: <VscSourceControl />, title: "Version Control", experience: "More than 1 year", percentage: 70 },
    { icon: <FiClipboard />, title: "Project Management", experience: "Over 2 months", percentage: 60 },
    { icon: <FaServer />, title: "Fullstack", experience: "More than 1 month", percentage: 50 },
    { icon: <MdAnimation />, title: "Animation Frameworks", experience: "More than 6 months", percentage: 75 },
  ];

  return (
    <section className='md:px-10 lg:px-32 px-6'>
      <div>
        <div className='flex flex-col justify-center gap-4'>
          <h1 className='md:text-4xl text-2xl font-bold text-center font-jetBrains border-b-2 border-primary inline-block mx-auto'>Skills</h1>
          <p className='text-center font-Poppins'>My Technical Level</p>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 md:px-4 lg:px-36 px-4 gap-4 mt-10 font-Poppins pb-10'>
          {skillsData.map((skill, index) => (
            <div className='p-2 cursor-pointer' key={index}>
              <div className='flex justify-between items-center' onClick={() => handleToggle(index)}>
                <div className='flex gap-2'>
                  <p className='text-4xl text-primary font-bold'>{skill.icon}</p>
                  <p><span className='font-semibold text-xl'>{skill.title}</span><br /> {skill.experience}</p>
                </div>
                {/* Animate the Chevron icon on click */}
                <motion.div
                  className='text-primary text-xl'
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.div>
              </div>

              {/* Conditional rendering of the progress bar with animation */}
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-2"
                >
                  {/* Progress Bar Container */}
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <motion.div
                      className="bg-primary h-4 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
