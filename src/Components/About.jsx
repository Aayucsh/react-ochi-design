import React from 'react'
import img1 from '../assets/img1.jpg'

function About() {
  return (
    <div data-scroll data-scroll-speed="-.05" data-scroll-section className='w-full h-2screen font-["Neue_Montreal"] bg-[#CDEA68] rounded-3xl'>
      <p className='text-[55px] pt-24 pl-14 pr-60 tracking-normal leading-none border-black border-b p-20 '>Ochi is a strategic partner for fast-growing tech businesses that need to <a className='border-b-3 border-black'>raise funds</a>, <a className='border-b-2 border-black'>sell products</a>, <a className='border-b-2 border-black'>explain complex ideas</a>, and <a className='border-b-2 border-black'>hire great people.</a></p>
      <div className='flex border-b border-black pb-28 text-[#212121]'>
        <p className='w-1/2 text-l pl-14 pt-4 '>What you can expect:</p>
        <div className='w-1/2 flex'>
          <div className='w-1/2 pr-10 pt-4'>
            <p className='pb-8'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>
            <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
          </div>
          <div className='w-1/2 flex flex-col pl-16 pt-28 '>
          <a>S:</a>
          <a >Instagram</a>
          <a>Behance</a>
          <a>Facebook</a>
          <a>LinkedIn</a>
          </div>
        </div>
      </div>
      <div className=' flex'>
        <div className='w-1/2 px-14'>
          <h1 className='text-6xl py-5 font-light font-["Neue_Montreal"]'>Our approach:</h1>
          <button className='bg-black flex items-center gap-3 uppercase text-white rounded-full px-10 py-4'>Read More <div className='bg-white h-2 w-2 rounded-full'></div></button>
        </div>
        <div className='mt-5 mb-12 mr-14 overflow-hidden bg-cover rounded-xl h-[60vh] w-1/2'>
          <img src={img1} />
        </div>
      </div>
    </div>
  )
}

export default About