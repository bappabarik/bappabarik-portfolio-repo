import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
// import axios from 'axios';
import fetchData from '../Api setup/config';


const Projects = () => {
  const [repos, setRepos] = useState([])
  const [majorProjects, setMajorProjects] = useState([])
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    fetchData.getData('/user/repos')
    .then(response => {   
        const filteredProjects = response.data.filter(item => item.name.includes("codebeetles-blog" || "Image-Uploader") )
        setMajorProjects(filteredProjects)
        setRepos(response.data.filter(item => item.name !== "codebeetles-blog"))
    })
    .catch(error => console.error(error))
    .finally(() => setLoading(false))
  }, []);



  const tools = [
    {name: "React"},
    {name: "Redux"},
    {name: "Appwrite"},
    {name: "Tailwind CSS"},
  ]
  
  return (
    !loading ? (
      <section id="projects" className="p-8 bg-black">
        <div className=" flex justify-center items-center gap-5 relative">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white">My Projects</h2>
          
          <svg width="59" height="62" viewBox="0 0 69 92" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute -top-16 md:right-[40%] right-5'>
          <path d="M1 45.1327C12.5655 45.6219 35.2179 37.2558 33.3036 -0.122681C34.7393 15.6963 35.4571 45.1327 68 47.3343C43.1143 47.3343 33.3036 54.2816 33.3036 90.8773C33.2238 75.6291 26.6514 45.1327 1 45.1327Z" stroke="url(#paint0_linear_1008_6421)" stroke-width="2" stroke-linejoin="round"/>
          <defs>
          <linearGradient id="paint0_linear_1008_6421" x1="60.0449" y1="45.3773" x2="1" y2="45.3773" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FEBD81"/>
          <stop offset="0.489583" stop-color="#FFE598"/>
          <stop offset="1" stop-color="#BFF4A6"/>
          </linearGradient>
          </defs>
          </svg>
          <svg width="39" height="42" viewBox="0 0 69 92" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute md:right-[38%] right-3 top-0'>
          <path d="M1 45.1327C12.5655 45.6219 35.2179 37.2558 33.3036 -0.122681C34.7393 15.6963 35.4571 45.1327 68 47.3343C43.1143 47.3343 33.3036 54.2816 33.3036 90.8773C33.2238 75.6291 26.6514 45.1327 1 45.1327Z" stroke="url(#paint0_linear_1008_6421)" stroke-width="2" stroke-linejoin="round"/>
          <defs>
          <linearGradient id="paint0_linear_1008_6421" x1="60.0449" y1="45.3773" x2="1" y2="45.3773" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FEBD81"/>
          <stop offset="0.489583" stop-color="#FFE598"/>
          <stop offset="1" stop-color="#BFF4A6"/>
          </linearGradient>
          </defs>
          </svg>

        </div>
        <div className="container mx-auto  w-full ">

          <ul>
          {
            majorProjects.map(item => (
              <li key={item.id}>
                <ProjectCard repo={{...item}} tools={tools} />
              </li>
            ))
          }
          </ul>
        </div>
    </section>
    ) : (<h3>Loading...</h3>)
  );
};

export default Projects;
