import Link from "next/link";
import Hero from "./Hero";
import Partners from "./Partners";

function Header() {
  return (
    <div className="grid col-start-2 m-0 mx-auto col-span-10 md:grid-cols-subgrid h-screen md:h-[80vh] w-full md:col-start-1 md:col-span-12 md:bg-warm-ivory">
      <header className="max-w-[120rem] grid col-start-2 m-0 mx-auto col-span-10">
        <nav className="flex justify-between items-center mt-[2rem] h-fit">
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
        </nav>

        <Hero />
        <Partners />
      </header>
    </div>
  );
}

export default Header;
