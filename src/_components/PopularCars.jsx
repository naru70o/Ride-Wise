import { cars } from "../_utility/fakeData";

function PopularCars() {
  return (
    <div
      className="mt-[9.2rem] sm:mt-[6.4rem] grid col-start-2 my-0 col-span-10 w-full max-w-[120rem] mx-auto"
      id="popular"
    >
      <h1 className="text-[2.8rem] block max-w-[120rem] mx-auto w-full text-sunset-orange font-extrabold lg:text-[3rem]">
        Most Popular Rental Cars
      </h1>
      {/* grid card */}
      <div className="grid grid-cols-custom-3 gap-[2rem] mt-[4.6rem] sm:mt-[3.2rem]">
        {cars
          .filter((car) => car.rating === "Good") // Filter first
          .map((car) => {
            return (
              <div
                className="bg-soft-almond flex flex-col justify-between rounded-[3.1rem] md:mx-auto overflow-hidden w-full"
                key={car.model}
              >
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
                    src={car.image} // Dynamically use the car image
                    alt={`${car.brand} ${car.model}`}
                  />
                </div>

                <div className="flex bg-white rounded-[1rem] m-[1.6rem] px-8 py-4 mx-[2rem]">
                  <div className="flex gap-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#4A2B13"
                    >
                      <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                    <p className="font-medium text-[1.2rem] text-start leading-tight ">
                      {car.lastMonthRented} times were rented last month
                    </p>
                  </div>
                </div>

                {/* card price container */}
                <div className="bg-light-steel h-[5rem] w-full">
                  {/* flex container */}
                  <div className="flex gap-2 py-2 px-8 items-center justify-between">
                    <div className="flex gap-4 items-center">
                      <img
                        className="align-middle h-[3.2rem] w-[3.2rem]"
                        src={car.logo} // Dynamically use the car logo
                        alt={`${car.brand} logo`}
                      />
                      <div className="flex">
                        <div className="text-[1.6rem] flex flex-col font-bold text-deep-brown">
                          <span>{car.brand}</span>
                          <span className="text-[1.2rem] font-normal leading-none">
                            {car.model}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-[1.6rem] inline-block text-deep-brown font-extrabold">
                      ${car.pricePerDay}/
                      <span className="font-medium">day</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
          .slice(0, 3)}
      </div>
    </div>
  );
}

export default PopularCars;
