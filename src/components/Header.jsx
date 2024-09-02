import React from 'react';
import { SiAboutdotme } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header id='about' className="p-4 bg-black text-white">
      <nav className="container mx-auto flex justify-between flex-col">
      <motion.div className="md:w-36 md:h-36 w-28 h-28 text-center flex justify-center items-center bg-zinc-900 rounded-full mx-auto overflow-hidden border-2 border-fuchsia-400 hover:shadow-[0_0_15px_5px_rgba(232,121,249,0.7)] transition-shadow delay-300"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
      >
      <img src="/profile-img.svg" alt="B" className='text-center'/>
      </motion.div>
        <h1 className="text-4xl my-4 font-bold font-mono bg-gradient-to-r from-[#DBA6F4] to-[#A981FE] bg-clip-text text-transparent"> Hi. I'm Bappa Barik. A Web Developer.</h1>
        <svg width="484" height="97" viewBox="0 0 884 297" fill="none" xmlns="http://www.w3.org/2000/svg" className='m-auto p-0 h-22 w-44 md:h-22 md:w-64 '>
        <path d="M80.3086 148.847C88.6793 122.58 111.893 111.56 139.23 110.602C164.765 109.707 194.635 117.42 218.518 125.682C337.358 166.796 211.856 254.383 219.14 167.503C220.861 146.967 232.391 132.052 245.569 117.132C265.443 94.6297 286.079 91.2477 315.373 89.1477C366.687 85.4692 404.389 101.192 431.506 151.334C458.738 201.686 396.025 199.403 396.527 165.326C396.922 138.435 429.411 93.917 457.158 85.572C481.982 78.106 525.869 77.1618 550.516 88.8368C573.63 99.7859 590.266 127.028 602.674 148.536C610.372 161.878 613.686 183.211 603.996 196.652C582.238 226.833 538.582 223.904 540.644 183.36C541.417 168.143 552.646 151.486 562.409 140.296C573.089 128.055 583.076 117.793 599.41 107.493C668.081 64.1872 778.342 113.754 803.692 146.048" stroke="url(#paint0_linear_1008_6418)" stroke-width="3" stroke-linecap="round"/>
        <defs>
        <linearGradient id="paint0_linear_1008_6418" x1="717.802" y1="148.439" x2="80.3086" y2="148.439" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DBA6F4"/>
        <stop offset="1" stop-color="#A981FE"/>
        </linearGradient>
        </defs>
        </svg>
        <ul className="flex fixed md:right-5 right-1 flex-col gap-5 items-center justify-center">
          <motion.li className='h-10 w-10 text-center flex justify-center items-center bg-gradient-to-r from-[#DBA6F4] to-[#A981FE] rounded-full text-black relative group shadow-md'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a href="#about" >
            <SiAboutdotme size={24} color='black' />
            </a>
            <span 
              className='absolute p-2 bg-slate-200 rounded-lg -left-16 mr-2 hidden group-hover:flex items-center'>
              About
            </span>
          </motion.li>
          <motion.li className='h-10 w-10 text-center flex justify-center items-center bg-gradient-to-r from-[#DBA6F4] to-[#A981FE] rounded-full text-black relative group shadow-md'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a href="#skills">
            <GiSkills size={24} />
            </a>
            <span 
              className='absolute p-2 bg-slate-200 rounded-lg -left-14 mr-8 hidden group-hover:flex items-center'>
              Skills
            </span>
          </motion.li>
          <motion.li className='h-10 w-10 text-center flex justify-center items-center bg-gradient-to-r from-[#DBA6F4] to-[#A981FE] rounded-full text-black relative group shadow-md'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a href="#projects">
              <GrProjects size={20} />
            </a>
            <span 
              className='absolute p-2 bg-slate-200 rounded-lg -left-[4.8rem] mr-2 hidden group-hover:flex items-center'>
              Projects
            </span>
          </motion.li>
          <motion.li className='h-10 w-10 text-center flex justify-center items-center bg-gradient-to-r from-[#DBA6F4] to-[#A981FE] rounded-full text-black relative group shadow-md'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a href="#contact">
              <IoMdContact size={30} />
            </a>
            <span 
              className='absolute p-2 bg-slate-200 rounded-lg -left-[4.8rem] mr-2 hidden group-hover:flex items-center'>
              Contact
            </span>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
