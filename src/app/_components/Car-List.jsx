function CarList() {
  return (
    <div className="mt-[9.2rem] sm:mt-[6.4rem] w-full max-w-[120rem] mx-auto grid col-start-2 m-0 col-span-10">
      <h1 className="text-[2.8rem] text-sunset-orange font-extrabold lg:text-[3rem]">
        Our car collection
      </h1>
      <div className="grid grid-cols-custom-3 gap-[2rem] mt-[4.6rem] sm:mt-[3.2rem]">
        <div className="bg-soft-almond flex flex-col rounded-[1.8rem] md:mx-auto overflow-hidden mb-10 py-4">
          {/* Logo and Wishlist icon */}
          <div className="flex gap-2 py-2 px-8 items-center justify-between">
            <div className="flex items-center">
              <img
                className="align-middle h-[5.2rem] w-[5.2rem] "
                src="./toyota-logo.png"
                alt="ferrari"
              />
              <div className="flex">
                <div className="text-[1.6rem] flex flex-col font-bold text-deep-brown">
                  <span>Toyota</span>
                </div>
              </div>
            </div>

            <div className="text-[1.6rem] inline-block text-deep-brown font-extrabold">
              $90/<span className="font-medium">day</span>
            </div>
          </div>
          {/* car image */}
          <div className="w-full px-2">
            <img
              className="h-[15rem] my-0 mx-auto p-2 w-auto"
              src="tesla-size.png"
              alt="toyota-car"
            />
          </div>
          {/* type */}
          <div className="flex px-[2rem] gap-4">
            <div className="min-w-[9rem] h-auto bg-sunset-orange text-deep-brown px-[1.6rem] text-center font-extrabold text-[1.4rem] rounded-[0.9rem]">
              <p className="flex text-center justify-center">Economy</p>
            </div>
            <div className="flex bg-sunset-orange text-deep-brown px-[1.6rem] py-2 font-extrabold rounded-[0.9rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#4A2B13"
              >
                <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113Z" />
              </svg>
            </div>
          </div>
          {/* Features */}
          <div className="flex mt-[1.6rem] gap-4 px-8">
            <div className="flex gap-1 items-center">
              <img className="h-[2.4rem] w-auto" src="./icons/gas.png" />
              <p className="text-deep-brown font-extrabold text-[1.2rem]">
                Electric
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <img className="h-[2.4rem] w-auto" src="./icons/auto.png" />
              <p className="text-deep-brown font-extrabold text-[1.2rem]">
                manual
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <img className="h-[2.4rem] w-auto" src="./icons/car-hatch.png" />
              <p className="text-deep-brown font-extrabold text-[1.2rem]">
                back-hatch
              </p>
            </div>
          </div>
          {/* more info */}
          <div className="flex justify-around bg-white rounded-[1rem] mt-[1.6rem] mx-8 px-2 py-4 mb-3">
            {/* discount */}
            <div className="flex flex-col">
              <p className="info-header">Discount</p>
              <p className="info-sub">60%</p>
            </div>
            <div className="line-spacer"></div>
            {/* min-max */}
            <div className="flex flex-col">
              <p className="info-header">Min-max</p>
              <p className="info-sub">1day - 30days</p>
            </div>
            <div className="line-spacer"></div>
            {/* price */}
            <div className="flex flex-col">
              <p className="info-header">Price</p>
              <p className="info-sub">$80/day</p>
            </div>
          </div>
          {/* Book now */}
          <div className="bg-misty-blue transition-all hover:bg-misty-blue-hover cursor-pointer mt-[1.2rem] rounded-[1rem] py-[0.6rem]  mx-8">
            <p className="text-[2rem] font-extrabold text-soft-almond text-center">
              Book Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarList;
