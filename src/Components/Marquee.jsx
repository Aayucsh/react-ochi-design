import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-speed=".1" data-scroll-section className='w-full py-8 rounded-2xl  bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 10}} className='uppercase text-[#FFF] text-[28vw]  leading-none pr-20'>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 10}} className='uppercase text-[#FFF] text-[28vw] leading-none pr-20'>we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee