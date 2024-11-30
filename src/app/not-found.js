import Nav from "@/_components/Nav";
import Link from "next/link";

function NotFound() {
  return (
    <div className="col-start-2 m-0 col-span-10">
      <Nav />
      <main className="grid justify-center content-center text-center h-[70vh] space-y-6 mt-4">
        <h1 className="text-3xl font-semibold my-auto mx-auto">
          This page could not be found :(
        </h1>
        <Link
          href="/"
          className="inline-block bg-sunset-orange hover:bg-sunset-orange-hover text-deep-brown font-bold px-6 py-3 text-lg"
        >
          Go back home
        </Link>
      </main>
    </div>
  );
}

export default NotFound;
