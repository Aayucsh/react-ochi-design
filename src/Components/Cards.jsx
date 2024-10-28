import React from "react";
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.png'

function Cards() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[70vh] pb-16 px-4 lg:px-14 relative justify-center items-center gap-4">
      
      <div className="flex items-center justify-center w-full lg:w-1/2 h-96 bg-[#004D43] relative rounded-xl">
        <img src={logo1} className="w-auto h-auto max-w-full" />
        <button className="absolute bottom-3 left-4 px-2 py-0.5 rounded-full border-2 text-[#CDEA68] border-[#CDEA68]">
          2019-2022
        </button>
      </div>

      
      <div className="w-full lg:w-1/2 h-96 flex flex-col sm:flex-row gap-4">
        <div className="relative w-full sm:w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <img src={logo2} className="w-auto h-auto max-w-full" />
          <button className="absolute bottom-3 left-4 px-2 py-0.5 rounded-full border-2 border-zinc-100 text-zinc-100 uppercase text-sm">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="relative w-full sm:w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <img src={logo3} className="w-auto max-w-[100px]" alt="" />
          <button className="absolute bottom-3 left-4 px-2 py-0.5 rounded-full border-2 border-zinc-100 text-zinc-100 uppercase text-sm">
            business bootcamp alumini
          </button>
        </div>
      </div>

      <button className="absolute z-[10] uppercase bg-black px-5 bottom-0 py-4 text-white rounded-full flex items-center justify-center text-sm">
        view all case studies 
        <div className="w-3 h-3 bg-white rounded-full ml-3"></div>
      </button>
    </div>
  );
}

export default Cards;
