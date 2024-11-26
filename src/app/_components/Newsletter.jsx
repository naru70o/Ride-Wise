function Newsletter() {
  return (
    <div className="mt-[9.2rem] sm:mt-[6.4rem] w-full grid grid-cols-subgrid  col-start-1 m-0 col-span-12 bg-slate-teal ">
      {/* container */}
      <div className="flex justify-between max-w-[120rem] mx-auto w-full h-[35rem] md:gap-4 md:h-[22rem] sm:h-[13rem] col-start-2 col-span-10">
        <div className="flex py-12 sm:py-8 flex-col justify-between w-[60%] sm:w-full">
          {/* section title */}
          <h1 className="text-[2.8rem] text-sunset-orange font-extrabold lg:text-[3rem] max-w-[120rem] mx-auto w-full col-start-2 col-span-10 sm:text-[1.6rem] md:text-[1.6rem]">
            Newsletter
          </h1>
          {/* descriptoion */}
          <p className="text-white font-extrabold text-[4rem] leading-tight md:text-[2.4rem] slg:text-[3rem] sm:text-[1rem] sm:w-[60%]">
            Discover the Freedom of the Open Road with the Perfect Ride!
          </p>
          {/* input container */}
          <div className="flex justify-center w-full items-center space-x-4 relative sm:w-[80%]">
            <input
              type="email"
              placeholder="your email here"
              className="px-4 text-[1.6rem] sm:text-[1rem] py-8 md:py-4 sm:py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            {/* button */}
            <button className="bg-slate-teal text-white font-semibold absolute px-6 sm:px-2  rounded-md border text-[3.2rem] md:text-[2rem] sm:text-[1.4rem] border-white hover:bg-slate-teal-hover hover:text-white transition duration-150 right-2">
              Subscribe
            </button>
          </div>
        </div>

        {/* image car */}
        <img
          className="h-[90%] md:hidden self-end"
          src="./newsletter-car-img.png"
          alt="section-image"
        />
      </div>
    </div>
  );
}

export default Newsletter;
