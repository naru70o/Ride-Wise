"use client";

function Username() {
  return (
    <label
      htmlFor="UserEmail"
      className="text-[1.6rem] text-deep-brown p-4 border-deep-brown"
    >
      <span className="font-bold pl-2 block">Email</span>

      <input
        type="email"
        id="UserEmail"
        placeholder="example.com"
        className="box-border mt-4 text-[1.6rem] h-[4rem] w-full p-4 rounded-lg border-2 border-blue-400 transition duration-150 ease-in-out focus:outline-none focus:border-gray-400"
      />
    </label>
  );
}

export default Username;
