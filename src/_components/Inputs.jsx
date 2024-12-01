function Inputs() {
  return (
    <div className="flex flex-col">
      <label
        htmlFor="UserEmail"
        className="text-[1.6rem] sm:text-[1.2rem] text-white p-4 border-deep-brown"
      >
        <span className="font-bold  block">email</span>

        <input
          type="email"
          id="email"
          placeholder="example@gmail.com"
          className="box-border sm:text-[1.2rem] mt-4 text-[1.6rem] h-[4rem] w-full p-4 rounded-lg border-2 border-blue-400 transition duration-150 ease-in-out focus:outline-none focus:border-gray-400"
        />
      </label>
      <label
        htmlFor="number"
        className="text-[1.6rem] sm:text-[1.2rem] text-white p-4 border-deep-brown"
      >
        <span className="font-bold  block">phone</span>

        <input
          type="number"
          id="number"
          placeholder="1234567"
          className="box-border sm:text-[1.2rem] text-deep-brown mt-4 text-[1.6rem] h-[4rem] w-full p-4 rounded-lg border-2 border-blue-400 transition duration-150 ease-in-out focus:outline-none focus:border-gray-400"
        />
      </label>
      <div className="flex w-full justify-between slg:flex-col">
        <label
          htmlFor="pickup"
          className="text-[1.6rem] sm:text-[1.2rem] w-full text-white p-4 border-deep-brown"
        >
          <span className="font-bold block">pick-up</span>
          <input
            id="pickup"
            className="text-[1.6rem]  text-deep-brown mt-4 font-semibold bg-gray-50  p-[0.8rem_1.4rem] w-full rounded-xl focus:outline-none focus:border-none focus:ring-0 sm:text-[1.2rem] custom-calendar-picker"
            type="date"
          />
        </label>
        <label
          htmlFor="dropoff"
          className="text-[1.6rem] sm:text-[1.2rem] w-full text-white p-4 border-deep-brown"
        >
          <span className="font-bold block">dropp-off</span>
          <input
            id="dropoff"
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
  );
}

export default Inputs;
