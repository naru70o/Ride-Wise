"use client";
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
      className="grid max-w-[120rem] mt-[9.2rem] md:mt-[6.2rem] col-start-2 m-0 mx-auto col-span-10 scroller w-full"
      ref={scrollRef}
    >
      <div className="flex mt-[3.2rem] h-[4.8rem] lg:h-[3.2rem] justify-between opacity-55 md:mt-[4.8rem] scroller__inner">
        <img src="./ferarari.png" alt="logo" />
        <img src="./Chevrolet.png" alt="logo" />
        <img src="./Honda.png" alt="logo" />
        <img src="./Hyundai.png" alt="logo" />
        <img src="./jeep.png" alt="logo" />
        <img src="./Mercedes.png" alt="logo" />
        <img src="./Porsche.png" alt="logo" />
        <img src="./Toyota.png" alt="logo" />
      </div>
    </div>
  );
}

export default Partners;
