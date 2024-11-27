"use client";

function Username() {
  return (
    <label
      htmlFor="UserEmail"
      className="text-[1.6rem] text-deep-brown p-4 border rounded-[0.8rem] border-deep-brown"
    >
      <span className="text-[1.6rem] block"> Email </span>

      <input
        type="email"
        id="UserEmail"
        placeholder="example.com"
        className="bg-pale-lemon text-[1.6rem] focus:outline-none active:outline-none outline-none font-normal w-full border-none"
      />
    </label>
  );
}

export default Username;
