import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from 'framer-motion';
import slider from '../assets/slider.jpg'

function Landing() {
  return (
    <div data-scroll data-scroll-speed="-.5" data-scroll-section className='w-full h-screen bg-[#F1F1F1] pt-1'>

      <div className="text mt-32 md:mt-40 px-4 md:px-12">
          {["We Create", "Eye-Opening", "Presentations"].map((items, index)=>{
            return  <div className="masker">
            <div className="w-fit flex overflow-hidden ">
              {index===1 && (
                <motion.div 
                  initial={{width: 0}} 
                  animate={{width: "10vw"}} 
                  transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} 
                  style={{ backgroundImage: `url(${slider})` }}  
                  className='h-[10vw] mt-2.5 w-[10vw] md:mt-0 md:h-[6vw] md:w-[9vw] mr-[1vw] rounded-md xs:rounded overflow-hidden bg-cover'
                ></motion.div>
              )}
              <h1 className='pb-4 md:pb-7 uppercase text-[15vw] sm:text-[12vw] md:text-[9vw] leading-[15vw] sm:leading-[12vw] md:leading-[5vw] font-["Founders Grotesk X-Condensed SmBd"] font-medium text-[#212121]'>{items}</h1>
            </div>
            </div>
          })}
      </div>

      <div className="border-t-[1px] border-zinc-400 mt-40 md:mt-48 flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-3 font-['Neue_Montreal']">
        <div className="flex flex-col md:flex-row md:gap-8 mb-4 md:mb-0">
          {["For public and private companies", "From the pitch to IPO"].map((item, index)=>{
            return <p className="text-md md:text-md tracking-tight leading-none mb-2 md:mb-0">{item}</p>
          })}
        </div>
        <div className='flex items-center gap-2'>
          <div className="px-3 py-0.5 border-[1px] border-zinc-700 rounded-full text-sm md:text-base">START THE PROJECT</div>
          <div className='w-8 h-8 border-[1px] border-zinc-700 flex items-center justify-center rounded-full'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Landing
