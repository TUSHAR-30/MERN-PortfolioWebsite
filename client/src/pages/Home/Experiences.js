import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Experiences() {
    const [selectedItemIndex,setSelectedItemIndex]=useState(0);
    const {loading,portfolioData}=useSelector(state=>state.root);
    const {experiences}=portfolioData;

  return (
    <div id='experience'>
        <SectionTitle title="Experiences"/>

        <div className='flex py-10 gap-20 sm:flex-col'>
            <div className='border-l-2 border-green-100 flex flex-col gap-10  w-1/2 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                {experiences.map((experience,index)=>(
                    <div key={index} onClick={()=>{
                        setSelectedItemIndex(index); 
                    }}
                    className='cursor-pointer'
                    >
                        <h1 key={index} className={`text-xl px-6
                        ${
                            selectedItemIndex === index? 
                            'text-tertiary  border-l-8 border-tertiary ml-[1px] bg-[#1a7f5a31] py-3':
                            "text-white"
                        }`}
                        >
                                {experience.period}</h1>
                    </div>
                ))}
            </div>
           
            <div className='flex flex-col gap-5'>
                <h1 className='text-secondary text-xl'>{experiences[selectedItemIndex].title}</h1>
                <h1 className='text-tertiary text-xl'>{experiences[selectedItemIndex].company}</h1>
                <p className='text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>

            </div>
        </div>

      
    </div>
  )
}

export default Experiences