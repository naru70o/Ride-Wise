"use client";

import Nav from "@/_components/Nav";
import Link from "next/link";

export default function Error({ error }) {
  return (
    <div className="col-start-2 m-0 col-span-10">
      <Nav />
      <main className="grid justify-center content-center text-center h-[70vh] space-y-6 mt-4">
        <h1 className="text-3xl font-semibold my-auto mx-auto">
          Something went wrong!
        </h1>
        <p className="text-lg">
          {error?.message || "An unexpected error occurred."}
        </p>

        <Link
          href="/Cars"
          className="inline-block bg-sunset-orange hover:bg-sunset-orange-hover text-deep-brown font-bold px-6 py-3 text-lg"
        >
          Go back
        </Link>
      </main>
    </div>
  );
}
