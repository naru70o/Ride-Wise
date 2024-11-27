import ButtonMore from "./ButtonMore";

function TastemonilasList({ filteredTestimonials }) {
  return (
    <div className="mt-[9.2rem] sm:mt-[6.4rem]  grid col-start-2 my-0 col-span-10 w-full max-w-[120rem] mx-auto">
      <h1 className="text-[2.8rem] block max-w-[120rem] mx-auto w-full text-sunset-orange font-extrabold md:text-[1.8rem]">
        Driving Smiles, One Ride at a Time
      </h1>
      {/* grid card */}
      <div className="grid sm:mt-[3.2rem] grid-cols-custom-3 gap-[2rem] mt-[4.6rem]">
        {filteredTestimonials.map((testimonial, index) => {
          return (
            <div
              className="bg-soft-almond flex flex-col rounded-[1.8rem] md:mx-auto overflow-hidden mb-10 h-[35rem] p-4 md:w-[80%]"
              key={index}
            >
              <img
                className="h-[3.4rem] w-[3.4rem]"
                src="/quote.png"
                alt="quotes"
              />
              <div className="flex flex-col justify-between mt-[2rem] h-full">
                <p className="text-2xl w-[70%]">{testimonial.feedback}</p>

                <p className="text-[1.2rem] font-bold w-[70%] italic">
                  – {testimonial.name}, {testimonial.location}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <ButtonMore path={"/Testimonial"} />
    </div>
  );
}

export default TastemonilasList;
