function Hero() {
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
        <div className="mt-[5.8rem] flex gap-[1rem] text-[2.8rem] sm:gap-[0.5rem] md:justify-center font-extrabold xl:text-[2rem] sm:text-[1.4rem]">
          <button className="bg-misty-blue hover:bg-misty-blue-hover text-white transition-all px-[1.8rem] py-[1rem]">
            Get Ride Now
          </button>
          <button className="px-[1.8rem] sm:text-[1.6rem] text-sunset-orange py- border-[0.5rem] border-solid border-sunset-orange hover:border-sunset-orange-hover transition-all hover:text-sunset-orange-hover md:text-misty-blue md:border-misty-blue ">
            Learn more ↓
          </button>
        </div>
      </div>

      {/* mobile and tablet image hero */}

      <img
        src="./hero-tablet-image.png"
        alt="hero-image"
        className="hidden md:h-[142px] md:block md:translate-y-[45%] sm:translate-y-[40%]"
      />

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
