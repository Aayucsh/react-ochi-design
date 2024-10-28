import React from 'react'
import img1 from '../assets/img1.jpg'

function About() {
  return (
    <div data-scroll data-scroll-speed="-.05" data-scroll-section className='w-full min-h-screen font-["Neue_Montreal"] bg-[#CDEA68] rounded-lg md:rounded-3xl'>
      <p className='text-[24px] md:text-[55px] pt-12 md:pt-24 px-4 md:pl-14 md:pr-60 tracking-normal leading-tight md:leading-none border-black border-b p-6 md:p-20'>
        Ochi is a strategic partner for fast-growing tech businesses that need to <a className='border-b-2 md:border-b-3 border-black'>raise funds</a>, <a className='border-b-2 border-black'>sell products</a>, <a className='border-b-2 border-black'>explain complex ideas</a>, and <a className='border-b-2 border-black'>hire great people.</a>
      </p>

      <div className='flex flex-col md:flex-row border-b border-black pb-12 md:pb-28 text-[#212121]'>
        <p className='w-full md:w-1/2 text-l px-4 md:pl-14 pt-4'>What you can expect:</p>
        <div className='w-full md:w-1/2 flex flex-col md:flex-row px-4 md:px-0'>
          <div className='w-full md:w-1/2 md:pr-10 pt-4'>
            <p className='pb-8'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>
            <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
          </div>
          <div className='w-full md:w-1/2 flex flex-col pt-8 md:pt-28 md:pl-16'>
            <a>S:</a>
            <a>Instagram</a>
            <a>Behance</a>
            <a>Facebook</a>
            <a>LinkedIn</a>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 px-4 md:px-14'>
          <h1 className='text-4xl md:text-6xl py-5 font-light font-["Neue_Montreal"]'>Our approach:</h1>
          <button className='bg-black flex items-center gap-3 uppercase text-white rounded-full px-6 md:px-10 py-2 md:py-4'>
            Read More <div className='bg-white h-2 w-2 rounded-full'></div>
          </button>
        </div>
        <div className='mt-5 mx-4 md:mr-14 mb-12 overflow-hidden bg-cover rounded-xl h-[30vh] sm:h-[40vh] md:h-[60vh] w-scree md:w-1/2'>
          <img 
            src={img1} 
            className='w-full h-full object-cover object-center'
            alt="Our approach" 
          />
        </div>
      </div>
    </div>
  )
}

export default About