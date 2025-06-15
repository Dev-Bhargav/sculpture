"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ShopButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <Link
      href="/shop"
      onClick={() => setClicked(true)}
      className={`inline-flex w-fit items-center justify-center ${
        clicked ? "px-2" : "gap-2 px-3"
      } text-sm sm:text-base bg-[var(--primary)] text-white py-2 rounded-full cursor-pointer`}
    >
      {!clicked && <span>Shop Now</span>}
      <ArrowRight
        color="var(--primary)"
        className="bg-white rounded-full h-5 w-5 lg:h-6 lg:w-6"
      />
    </Link>
  );
}
