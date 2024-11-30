"use client";
import Image from "next/image";

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mt-[6.4rem] max-w-[120rem] mx-auto grid grid-cols-2 md:flex md:flex-col md:items-center md:justify-between">
      <div className="">
        <h1 className="text-[4rem] sm:text-[2.4rem] text-deep-brown font-extrabold leading-snug text-left xl:text-[3.2rem] md:text-center">
          Discover the Freedom of the Open Road with the Perfect Ride!
        </h1>
        <h2 className="text-[2.4rem] sm:text-[1.2rem] sm:leading-tight leading-snug w-[70%]  text-deep-brown mt-[1.6rem] font-normal xl:text-[1.8rem] md:text-center md:w-[85%] md:mx-auto">
          Affordable, reliable, and flexible car rentals for every journey. Book
          now and hit the road with confidence!
        </h2>
        <div className="mt-[5.8rem] md:mx-auto flex gap-[1rem] w-fit text-[2.8rem] sm:gap-[0.5rem] md:justify-center font-extrabold xl:text-[2rem] sm:text-[1.4rem]">
          <button
            type="button"
            className="bg-misty-blue hover:bg-misty-blue-hover text-white transition-all px-[1.8rem] py-[1rem]"
          >
            Get Ride Now
          </button>
          <button
            type="button"
            className="px-[1.8rem] sm:text-[1.6rem] text-sunset-orange py- border-[0.5rem] border-solid border-sunset-orange hover:border-sunset-orange-hover transition-all hover:text-sunset-orange-hover md:text-misty-blue md:border-misty-blue"
          >
            Learn more ↓
          </button>
        </div>
      </div>

      {/* mobile and tablet image hero */}

      <div className="hidden relative h-[150px] w-[235px] md:block md:translate-y-[45%] sm:translate-y-[40%]">
        <Image
          fill
          src="/hero-tablet-image.png"
          alt="hero-image"
          className="absolute"
        />
      </div>

      <div className="">
        <div className="absolute bg-gradient-to-l from-slate-teal to-transparent h-[30.8rem] z-0 translate-y-[10%] bg-[length:100%_100%] w-full xl:h-[20.8rem] md:hidden xl:translate-y-[50%]"></div>
        <img
          className="translate-x-[-20%] md:hidden xl:translate-y-[10%] xl:translate-x-[-15%]"
          src="./hero-image.png"
          alt="hero-image"
        />
      </div>
    </div>
  );
}

export default Hero;
