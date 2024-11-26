"use client";
import Link from "next/link";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex relative justify-between items-center mt-[2rem] h-fit">
      <img
        className="h-[4.8rem] cursor-pointer md:h-[3.2rem]"
        src="Logo.png"
        alt="nav-logo"
      />

      <ul className="flex text-[2.4rem] items-center transition-all text-deep-brown xl:text-[2rem] md:text-[1.6rem] flex-row gap-[2rem] sm:gap-[1rem] md:hidden">
        <li className="li-hover">
          <Link href="#">Home</Link>
        </li>
        <li className="li-hover">
          <Link href="#">Cars</Link>
        </li>
        <li className="li-hover">
          <Link href="#">About</Link>
        </li>
        <li className="li-hover">
          <Link href="#">Contact</Link>
        </li>
        <li className="bg-slate-teal px-[1rem] py-[0.6rem] xl:hidden text-soft-almond transition-all hover:bg-slate-teal-hover rounded-[0.8rem] ">
          <Link href="#">Get Ride Now</Link>
        </li>
      </ul>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="menu-btn"
        className={`md:block ${
          isOpen ? "open" : ""
        } hamburger hidden focus:outline-none`}
        type="button"
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      {/* mobile menu */}
      <div
        id="menu"
        className={`absolute ${
          isOpen ? "flex" : "hidden"
        } p-6 rounded-lg bg-slate-teal left-6 right-6 top-20 z-100`}
      >
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-[1.6rem] text-white rounded-sm">
          <a href="#" className="w-full text-center">
            Features
          </a>
          <a href="#" className="w-full text-center">
            Pricing
          </a>
          <a href="#" className="w-full text-center">
            Resources
          </a>
          <a
            href="#"
            className="w-full pt-6 border-t border-gray-400 text-center"
          >
            Login
          </a>
          <a
            href="#"
            className="w-full py-3 text-center rounded-full bg-sunset-orange hover:bg-sunset-orange-hover text-deep-brown"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
