"use client";

import React from "react";
import Checkbox from "../components/Checkbox";
import PriceFilter from "../components/PriceFilter";
import Image from "next/image";

export default function Page() {
  const imageNames = ["Stone", "Guard", "Dragon", "Demon"];
  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex justify-around px-10 py-10">
      <div className="h-fit w-[20vw] p-3">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-lg">SORT BY</h1>
          <div className="mx-3">
            <Checkbox label="Price: low to high" />
            <Checkbox label="Price: high to low" />
            <Checkbox label="Latest" />
          </div>
          <h1 className="font-semibold text-lg">PRICE</h1>
          <PriceFilter />
        </div>
      </div>
      <div className="h-fit w-[70vw]">
        <div className="flex flex-wrap gap-10 p-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div className="cursor-pointer" key={i}>
              <div className=" h-10/12 bg-[#e2e2e2] rounded-t-sm px-4 ">
                <Image
                  src={`/images/p${i + 1}.png`}
                  height={150}
                  width={150}
                  style={{ objectFit: "contain" }}
                  alt={`product-${i + 1}`}
                />
              </div>
              <div className="bg-[#201b18] rounded-b-sm">
                <p className="text-center text-lg">{imageNames[i]}</p>
                <p className="text-center text-sm text-[#D9D9D9] opacity-70">
                  $10
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
