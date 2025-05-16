import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function MobileNavbar({ show, onClose }) {
  return (
    <>
      <div
        className={`fixed h-full top-0 left-0 right-0 z-50 bg-[var(--background)] rounded-b-xl shadow-xl transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        } lg:hidden`}
      >
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[var(--primary)] rounded-full shadow p-2">
          <X onClick={onClose} color="black" size={30} />
        </div>
        <div className="flex h-full text-center justify-center items-center">
          <nav>
            <ul className="text-xl flex flex-col gap-3 ">
              <Link
                href="/"
                className="active:text-[var(--primary)] active:underline"
                onClick={onClose}
              >
                Home
              </Link>
              <Link
                onClick={onClose}
                className="active:text-[var(--primary)] active:underline"
                href="/shop"
              >
                Shop
              </Link>
              <Link
                href="/"
                className="active:text-[var(--primary)] active:underline"
              >
                About us
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
