"use client";
import "../_styles/logosStyle.css";
import { useEffect, useRef } from "react";

function PartnersMobile() {
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current.setAttribute("data-animated", true);
  }, []);
  return (
    <div className="scroller w-full" ref={scrollRef}>
      <div className="hidden md:flex md:mt-[9.2rem] h-[4.8rem] lg:h-[3.2rem] sm:h-[2.4rem] col-start-2 col-span-10 justify-around opacity-55 scroller__inner">
        <img src="./ferarari.png" />
        <img src="./Chevrolet.png" />
        <img src="./Honda.png" />
        <img src="./Hyundai.png" />
        <img src="./jeep.png" />
        <img src="./Mercedes.png" />
        <img src="./Porsche.png" />
        <img src="./Toyota.png" />
      </div>
    </div>
  );
}

export default PartnersMobile;
