"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

function ButtonMore({ path }) {
  const pathName = usePathname();

  return (
    pathName !== path && (
      <Link className="mx-auto" href={path}>
        <button className="bg-sunset-orange transition duration-300 font-bold hover:text-warm-ivory inline max-w-fit self-center text-xl py-2 px-4 text-deep-brown">
          See more ↓
        </button>
      </Link>
    )
  );
}

export default ButtonMore;
