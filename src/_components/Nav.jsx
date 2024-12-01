"use client";
import Link from "next/link";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="flex relative justify-between items-center mt-[2rem] h-fit">
      <Link href="/">
        <img
          className="h-[4.8rem] cursor-pointer md:h-[3.2rem]"
          src="/Logo.png"
          alt="nav-logo"
        />
      </Link>

      <ul className="flex text-[2.4rem] items-center transition-all text-deep-brown xl:text-[2rem] md:text-[1.6rem] flex-row gap-[2rem] sm:gap-[1rem] md:hidden">
        <li className="li-hover">
          <Link href="/">Home</Link>
        </li>
        <li className="li-hover">
          <Link href="/Cars">Cars</Link>
        </li>
        <li
          onClick={() => scrollToSection("newsletter")}
          className="li-hover cursor-pointer"
        >
          Newsletter
        </li>
        <li className="li-hover">
          <Link href="/Testimonial">testimonial</Link>
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
          <Link href="/" className="w-full text-center">
            Home
          </Link>
          <Link href="/Cars" className="w-full text-center">
            Cars
          </Link>
          <div
            onClick={() => scrollToSection("steps")}
            className="w-full text-center cursor-pointer"
          >
            How it works
          </div>
          <Link
            href="/Testimonial"
            className="w-full pt-6 border-t border-gray-400 text-center"
          >
            Testimonial
          </Link>
          <Link
            href="/Cars"
            className="w-full py-3 text-center rounded-full bg-sunset-orange hover:bg-sunset-orange-hover text-deep-brown"
          >
            Get ride now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
