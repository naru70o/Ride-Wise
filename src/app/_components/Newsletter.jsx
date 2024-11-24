function Newsletter() {
  return (
    <div className="mt-[9.2rem] w-full grid grid-cols-subgrid  col-start-1 m-0 col-span-12 bg-slate-teal ">
      <h1 className="text-[2rem] text-sunset-orange font-extrabold lg:text-[3rem] max-w-[120rem] mx-auto w-full mt-[2rem] col-start-2 col-span-10 sm:text-[1.6rem]">
        Our car collection
      </h1>

      {/* container */}
      <div className="flex justify-between max-w-[120rem] mx-auto w-full py-12 h-[35rem]  md:h-[22rem] sm:h-[13rem] col-start-2 col-span-10">
        <div className="flex flex-col justify-between w-[60%] sm:w-full">
          {/* descriptoion */}
          <p className="text-white font-extrabold text-[4rem] leading-tight md:text-[2.4rem] slg:text-[3rem] sm:text-[1rem] sm:w-[60%]">
            Discover the Freedom of the Open Road with the Perfect Ride!
          </p>
          {/* input container */}
          <div class="flex justify-center w-full items-center space-x-4 relative sm:w-[80%]">
            <input
              type="email"
              placeholder="your email here"
              class="px-4 text-[1.6rem] sm:text-[1rem] py-8 md:py-4 sm:py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            {/* button */}
            <button class="bg-slate-teal text-white font-semibold absolute px-6 sm:px-2  rounded-md border text-[3.2rem] md:text-[2rem] sm:text-[1.4rem] border-white hover:bg-teal-500 hover:text-white transition duration-150 right-2">
              Subscribe
            </button>
          </div>
        </div>
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
