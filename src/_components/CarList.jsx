"use client";

import { useEffect, useState } from "react";
import { cars } from "../_utility/fakeData";
import AllCarList from "./AllCarList";

function CarList() {
  const [screenWidth, setScreenWidth] = useState(850);

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Limit testimonials to 2 when screen width is less than 850px

  let filteredCar = screenWidth < 850 ? cars.slice(0, 2) : cars.slice(0, 6);

  return <AllCarList filteredCar={filteredCar} />;
}

export default CarList;
