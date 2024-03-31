import React, { useEffect, useState } from 'react';

function GotoTop() {

    const [scrolltotop,setScrollToTop]=useState(false);

    const handlegoToTopBtn=()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"});
    };

    useEffect(()=>{

        const handleScrollButtonVisibility=()=>{
            window.pageYOffset > 300 ? setScrollToTop(true):setScrollToTop(false);
        }

        window.addEventListener('scroll',handleScrollButtonVisibility);

        return()=>{
            window.removeEventListener('scorll',handleScrollButtonVisibility);
        }

    },[])

  return (
    <>
    
  
    {scrolltotop && (
        <div className='top-btn fixed bottom-5 right-7 text-red-50 cursor-pointer opacity-100' onClick={handlegoToTopBtn}>
            <img src={require("./back-to-top.png")} height="50px"  width='50px' />
         </div>
        )
    }

</>
  )
}

export default GotoTop