import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';
import { CiLink } from "react-icons/ci";

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const { loading, portfolioData } = useSelector(state => state.root);
    const { projects } = portfolioData;

    return (
        <div id='projects'>
            <SectionTitle title="Projects" />

            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='border-l-2 border-green-100 flex flex-col gap-10  w-1/2 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {projects.map((project, index) => (
                        <div key={index} onClick={() => {
                            setSelectedItemIndex(index);
                        }}
                            className='cursor-pointer'
                        >
                            <h1 key={index} className={`text-xl px-6
                        ${selectedItemIndex === index ?
                                    'text-tertiary  border-l-8 border-tertiary ml-[1px] bg-[#1a7f5a31] py-3' :
                                    "text-white"
                                }`}
                            >
                                {project.title}</h1>
                        </div>
                    ))}
                </div>

                {/* <div className='flex items-center justify-center gap-10 sm:flex-col'>

               <img src={projects[selectedItemIndex].image} alt='not found' className='h-60 w-72'></img>

                <div className='flex flex-col gap-5'>
                    <h1 className='text-secondary text-xl'>{projects[selectedItemIndex].title}</h1>

                    <p className='text-white'>
                        {projects[selectedItemIndex].description}
                    </p>

                    
                    <a href=''>
                        <button>
                            Github
                        </button>
                    </a>

                    <a href=''>
                        <button>
                            Demo
                        </button>
                    </a>



                </div>

            </div> */}

                <div className="hover:bg-gray-50 hover:dark:bg-[#101e38] transition-all duration-300 p-6 md:rounded-xl">
                    <img className="w-60" src=
                        {projects[selectedItemIndex].image} style={{width:"500px"}}/>
                    <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300 mt-4">{projects[selectedItemIndex].title}</h3>
                    <p className="leading-7 text-gray-500 dark:text-gray-300 font-light text-base mt-4">{projects[selectedItemIndex].description}</p>

                    <div className="flex gap-6 text-gray-500 dark:text-gray-300 font-medium">
                        <a className="flex gap-2 mt-4 hover:text-blue-600 cursor-pointer transition-all duration-300">
                            <CiLink className="text-2xl self-center" />
                            <a href={projects[selectedItemIndex].link} className="text-xs self-center">View Project</a>
                        </a>
                        <a className="flex gap-2 mt-4 hover:text-blue-600 cursor-pointer transition-all duration-300">
                            <CiLink className="text-2xl self-center" />
                            <a href={projects[selectedItemIndex].github} className="text-xs self-center">View Github</a>
                        </a>
                    </div>
                </div>




            </div>

        </div>
    )
}

export default Projects