import React from "react";

export default function PriceFilter({
  filterOption,
  setFilterOption,
  selected,
  setSelected,
}) {
  const prices = [
    "₹0-₹500",
    "₹500-₹1000",
    "₹1000-₹1500",
    "₹1500-₹2000",
    "₹2000-₹2500",
  ];
  const handleClick = (e, index) => {
    if (filterOption != e.target.value) {
      setFilterOption(e.target.value);
    } else {
      setFilterOption(null);
    }

    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {prices.map((price, index) => (
        <label
          key={index}
          className={`w-fit inline-flex justify-center border-2 py-1 px-2 rounded-sm cursor-pointer
            ${
              selected == index
                ? "bg-[var(--primary)] border-[var(--primary)] text-white"
                : "bg-transparent border-gray-300"
            }
        `}
        >
          <input
            type="button"
            name="filter"
            value={price}
            className="peer hidden"
            onClick={(e) => {
              handleClick(e, index);

            }}
          />
          <span className="select-none">{price}</span>
        </label>
      ))}
    </div>
  );
}
