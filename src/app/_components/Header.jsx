import Link from "next/link";
import Hero from "./Hero";
import Partners from "./Partners";
import Nav from "./Nav";

function Header() {
  return (
    <div className="grid col-start-2 m-0 mx-auto col-span-10 md:grid-cols-subgrid h-screen md:h-[80vh] w-full md:col-start-1 md:col-span-12 md:bg-warm-ivory">
      <header className="max-w-[120rem] grid col-start-2 m-0 mx-auto col-span-10">
        <Nav />
        <Hero />
        <Partners />
      </header>
    </div>
  );
}

export default Header;
