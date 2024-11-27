"use client";
import { testimonials } from "@/_utility/fakeData";
import TastemonilasList from "./TastemonilasList";
import React, { useState, useEffect } from "react";

function Tastemonials() {
  const [screenWidth, setScreenWidth] = useState(0);

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

  return <TastemonilasList filteredTestimonials={filteredTestimonials} />;
}

export default Tastemonials;
