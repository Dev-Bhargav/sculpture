"use client";

import React, { useEffect, useState } from "react";
import Checkbox from "../components/Checkbox";
import PriceFilter from "../components/PriceFilter";
import Image from "next/image";
import { SlidersHorizontal } from "lucide-react";
import MobileFilterSheet from "../components/MobileFilterSheet";
import Link from "next/link";
import { useProductFilter } from "@/context/ProductFilterContext";
import { getProducts } from "@/lib/shopify";

export default function Page() {
  const [productData, setProductsData] = useState([]);
  const [filteredProductData, setFilteredProductsData] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const {
    sortOption,
    setSortOption,
    filterOption,
    setFilterOption,
    selected,
    setSelected,
    resetFilter,
  } = useProductFilter();

  useEffect(() => {
    async function loadProducts() {
      try {
        const products = await getProducts();
        setProductsData(products);
      } catch (error) {
        console.error("Failed to load products:", error);
        setProductsData([]);
      }
    }

    loadProducts();
  }, []);

  useEffect(() => {
    let updatedData = [...productData];

    if (filterOption) {
      updatedData = updatedData.filter((item) => {
        switch (filterOption) {
          case "₹0-₹500":
            return item.price <= 500;
          case "₹500-₹1000":
            return item.price > 500 && item.price <= 1000;
          case "₹1000-₹1500":
            return item.price > 1000 && item.price <= 1500;
          case "₹1500-₹2000":
            return item.price > 1500 && item.price <= 2000;
          case "₹2000-₹2500":
            return item.price > 2000 && item.price <= 2500;
          default:
            return true;
        }
      });
    }
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

    setFilteredProductsData(updatedData);
  }, [sortOption, filterOption, productData]);

  return (
    <div>
      <section className="lg:hidden mt-8 py-2 flex justify-between items-center px-4 lg:px-10">
        <p className="opacity-75">Showing 100 products</p>
        <button
          onClick={() => setShowFilter(true)}
          className="border border-[var(--primary)] text-[var(--primary)] cursor-pointer font-semibold px-2 py-1 rounded-sm inline-flex items-center gap-1"
        >
          <SlidersHorizontal size={18} /> Filter
        </button>
      </section>

      {/* Filte Panel for Mobile  */}
      <MobileFilterSheet
        show={showFilter}
        onClose={() => setShowFilter(false)}
        setSortOption={setSortOption}
        sortOption={sortOption}
      />

      <div className="flex justify-between lg:justify-normal gap-4 lg:gap-10 lg:px-10 lg:mt-12">
        <div className="h-fit w-[300px] min-w-[230px] py-3 hidden lg:block">
          <div className="flex justify-between items-center py-3 border-b-1 border-gray-300">
            <h1 className="font-bold text-lg">FILTER & SORT</h1>
            <button
              onClick={resetFilter}
              className={`text-sm ${
                filterOption || sortOption
                  ? "text-gray-500 cursor-pointer"
                  : "text-gray-300 cursor-not-allowed"
              }`}
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
              <PriceFilter
                filterOption={filterOption}
                selected={selected}
                setSelected={setSelected}
                setFilterOption={setFilterOption}
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[80vw] ">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:justify-start gap-x-2 lg:gap-x-5 gap-y-2 lg:gap-y-4 py-3 px-4">
            {(filterOption || sortOption
              ? filteredProductData
              : productData
            ).map((product, index) => (
              <Link
                key={index}
                href={`/shop/${product.slug}`}
                className="cursor-pointer"
              >
                <div className="h-fit bg-[#F2F2F2] rounded-t-sm px-2 flex justify-center">
                  {product.src ? (
                    <Image
                      src={product.src}
                      alt={product.altText || product.name}
                      height={100}
                      width={100}
                      className="w-[24vw] h-[42vw] md:h-[30vw] lg:h-[18vw] object-contain"
                    />
                  ) : (
                    <div className="w-[24vw] h-[42vw] md:h-[30vw] lg:h-[18vw] flex items-center justify-center text-sm text-gray-400"></div>
                  )}
                </div>
                <div className="rounded-b-sm px-2">
                  <p className="sm:text-lg">{product.name}</p>
                  <p className="text-sm sm:text-md opacity-70">
                    ₹{product.price}.00
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
