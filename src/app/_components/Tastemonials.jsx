"use client";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    feedback:
      "Booking my car was quick and easy, and the vehicle was in perfect condition. The staff was friendly and helpful throughout the process. Highly recommend!",
    name: "Sarah J.",
    location: "New York",
  },
  {
    feedback:
      "I rented an SUV for a family road trip, and it exceeded our expectations. Plenty of space, great mileage, and no hassles at all. I'll definitely rent again!",
    name: "Ahmed K.",
    location: "Los Angeles",
  },
  {
    feedback:
      "The pickup and drop-off process was so efficient. The car was spotless and well-maintained. It made my business trip stress-free. Highly recommended!",
    name: "James L.",
    location: "Dallas",
  },
  {
    feedback:
      "I was impressed by the reasonable rates and the quality of the car. Everything went smoothly, from booking to return. Thank you for the excellent service!",
    name: "Emily R.",
    location: "Chicago",
  },
];

function Tastemonials() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Limit testimonials to 2 when screen width is less than 850px
  const unit = 850;
  const filteredTestimonials =
    screenWidth < unit ? testimonials.slice(0, 2) : testimonials.slice(0, 3);

  return (
    <div className="mt-[9.2rem] sm:mt-[6.4rem]  grid col-start-2 my-0 col-span-10 w-full max-w-[120rem] mx-auto">
      <h1 className="text-[2.8rem] block max-w-[120rem] mx-auto w-full text-sunset-orange font-extrabold md:text-[1.8rem]">
        Driving Smiles, One Ride at a Time
      </h1>
      {/* grid card */}
      <div className="grid sm:mt-[3.2rem] grid-cols-custom-3 gap-[2rem] mt-[4.6rem]">
        {filteredTestimonials.map((testimonial) => {
          return (
            <div
              className="bg-soft-almond flex flex-col rounded-[1.8rem] md:mx-auto overflow-hidden mb-10 h-[35rem] p-4 md:w-[80%]"
              key={testimonial.name}
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
    </div>
  );
}

export default Tastemonials;
