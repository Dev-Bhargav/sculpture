import React from "react";

export default function Checkbox({
  label,
  value,
  sortOption,
  setSortOption,
  onClose = undefined,
}) {
  return (
    <div>
      <label className="inline-flex items-center space-x-1 cursor-pointer">
        <input
          type="radio"
          name="sort"
          checked={sortOption == value}
          className="peer hidden"
          value={value}
          onChange={(e) => {
            setSortOption(e.target.value);
            if (onClose) {
              onClose();
            }
          }}
        />
        <span
          className="
                relative w-5 h-5 rounded-full border-2 border-gray-300
                after:content-['']
                after:absolute
                after:top-1/2 after:left-1/2
                after:w-2 after:h-2
                after:rounded-full
                after:bg-[var(--primary)]
                after:transform after:-translate-x-1/2 after:-translate-y-1/2
                after:scale-0
                peer-checked:after:scale-100
                transition-all duration-200
              "
        ></span>
        <span className="pt-0.5 select-none">{label}</span>
      </label>
    </div>
  );
}
