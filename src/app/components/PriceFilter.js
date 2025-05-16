"use client"

import React, { useState } from "react";

export default function PriceFilter() {
  const [selected, setSelected] = useState(null);
  const prices = ["$0-$10", "$10-$20", "$20-$30", "$30-$40", "$40-$50"];
  const handleClick = (index) => {
    // If already selected, unselect it
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };
  return (
    <div className="mx-3 flex flex-wrap gap-x-4 gap-y-2">
      {prices.map((price, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`inline-flex justify-center border-2 border-[var(--primary)] w-20 py-1 rounded-sm cursor-pointer
            ${selected == index ? "bg-[var(--primary)]" : "bg-transparent"}
        `}
        >
          {price}
        </button>
      ))}
    </div>
  );
}
