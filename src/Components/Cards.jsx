import React from "react";
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.png'

function Cards() {
  return (
    <div className="flex w-full h-[70vh] px-14 relative justify-center">
      <div className="flex items-center justify-center w-1/2 h-96 bg-[#004D43] mr-2 relative rounded-xl">
        <img  src={logo1} />
        <button className="absolute bottom-8 left-8 px-2 py-0.5 rounded-full border-2 text-[#CDEA68] border-[#CDEA68]">
          2019-2022
        </button>
      </div>
      <div className="w-1/2 h-96 flex ml-2">
        <div className="relative w-1/2 bg-[#212121] rounded-xl flex items-center justify-center mr-2">
          <img src={logo2} />
          <button className="absolute bottom-8 left-8 px-2 py-0.5 rounded-full border-2 border-zinc-100 text-zinc-100 uppercase">rating 5.0 on clutch</button>
        </div>
        <div className="relative w-1/2 bg-[#212121] rounded-xl flex items-center justify-center ml-2">
          <img src={logo3} width={100} alt=""/>
          <button className="absolute bottom-8 left-8 px-2 py-0.5 rounded-full border-2 border-zinc-100 text-zinc-100 uppercase"> business bootcamp alumini</button>
        </div>
      </div>
      <button className=" absolute z-[10] uppercase bg-black px-5 bottom-16 py-4 text-white rounded-full flex justify-center">view all case studies <div className="w-3 h-3 bg-white rounded-full mt-1.5  ml-3"></div></button>
      </div>
  );
}

export default Cards;
