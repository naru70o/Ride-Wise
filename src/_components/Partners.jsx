"use client";
import Image from "next/image";
import "../_styles/logosStyle.css";
import { useEffect, useRef } from "react";

function Partners() {
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current.setAttribute("data-animated", true);

    const scrollerInner = scrollRef.current.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it, add aria-hidden, and append it
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <div
      className="grid max-w-[120rem] mt-[9.2rem] md:mt-[6.2rem] col-start-2 m-0 mx-auto col-span-10 w-full scroller"
      ref={scrollRef}
    >
      <div className="flex my-0 mx-auto h-[5rem] justify-between opacity-55  scroller__inner">
        <div className="relative h-[5rem] w-[5rem] ml-[3.5rem] mr-[0.5rem] sm:ml-[0.5rem] sm:mr-[3.5rem]">
          <Image
            fill
            className="absolute"
            src="/logos/audi-logo.png"
            alt="logo"
          />
        </div>
        <div className="relative h-[5rem] w-[5rem] ml-[3.5rem] mr-[0.5rem] sm:ml-[0.5rem] sm:mr-[3.5rem]">
          <Image
            fill
            className="absolute"
            src="/logos/bmw-logo.png"
            alt="logo"
          />
        </div>
        <div className="relative h-[5rem] w-[5rem] ml-[3.5rem] mr-[0.5rem] sm:ml-[0.5rem] sm:mr-[3.5rem]">
          <Image
            fill
            className="absolute"
            src="/logos/ford-logo.png"
            alt="logo"
          />
        </div>
        <div className="relative h-[5rem] w-[5rem] ml-[3.5rem] mr-[0.5rem] sm:ml-[0.5rem] sm:mr-[3.5rem]">
          <Image
            fill
            className="absolute"
            src="/logos/Chevrolet-logo.png"
            alt="logo"
          />
        </div>
        <div className="relative h-[5rem] w-[5rem] ml-[3.5rem] mr-[0.5rem] sm:ml-[0.5rem] sm:mr-[3.5rem]">
          <Image
            fill
            className="absolute"
            src="/logos/Honda-logo.png"
            alt="logo"
          />
        </div>
        <div className="relative h-[5rem] w-[5rem] ml-[3.5rem] mr-[0.5rem] sm:ml-[0.5rem] sm:mr-[3.5rem]">
          <Image
            fill
            className="absolute"
            src="/logos/Hyundai-logo.png"
            alt="logo"
          />
        </div>
        <div className="relative h-[5rem] w-[5rem] ml-[3.5rem] mr-[0.5rem] sm:ml-[0.5rem] sm:mr-[3.5rem]">
          <Image
            fill
            className="absolute"
            src="/logos/Mercedes-logo.png"
            alt="logo"
          />
        </div>
        <div className="relative h-[5rem] w-[5rem] ml-[3.5rem] mr-[0.5rem] sm:ml-[0.5rem] sm:mr-[3.5rem]">
          <Image
            fill
            className="absolute"
            src="/logos/Tesla-logo.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
