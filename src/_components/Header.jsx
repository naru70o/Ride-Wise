import Hero from "./Hero";
import Nav from "./Nav";

function Header() {
  return (
    <div
      className="grid col-start-2 m-0 mx-auto col-span-10 md:grid-cols-subgrid  w-full md:col-start-1 md:col-span-12 md:bg-warm-ivory"
      id="hero"
    >
      <header className="max-w-[120rem] grid col-start-2 m-0 mx-auto col-span-10">
        <Nav />
        <Hero />
      </header>
    </div>
  );
}

export default Header;
