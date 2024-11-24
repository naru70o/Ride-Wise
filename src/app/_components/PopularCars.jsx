function PopularCars() {
  return (
    <div className="mt-[9.2rem] grid col-start-2 my-0 col-span-10 w-full max-w-[120rem] mx-auto">
      <h1 className="text-[2.8rem] block  max-w-[120rem] mx-auto w-full text-sunset-orange font-extrabold lg:text-[3rem]">
        Most Popular Rental Cars
      </h1>
      {/* grid card */}
      <div className="grid grid-cols-custom-3 gap-[2rem] mt-[4.6rem]">
        <div className="bg-soft-almond flex flex-col justify-between rounded-[3.1rem] h-[30rem] md:h-[28rem] md:mx-auto overflow-hidden">
          <div className="flex p-4 self-end">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFA849"
              >
                <path d="m233-120 93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Z" />
              </svg>
            ))}
          </div>

          <div className="w-full px-2">
            <img
              className="h-[15rem] my-0 mx-auto p-2 w-auto"
              src="toyota-sized.png"
              alt="toyota-car"
            />
          </div>
          {/* card price container */}
          <div className="bg-light-steel w-full">
            {/* flex container */}
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
                    <span className="text-[1.2rem] font-normal leading-none">
                      model 3
                    </span>
                  </div>
                </div>
              </div>

              {/* Price */}

              <div className="text-[1.6rem] inline-block text-deep-brown font-extrabold">
                $90/<span className="font-medium">day</span>
              </div>
            </div>

            {/* ///// */}
          </div>
        </div>
        <div className="bg-soft-almond flex flex-col justify-between rounded-[3.1rem] h-[30rem] md:h-[28rem] md:mx-auto overflow-hidden">
          <div className="flex p-4 self-end">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFA849"
              >
                <path d="m233-120 93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Z" />
              </svg>
            ))}
          </div>

          <div className="w-full px-2">
            <img
              className="h-[15rem] my-0 mx-auto p-2 w-auto"
              src="toyota-sized.png"
              alt="toyota-car"
            />
          </div>
          {/* card price container */}
          <div className="bg-light-steel w-full">
            {/* flex container */}
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
                    <span className="text-[1.2rem] font-normal leading-none">
                      model 3
                    </span>
                  </div>
                </div>
              </div>

              {/* Price */}

              <div className="text-[1.6rem] inline-block text-deep-brown font-extrabold">
                $90/<span className="font-medium">day</span>
              </div>
            </div>

            {/* ///// */}
          </div>
        </div>
        <div className="bg-soft-almond flex flex-col justify-between rounded-[3.1rem] h-[30rem] md:h-[28rem] md:mx-auto overflow-hidden">
          <div className="flex p-4 self-end">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFA849"
              >
                <path d="m233-120 93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Z" />
              </svg>
            ))}
          </div>

          <div className="w-full px-2">
            <img
              className="h-[15rem] my-0 mx-auto p-2 w-auto"
              src="toyota-sized.png"
              alt="toyota-car"
            />
          </div>
          {/* card price container */}
          <div className="bg-light-steel w-full">
            {/* flex container */}
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
                    <span className="text-[1.2rem] font-normal leading-none">
                      model 3
                    </span>
                  </div>
                </div>
              </div>

              {/* Price */}

              <div className="text-[1.6rem] inline-block text-deep-brown font-extrabold">
                $90/<span className="font-medium">day</span>
              </div>
            </div>

            {/* ///// */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularCars;
