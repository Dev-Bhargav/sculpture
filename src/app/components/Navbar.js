"use client";

import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import UserStatus from "./UserStatus";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-between bg-[var(--navbar)] py-3 px-4 items-center top-0 sticky z-50">
      <div className="flex items-center gap-12">
        <Link
          href="/"
          className="font-black text-xl sm:text-2xl md:text-4xl px-2 rounded-sm"
        >
          Desgin Wizards
          <span className="text-[var(--primary)] font-[--font-geist-sans]">
            .
          </span>
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
      <div className="flex items-center gap-3">
        <UserStatus />
        <AlignJustify className="md:hidden" onClick={() => setShow(true)} />
      </div>
      <MobileNavbar show={show} onClose={() => setShow(false)} />
    </div>
  );
}
