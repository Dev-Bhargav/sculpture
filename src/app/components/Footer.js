import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[var(--navbar)]  flex flex-col items-center py-8 gap-14 mt-10">
      <div className="text-center ">
        <h1 className="font-black text-3xl md:text-4xl px-2 rounded-sm">
          Desgin Wizards
          <span className="text-[var(--primary)] text-[40px] font-[--font-geist-sans]">
            .
          </span>
        </h1>
        <p className="bg[#828282] text-sm py-2">
          © 2025 Your Website Name. Crafted with care for sculpture lovers.
        </p>
      </div>
      <div>
        <nav>
          <ul className="flex gap-5 font-semibold text-lg">
            <li className="hover:text-[var(--primary)]">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-[var(--primary)]">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="cursor-pointer hover:text-[var(--primary)]">
              <Link href="/about-us">About us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
