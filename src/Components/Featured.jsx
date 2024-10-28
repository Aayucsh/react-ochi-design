import React, { useState } from 'react'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.png'
import { motion } from 'framer-motion'

function Featured() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const variants = {
    hidden: {y: "100%" },
    visible: { y: "0%" }
  };
  return (
    <div className='min-h-screen w-full'>
      <h1 className='text-3xl md:text-5xl sm:text-4xl px-3 md:px-12 sm:px-6 pt-8 sm:pt-20 pb-8 border-b-2 font-["Neue_Montreal"]'>
        Featured projects
      </h1>
      
      <div className='relative flex flex-col md:flex-row justify-between w-full px-6 py-8 gap-8 md:gap-4'>
        <div onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)} 
          className='w-full md:w-1/2 rounded-lg overflow-hidden'>
          <div className='absolute z-[9] overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <motion.h1 
              initial="hidden" 
              animate={isHovered1 ? "visible" : "hidden"} 
              variants={variants} 
              transition={{ease:[0.22, 1, 0.36, 1]}} 
              className='text-9xl md:text-7xl sm:text-5xl text-[#CDEA68]'>
              FYDE
            </motion.h1>
          </div>
          <img src={img2} className='w-full' alt="FYDE"/>
        </div>

        <div onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} 
          className='w-full md:w-1/2 rounded-lg overflow-hidden'>
          <div className='absolute z-[9] overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <motion.h1 
              initial="hidden" 
              animate={isHovered2 ? "visible" : "hidden"} 
              variants={variants} 
              transition={{ease:[0.22, 1, 0.36, 1]}} 
              className='text-9xl md:text-7xl sm:text-5xl text-[#CDEA68]'>
              VIBE
            </motion.h1>
          </div>
          <img src={img3} className='w-full' alt="VIBE"/>
        </div>
      </div>

      <div className='relative flex flex-col md:flex-row justify-between w-full px-6 py-8 gap-8 md:gap-4'>
        <div onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)} 
          className='w-full md:w-1/2 rounded-lg overflow-hidden'>
          <div className='absolute z-[9] overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <motion.h1 
              initial="hidden" 
              animate={isHovered3 ? "visible" : "hidden"} 
              variants={variants} 
              transition={{ease:[0.22, 1, 0.36, 1]}} 
              className='text-9xl md:text-7xl sm:text-5xl text-[#CDEA68]'>
              TRAWA
            </motion.h1>
          </div>
          <img src={img4} className='w-full' alt="TRAWA"/>
        </div>

        <div onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)} 
          className='w-full md:w-1/2 rounded-lg overflow-hidden'>
          <div className='absolute z-[9] overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <motion.h1 
              initial="hidden" 
              animate={isHovered4 ? "visible" : "hidden"} 
              variants={variants} 
              transition={{ease:[0.22, 1, 0.36, 1]}} 
              className='text-9xl md:text-7xl sm:text-5xl text-[#CDEA68]'>
              PREMIUM BLEND
            </motion.h1>
          </div>
          <img src={img5} className='w-full' alt="PREMIUM BLEND"/>
        </div>
      </div>
    </div>
  )
}

export default Featured
