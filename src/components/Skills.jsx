import React, { useState } from 'react';
import { FaChevronDown, FaMobileAlt, FaSearchDollar, FaServer } from 'react-icons/fa';
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
    { icon: <VscBracketDot />, title: "Frontend Development", experience: "More than 2 year", percentage: 95 },
    { icon: <VscSourceControl />, title: "Version Control", experience: "More than 1 year", percentage: 70 },
    { icon: <FaMobileAlt />, title: "Mobile Development", experience: "More than 1 months", percentage: 65 },
    { icon: <FaSearchDollar />, title: "SEO Optimization", experience: "More than 1 year", percentage: 60 },
    { icon: <FaServer />, title: "Backend Development", experience: "More than 6 month", percentage: 50 },
    { icon: <MdAnimation />, title: "Animation Frameworks", experience: "More than 2 year", percentage: 75 }
  ];

  return (
    <section className='px-6 md:px-10 lg:px-32'>
      <div>
        <div className='flex flex-col justify-center gap-4'>
          <h1 className='inline-block mx-auto text-2xl font-bold text-center border-b-2 md:text-4xl font-jetBrains border-primary'>Skills</h1>
          <p className='text-center font-Poppins'>My Technical Level</p>
        </div>

        <div className='grid grid-cols-1 gap-4 px-4 pb-10 mt-10 md:grid-cols-2 md:px-4 lg:px-36 font-Poppins'>
          {skillsData.map((skill, index) => (
            <div className='p-2 cursor-pointer' key={index}>
              <div className='flex items-center justify-between' onClick={() => handleToggle(index)}>
                <div className='flex gap-2'>
                  <p className='text-4xl font-bold text-primary'>{skill.icon}</p>
                  <p><span className='text-xl font-semibold'>{skill.title}</span><br /> {skill.experience}</p>
                </div>
                {/* Animate the Chevron icon on click */}
                <motion.div
                  className='text-xl text-primary'
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
                  className="mt-2 overflow-hidden"
                >
                  {/* Progress Bar Container */}
                  <div className="w-full h-4 bg-gray-200 rounded-full">
                    <motion.div
                      className="h-4 rounded-full bg-primary"
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
