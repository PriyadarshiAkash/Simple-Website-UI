import React from 'react'

const Hero = () => {
  return (
    <div>
        <header className='w-full h-auto'>
            <img className='w-full h-[900px] hidden md:block' src="http://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg" alt="" />
            <img className='w-full md:hidden' src="http://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg" alt="" />
        </header>
    </div>
  )
}

export default Hero