import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Commits from './Commits';
import SkillsComp from './SkillsComp'
import fetchData from '../Api setup/config';




const ProjectCard = ({repo, tools}) => {
    const [commits, setCommits] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (repo && repo.owner) {
            fetchData.getData(`/repos/${repo.owner.login}/${repo.name}/commits`)
            .then(Response => setCommits(Response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        } else {
            setLoading(false)
        }
    }, [repo]);
      
    return (
        <div className='p-5 bg-black rounded-md flex gap-5 md:flex-row flex-col mt-5'>
            <div className="p-1 md:w-full rounded-xl -rotate-6 ">
                <img src="/codebeetles-blog.png" alt="codebeetles-blog" srcset="" width="500" className=' rounded-xl shadow-lg shadow-purple-400' />
                <div className=" flex gap-3 justify-between items-center md:flex-row flex-col mt-5">
                    <h2 className='text-white font-bold md:text-lg'>{repo.name}</h2>
                    <div className=" flex gap-2 items-center justify-center">
                    <a href={repo.homepage} target="_blank" className=' h-10 w-10 text-center flex justify-center items-center bg-slate-300 rounded-full text-black relative group shadow-md shadow-purple-500'><FaExternalLinkAlt /></a>
                    <a href={repo.html_url} target="_blank" className=' h-10 w-10 text-center flex justify-center items-center bg-slate-300 rounded-full text-black relative group shadow-md shadow-purple-500'><FaGithub />
                    </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between mt-5 md:ml-10 relative">

            <div className="text-left relative overflow-hidden">
            <h2 className='text-white font-bold mb-4'>Tools & Technologies:</h2>
            <marquee behavior="" direction="">
                <div className="flex gap-2 w-full">
                {tools.map((tool, index) => (
                <SkillsComp key={index} name={tool.name} className={"md:w-36 w-full text-[5px] text-center"} />
                ))}
                </div>
            </marquee>
            </div>
            

            {!loading ? ( commits.length !== 0 && (<div className=" text-left">
                <h2 className='text-white font-bold'>Commits:</h2>
                <svg width="66" height="64" viewBox="0 0 166 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M165.288 110.477C165.636 109.732 165.337 108.78 164.62 108.35L152.949 101.341C152.232 100.911 151.37 101.165 151.023 101.91C150.676 102.654 150.975 103.606 151.691 104.036L162.066 110.267L157.035 121.048C156.687 121.792 156.987 122.744 157.703 123.174C158.419 123.604 159.281 123.35 159.628 122.605L165.288 110.477ZM3.09836 2.00374C2.85587 1.16815 2.04467 0.654418 1.28651 0.856292C0.528343 1.05817 0.110311 1.8992 0.352808 2.73479L3.09836 2.00374ZM1.72559 2.36926C0.352808 2.73479 0.352826 2.73485 0.352846 2.73492C0.352854 2.73495 0.352874 2.73502 0.35289 2.73507C0.352923 2.73518 0.35296 2.73531 0.353001 2.73546C0.353084 2.73574 0.353186 2.73609 0.353307 2.73651C0.353548 2.73733 0.353863 2.73842 0.354253 2.73976C0.355033 2.74243 0.356112 2.74613 0.357491 2.75084C0.360247 2.76026 0.364202 2.77373 0.369359 2.7912C0.379674 2.82615 0.394804 2.87711 0.414793 2.94368C0.454773 3.07683 0.514196 3.27245 0.593437 3.52738C0.751915 4.03724 0.989683 4.78442 1.30973 5.74366L4.01406 4.88041C3.702 3.94509 3.47161 3.22089 3.31996 2.733C3.24414 2.48906 3.18801 2.30422 3.15119 2.18162C3.13279 2.12032 3.11921 2.07458 3.11042 2.04481C3.10603 2.02992 3.10283 2.01902 3.10082 2.01215C3.09982 2.00872 3.09911 2.0063 3.0987 2.0049C3.0985 2.0042 3.09837 2.00375 3.09831 2.00355C3.09828 2.00346 3.09827 2.00342 3.09828 2.00345C3.09829 2.00347 3.0983 2.0035 3.09831 2.00355C3.09832 2.00357 3.09833 2.00362 3.09833 2.00363C3.09835 2.00368 3.09836 2.00374 1.72559 2.36926ZM3.46337 11.802C4.12376 13.5619 4.89387 15.5388 5.77795 17.6969L8.40085 16.6143C7.53072 14.4902 6.7733 12.5458 6.12447 10.8167L3.46337 11.802ZM8.28449 23.5765C9.10631 25.4318 9.99616 27.3744 10.9559 29.3885L13.4996 28.127C12.5544 26.1432 11.678 24.2301 10.8687 22.403L8.28449 23.5765ZM13.7796 35.109C14.7175 36.9444 15.7086 38.8223 16.7541 40.7325L19.2086 39.2965C18.1796 37.4162 17.2038 35.5675 16.2803 33.7603L13.7796 35.109ZM19.8843 46.2605C20.9341 48.0525 22.0301 49.8637 23.1734 51.6864L25.5233 50.072C24.3993 48.2801 23.3214 46.4989 22.2887 44.7361L19.8843 46.2605ZM26.6267 57.0044C27.791 58.7361 28.998 60.4716 30.2486 62.2045L32.4734 60.4043C31.2459 58.7034 30.0606 56.9993 28.9169 55.2981L26.6267 57.0044ZM34.043 67.274C35.3251 68.9254 36.6482 70.5686 38.0128 72.1981L40.0868 70.2041C38.7499 68.6078 37.4532 66.9972 36.1959 65.3778L34.043 67.274ZM42.1607 76.9606C43.561 78.5058 45.001 80.0329 46.4812 81.5368L48.374 79.3431C46.9269 77.873 45.5185 76.3794 44.148 74.8672L42.1607 76.9606ZM50.9702 85.9052C52.4872 87.3181 54.0429 88.7041 55.6379 90.0586L57.3157 87.6652C55.7598 86.3439 54.2414 84.9911 52.7599 83.6113L50.9702 85.9052ZM60.4817 93.9768C62.1156 95.2341 63.7876 96.4568 65.498 97.6404L66.9251 95.0544C65.2596 93.9019 63.631 92.7109 62.0385 91.4856L60.4817 93.9768ZM70.652 101.012C72.3823 102.08 74.1491 103.107 75.9528 104.089L77.0979 101.329C75.3438 100.374 73.6252 99.375 71.9417 98.3361L70.652 101.012ZM81.3956 106.858C83.217 107.721 85.0735 108.539 86.9655 109.306L87.8038 106.401C85.9648 105.655 84.1603 104.861 82.3897 104.022L81.3956 106.858ZM92.5938 111.403C94.4693 112.041 96.3774 112.63 98.3185 113.167L98.8407 110.155C96.9531 109.632 95.0979 109.06 93.2748 108.44L92.5938 111.403ZM104.138 114.597C106.037 115.006 107.967 115.365 109.926 115.672L110.136 112.592C108.228 112.293 106.35 111.943 104.501 111.545L104.138 114.597ZM115.769 116.422C117.702 116.616 119.661 116.76 121.649 116.851L121.562 113.741C119.623 113.652 117.712 113.512 115.829 113.323L115.769 116.422ZM127.44 116.967C129.366 116.956 131.316 116.896 133.291 116.786L132.935 113.677C131.003 113.785 129.097 113.843 127.217 113.854L127.44 116.967ZM139.031 116.329C140.924 116.133 142.839 115.892 144.777 115.603L144.181 112.518C142.282 112.802 140.406 113.038 138.552 113.229L139.031 116.329ZM150.451 114.632C152.305 114.274 154.179 113.873 156.072 113.429L155.268 110.384C153.407 110.821 151.567 111.215 149.747 111.566L150.451 114.632ZM161.639 112.008C162.576 111.75 163.517 111.481 164.464 111.202L163.519 108.194C162.588 108.469 161.661 108.734 160.739 108.987L161.639 112.008Z" fill="url(#paint0_linear_784_72789)"/>
                <defs>
                <linearGradient id="paint0_linear_784_72789" x1="142.21" y1="103.739" x2="-14.3384" y2="45.6957" gradientUnits="userSpaceOnUse">
                <stop stop-color="#BFF0FF"/>
                <stop offset="1" stop-color="#82B4FF"/>
                </linearGradient>
                </defs>
                </svg>
                <ul className="h-40 overflow-y-scroll ml-20">
                    {
                        commits?.map(item => (
                            <li key={item.node_id} className='text-black text-left font-mono'>
                                <Commits commits={{...item}} />
                                <p className=' text-slate-800'>
                                    |
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>)) : "Loading..."}

            </div>
        </div>
    );
}

export default ProjectCard;
