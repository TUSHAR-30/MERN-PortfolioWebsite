import React from 'react'

function LeftSider() {
  return (
    <div className='fixed left-0 bottom-0 px-10  sm:static'>
        <div className='flex flex-col items-center'>
            <div className='flex flex-col gap-3 sm:flex-row'>
              {/* <a href=''>
                <i class="ri-facebook-circle-line text-gray-400"></i>
              </a>

              <a href=''>
                <i class="ri-mail-line text-gray-400 text-xl"></i>
              </a> */}
              
              <a href='https://www.instagram.com/tusharchawla30/'>
                <i class="ri-instagram-line text-gray-400 text-xl"></i>
              </a>
              
              <a href='https://www.linkedin.com/in/tushar-chawla30/'>
                <i class="ri-linkedin-box-line text-gray-400 text-xl"></i>
              </a>
              
              <a href='https://github.com/TUSHAR-30'>
                <i class="ri-github-line text-gray-400 text-xl"></i>
              </a>
                
            </div>
            <div className='w-[1px] h-32 bg-[#fff] sm:hidden'></div>
        </div>
        
    </div>
  )
}

export default LeftSider