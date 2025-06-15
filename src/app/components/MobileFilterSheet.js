"use client";

import { useEffect } from "react";
import Checkbox from "./Checkbox";
import PriceFilter from "./PriceFilter";
import { X } from "lucide-react";

export default function MobileFilterSheet({
  show,
  onClose,
  setSortOption,
  sortOption,
  filterOption,
  selected,
  setSelected,
  setFilterOption
}) {
  // Prevent background scroll when open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  useEffect(()=>{
    console.log("Mounted")
  },[])

  return (
    <>
      {show && (
        <div
          className="fixed inset-0 bg-black opacity-60 z-90 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed bottom-0 left-0 right-0 z-100 bg-[var(--background)] rounded-t-xl shadow-xl transition-transform duration-300 ${
          show ? "translate-y-0" : "translate-y-full"
        } lg:hidden`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Filter</h2>
            <X onClick={onClose} />
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Sort by</h3>
            <div className="space-y-1">
              <Checkbox
                label="Price: low to high"
                setSortOption={setSortOption}
                sortOption={sortOption}
                value="low-to-high"
                onClose={onClose}
              />
              <Checkbox
                label="Price: high to low"
                setSortOption={setSortOption}
                sortOption={sortOption}
                value="high-to-low"
                onClose={onClose}
              />
            </div>
            <h3 className="font-semibold text-lg mt-4">Price</h3>
            <PriceFilter
              filterOption={filterOption}
              selected={selected}
              setSelected={setSelected}
              setFilterOption={setFilterOption}
            />
          </div>
        </div>
      </div>
    </>
  );
}
