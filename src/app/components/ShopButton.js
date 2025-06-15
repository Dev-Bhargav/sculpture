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
        clicked ? "px-2" : "gap-3 px-3"
      } md:text-lg bg-[var(--primary)] text-white py-2 rounded-full cursor-pointer`}
    >
      {!clicked && <span>Shop Now</span>}
      <ArrowRight
        color="var(--primary)"
        size={10}
        className="bg-white rounded-full h-6 w-6"
      />
    </Link>
  );
}
