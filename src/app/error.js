"use client";

import Nav from "@/_components/Nav";

export default function Error({ error, reset }) {
  return (
    <div className="col-start-1 m-0 col-span-12">
      <Nav />
      <main className="grid justify-center content-center text-center h-[70vh] space-y-6 mt-4">
        <h1 className="text-3xl font-semibold my-auto mx-auto">
          Something went wrong!
        </h1>
        <p className="text-lg">{error.message}</p>

        <button
          className="inline-block bg-sunset-orange hover:bg-sunset-orange-hover text-deep-brown font-bold px-6 py-3 text-lg"
          onClick={reset}
        >
          Try again
        </button>
      </main>
    </div>
  );
}
