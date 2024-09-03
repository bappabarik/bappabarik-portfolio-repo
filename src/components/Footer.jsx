import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 pb-4 bg-black text-white text-center">
      
      <svg width="484" height="97" viewBox="0 0 884 298" fill="none" xmlns="http://www.w3.org/2000/svg" className='m-auto p-0 h-22 w-44 md:h-22 md:w-44 '>
      <path d="M80.3086 149.196C88.6793 122.929 111.893 111.909 139.23 110.952C164.765 110.057 194.635 117.769 218.518 126.032C337.358 167.146 211.856 254.732 219.14 167.852C220.861 147.317 232.391 132.402 245.569 117.481C265.443 94.9794 286.079 91.5973 315.373 89.4973C366.687 85.8188 404.389 101.542 431.506 151.684C458.738 202.036 396.025 199.753 396.527 165.676C396.922 138.784 429.411 94.2666 457.158 85.9216C481.982 78.4557 525.869 77.5114 550.516 89.1864C573.63 100.135 590.266 127.378 602.674 148.885C610.372 162.227 613.686 183.56 603.996 197.002C582.238 227.182 538.582 224.253 540.644 183.71C541.417 168.492 552.646 151.835 562.409 140.646C573.089 128.405 583.076 118.143 599.41 107.842C668.081 64.5368 778.342 114.103 803.692 146.398" stroke="url(#paint0_linear_981_16831)" stroke-width="3" stroke-linecap="round"/>
      <defs>
      <linearGradient id="paint0_linear_981_16831" x1="717.802" y1="148.788" x2="80.3086" y2="148.788" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A9FE81"/>
      <stop offset="1" stop-color="#C0F0FF"/>
      </linearGradient>
      </defs>
      </svg>

      <div className="container mx-auto flex md:flex-row flex-col-reverse justify-between">
        <p className="mt-4 font-mono text-sm">&copy; 2024 Bappa Barik. All rights reserved.</p>
        <div className="mt-4 font-mono flex gap-5 justify-center items-center">
          <a href="https://github.com/bappabarik" target="_blank" rel="noopener noreferrer" className=' hover:text-purple-300 transition-all delay-100'><FaGithub size={24} /></a>
          <a href="https://x.com/bappabarik354" target="_blank" rel="noopener noreferrer" className=' hover:text-purple-300 transition-all delay-100'><FaSquareXTwitter size={24} /></a>
          <a href="https://linkedin.com/in/bappabarik" target="_blank" rel="noopener noreferrer" className=' hover:text-purple-300 transition-all delay-100'><FaLinkedin size={24} /></a>
          <a href="https://www.instagram.com/code.beetle" target="_blank" rel="noopener noreferrer" className=' hover:text-purple-300 transition-all delay-100'><FaInstagram size={24} /></a>
          <a href="https://discord.gg/6rb75yE3" target="_blank" rel="noopener noreferrer" className=' hover:text-purple-300 transition-all delay-100'><FaDiscord size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
