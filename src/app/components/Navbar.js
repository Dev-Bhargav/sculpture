"use client";

import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-between py-5 px-4 items-center bg-[var(--background)] top-0 sticky z-50">
      <h1 className="font-black text-xl md:text-2xl bg-[#FF4E14] text-black px-2 py-1 rounded-sm">
        <Link href="/">DESGIN WIZARDS</Link>
      </h1>
      <nav className="hidden md:block">
        <ul className="flex gap-7">
          <li>
            <Link className="font-font" href="/">
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="cursor-pointer">About us</li>
        </ul>
      </nav>
      <button className="bg-[#FF4E14] text-black font-bold py-1 px-2 rounded-sm cursor-pointer hidden md:block">
        Login
      </button>
      <AlignJustify className="md:hidden" onClick={() => setShow(true)} />
      <MobileNavbar show={show} onClose={() => setShow(false)} />
    </div>
  );
}
