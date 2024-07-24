import React, { useEffect, useState } from "react";
import eyes from "../assets/eyes.jpg"

function Eyes() {
  const [rotate, setrotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle-180);
    });
  });

  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" data-scroll-section style={{ backgroundImage: `url(${eyes})` }} className='w-full h-full relative bg-center bg-cover'>
        <div className="flex gap-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute ">
          <div className="flex items-center justify-center bg-zinc-100 h-[15vw] w-[15vw] rounded-full">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10">
                <div className="bg-zinc-100 h-10 w-10 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-zinc-100 h-[15vw] w-[15vw] rounded-full">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10">
                <div className="bg-zinc-100 h-10 w-10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
