"use client";

import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-between bg-[#F2F3F4] py-3 px-4 items-center top-0 sticky z-50">
      <div className="flex items-center gap-12">
        <Link
          href="/"
          className="font-black text-3xl md:text-4xl text-black px-2 rounded-sm"
        >
          Desgin Wizards<span className="text-[var(--primary)] text-[40px] font-[--font-geist-sans]">.</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-6 font-semibold">
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
      <button className="bg-[#FF4E14] text-white font-bold py-1 px-7 rounded-sm cursor-pointer hidden md:block">
        Log in
      </button>
      <AlignJustify className="md:hidden" onClick={() => setShow(true)} />
      <MobileNavbar show={show} onClose={() => setShow(false)} />
    </div>
  );
}
