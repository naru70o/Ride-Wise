function page() {
  return (
    <div className="col-start-1 grid grid-cols-subgrid bg-pale-lemon content-center h-screen my-0 col-span-12 w-full mx-auto">
      <div className="grid col-start-2 overflow-hidden col-span-10 max-w-[120rem] grid-cols-2 md:grid-cols-1 bg-slate-teal rounded-xl h-full">
        <div className="image-booking bg-cover bg-center h-full md:h-[10rem] w-full"></div>
        <div className="flex flex-col gap-8 text-xl sm:text-xl text-deep-brown p-12 sm:px-4">
          <h1 className="text-[2.8rem] sm:text-[1.6rem] block max-w-[120rem] mx-auto w-full text-white font-extrabold md:text-[1.8rem] p-4">
            Book your X and Enjoy
          </h1>
          <div className="flex flex-col">
            <label
              htmlFor="UserEmail"
              className="text-[1.6rem] sm:text-[1.2rem] text-white p-4 border-deep-brown"
            >
              <span className="font-bold  block">Email</span>

              <input
                type="email"
                id="UserEmail"
                placeholder="example@gmail.com"
                className="box-border sm:text-[1.2rem] mt-4 text-[1.6rem] h-[4rem] w-full p-4 rounded-lg border-2 border-blue-400 transition duration-150 ease-in-out focus:outline-none focus:border-gray-400"
              />
            </label>
            <label
              htmlFor="number"
              className="text-[1.6rem] sm:text-[1.2rem] text-white p-4 border-deep-brown"
            >
              <span className="font-bold  block">number</span>

              <input
                type="number"
                id="number"
                placeholder="naru70"
                className="box-border sm:text-[1.2rem] mt-4 text-[1.6rem] h-[4rem] w-full p-4 rounded-lg border-2 border-blue-400 transition duration-150 ease-in-out focus:outline-none focus:border-gray-400"
              />
            </label>
            <div className="flex w-full justify-between md:flex-col">
              <label
                htmlFor="UserEmail"
                className="text-[1.6rem] sm:text-[1.2rem] w-full text-white p-4 border-deep-brown"
              >
                <span className="font-bold block">pick up</span>
                <input
                  className="text-[1.6rem]  text-deep-brown mt-4 font-semibold bg-gray-50  p-[0.8rem_1.4rem] w-full rounded-xl focus:outline-none focus:border-none focus:ring-0 sm:text-[1.2rem] custom-calendar-picker"
                  type="date"
                />
              </label>
              <label
                htmlFor="UserEmail"
                className="text-[1.6rem] sm:text-[1.2rem] w-full text-white p-4 border-deep-brown"
              >
                <span className="font-bold block">pick up</span>
                <input
                  className="text-[1.6rem] sm:text-[1.2rem] text-deep-brown mt-4 font-semibold bg-gray-50 p-[0.8rem_1.4rem] rounded-xl w-full focus:outline-none focus:border-none focus:ring-0 custom-calendar-picker"
                  type="date"
                />
              </label>
            </div>
            <div className="p-4">
              <button
                type="button"
                className="w-full text-[1.6rem] font-bold transition duration-300 p-4 text-center rounded-lg bg-sunset-orange hover:bg-sunset-orange-hover text-deep-brown"
              >
                Get ride now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
