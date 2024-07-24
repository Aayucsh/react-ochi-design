import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from 'framer-motion';
import slider from '../assets/slider.jpg'

function Landing() {
  return (
    <div data-scroll data-scroll-speed="-.5" data-scroll-section className='w-full h-screen bg-[#F1F1F1]  pt-1'>
      <div className="text mt-40 px-12">
          {["We Create", "Eye-Opening", "Presentations"].map((items, index)=>{
            return  <div className="masker">
            <div className="w-fit flex overflow-hidden ">
              {index===1 && (<motion.div initial={{width: 0}} animate={{width:"9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} style={{ backgroundImage: `url(${slider})` }}  className='h-[6vw] w-[9vw] mr-[1vw] rounded-md overflow-hidden bg-cover '></motion.div>)}
              <h1 className='pb-7 uppercase text-[9vw] leading-[5vw] font-["Founders Grotesk X-Condensed SmBd"] font-medium text-[#212121]'>{items}</h1>
            </div>
            </div>
          })}
          </div>
      <div className="border-t-[1px] border-zinc-400 mt-48 flex justify-between items-center px-8 py-3 font-['Neue_Montreal']">
        {["For public and private companies", "From the pitch to IPO"].map((item , index)=>{
          return <p className="text-md  tracking-tight leading-none">{item}</p>
        })}
        <div className='flex items-center gap-2'>
        <div className="px-3 py-0.5 border-[1px] border-zinc-700 rounded-full">START THE PROJECT</div>
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
