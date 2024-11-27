"use client";

function HeroButtons() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mt-[5.8rem] mx-auto flex gap-[1rem] w-fit text-[2.8rem] sm:gap-[0.5rem] md:justify-center font-extrabold xl:text-[2rem] sm:text-[1.4rem]">
      <button
        type="button"
        className="bg-misty-blue hover:bg-misty-blue-hover text-white transition-all px-[1.8rem] py-[1rem]"
      >
        Get Ride Now
      </button>
      <button
        type="button"
        className="px-[1.8rem] sm:text-[1.6rem] text-sunset-orange py- border-[0.5rem] border-solid border-sunset-orange hover:border-sunset-orange-hover transition-all hover:text-sunset-orange-hover md:text-misty-blue md:border-misty-blue"
      >
        Learn more ↓
      </button>
    </div>
  );
}

export default HeroButtons;
