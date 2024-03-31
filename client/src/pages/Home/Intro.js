import React from 'react'
import { useSelector } from 'react-redux';
import "./styles.css"

function Intro() {
  const { loading, portfolioData } = useSelector(state => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;
 
  return (
    <div className='flex flex-row justify-center text-white align-middle py-20 '>

      <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-30'>

        <h1 className='text-white'>{welcomeText || ""}</h1>
        <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>
          {firstName || ""} {lastName || ""}
        </h1>
        <h1 className='text-7xl sm:text-2xl text-white font-semibold'>
          {caption || ""}
        </h1>
        <p className='text-white w-2/3'>
          {description || ""}
        </p>
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded bg-primary'>Get Started</button>

      </div>

      <div 
      // style={{marginLeft:"40px",marginBottom:"150px"}}
      >
      <img
        src={require("./tushar.png")}
        alt="Hero image of me"
        // width="700px"
        style={{position:'relative', top:"10px",left:"30px"}}
        className="heroImg sm:mt-14 -ml-8"
      />
      </div>

    </div>

  )
}

export default Intro