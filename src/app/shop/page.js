"use client";

import React, { useState } from "react";
import Checkbox from "../components/Checkbox";
import PriceFilter from "../components/PriceFilter";
import Image from "next/image";
import { Filter } from "lucide-react";
import MobileFilterSheet from "../components/MobileFilterSheet";

export default function Page() {
  const [showFilter, setShowFilter] = useState(false);
  const [sortOption, setSortOption] = useState("");

  const imageNames = [
    { id: 1, name: "Stone", price: 20, src: "/images/p1.png" },
    { id: 2, name: "Guard", price: 15, src: "/images/p2.png" },
    { id: 3, name: "Dragon", price: 12, src: "/images/p3.png" },
    { id: 4, name: "Demon", price: 50, src: "/images/p4.png" },
  ];

  const sortedProducts = [...imageNames].sort((a, b) => {
    if (sortOption == "low-to-high") return a.price - b.price;
    if (sortOption == "high-to-low") return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <div className="lg:hidden  mt-8 py-2 flex justify-between items-center px-4 lg:px-10">
        <p className="opacity-75">Showing 100 products</p>
        <button
          onClick={() => setShowFilter(true)}
          className="border border-[var(--primary)] text-[var(--primary)] cursor-pointer font-semibold px-2 py-1 rounded-sm inline-flex items-center gap-1"
        >
          <Filter size={18} /> Filter
        </button>
      </div>

      {/* Filte Panel for Mobile  */}
      <MobileFilterSheet
        show={showFilter}
        onClose={() => setShowFilter(false)}
      />

      <div className="flex justify-between lg:justify-around gap-4 lg:gap-0 lg:px-10">
        <div className="h-fit w-[20vw] min-w-[230px] py-3 hidden lg:block">
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-lg">SORT BY</h1>
            <div className="mx-3">
              <Checkbox
                label="Price: low to high"
                setSortOption={setSortOption}
                sortOption={sortOption}
                value="low-to-high"
              />
              <Checkbox
                label="Price: high to low"
                setSortOption={setSortOption}
                sortOption={sortOption}
                value="high-to-low"
              />
              {/* <Checkbox label="Latest" setSortOption={setSortOption} sortOption={sortOption} value={"low-to-high"}/> */}
            </div>
            <h1 className="font-semibold text-lg">PRICE</h1>
            <PriceFilter />
          </div>
        </div>
        <div className="w-full lg:w-[70vw]">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:justify-start gap-x-2 lg:gap-x-5 gap-y-9 lg:gap-10 py-3 px-4">
            {sortedProducts.map((product, index) => (
              <div className="cursor-pointer" key={index}>
                <div className="h-fit  bg-[#e2e2e2] rounded-t-sm px-2 flex justify-center">
                  <Image
                    src={product.src}
                    height={100}
                    width={100}
                    className="w-[24vw] h-[42vw] md:h-[30vw] lg:h-[18vw] object-contain"
                    alt={product.name}
                  />
                </div>
                <div className="rounded-b-sm px-2">
                  <p className="text-lg">{product.name}</p>
                  <p className="text-md text-[#D9D9D9] opacity-70">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
