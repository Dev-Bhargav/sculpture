"use client";

import React, { useEffect, useState } from "react";
import Checkbox from "../components/Checkbox";
import PriceFilter from "../components/PriceFilter";
import Image from "next/image";
import { Filter } from "lucide-react";
import MobileFilterSheet from "../components/MobileFilterSheet";
import products from "../data/products";
import Link from "next/link";

export default function Page() {
  const [showFilter, setShowFilter] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const [productData, setProductsData] = useState([...products]);
  const [selected, setSelected] = useState(null);


  useEffect(() => {
    let updatedData = [...products];

    if (filterOption) {
      updatedData = updatedData.filter((item) => {
        switch (filterOption) {
          case "$0-$10":
            return item.price <= 10;
          case "$10-$20":
            return item.price > 10 && item.price <= 20;
          case "$20-$30":
            return item.price > 20 && item.price <= 30;
          case "$30-$40":
            return item.price > 30 && item.price <= 40;
          case "$40-$50":
            return item.price > 40 && item.price <= 50;
          default:
            return true;
        }
      });
    }
    console.log(sortOption)
    if (sortOption) {
      updatedData.sort((a, b) => {
        switch (sortOption) {
          case "low-to-high":
            return a.price - b.price;
          case "high-to-low":
            return b.price - a.price;
          default:
            return 0;
        }
      });
    }

    setProductsData(updatedData);
  }, [sortOption, filterOption]);

  const removeFilter = () => {
    setFilterOption("");
    setSortOption("");
    setSelected(null)
  };


  return (
    <div>
      <section className="lg:hidden mt-8 py-2 flex justify-between items-center px-4 lg:px-10">
        <p className="opacity-75">Showing 100 products</p>
        <button
          onClick={() => setShowFilter(true)}
          className="border border-[var(--primary)] text-[var(--primary)] cursor-pointer font-semibold px-2 py-1 rounded-sm inline-flex items-center gap-1"
        >
          <Filter size={18} /> Filter
        </button>
      </section>

      {/* Filte Panel for Mobile  */}
      <MobileFilterSheet
        show={showFilter}
        onClose={() => setShowFilter(false)}
        setSortOption={setSortOption}
        sortOption={sortOption}
      />

      <div className="flex justify-between lg:justify-normal gap-4 lg:gap-10 lg:px-10 mt-10">
        <div className="h-fit w-[300px] min-w-[230px] py-3 hidden lg:block">
          <div className="flex justify-between items-center py-3 border-b-1 border-gray-300">
            <h1 className="font-bold text-lg">FILTER & SORT</h1>
            <button
              onClick={removeFilter}
              className="text-sm text-gray-500 cursor-pointer disabled:text-gray-300"
            >
              Clear all
            </button>
          </div>
          <div className="flex flex-col gap-3 border-b-1 border-b-gray-300 py-3">
            <h1 className="font-bold text-lg">SORT BY</h1>
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
            </div>
          </div>
          <div className="mt-3 py-3 border-b-1 border-gray-300">
            <h1 className="font-bold text-lg">PRICE</h1>
            <div className="m-3">
              <PriceFilter filterOption={filterOption} selected={selected} setSelected={setSelected}  setFilterOption={setFilterOption} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[70vw]">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:justify-start gap-x-2 lg:gap-x-5 gap-y-9 lg:gap-10 py-3 px-4">
            {productData.map((product, index) => (
              <Link
                href={`/shop/${product.slug}`}
                className="cursor-pointer"
                key={index}
              >
                <div className="h-fit bg-[#e2e2e2] rounded-t-sm px-2 flex justify-center">
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
                  <p className="text-md opacity-70">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
