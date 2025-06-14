"use client"

import { createContext, useContext, useState } from "react";

const ProductFilterContext = createContext();

export default function ProductFilterProvider({children}) {
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const [selected, setSelected] = useState(null);

  const resetFilter = () => {
    setSortOption("");
    setFilterOption("");
    setSelected(null);
  };

  return (
    <ProductFilterContext.Provider
      value={{
        setSortOption,
        sortOption,
        filterOption,
        setFilterOption,
        selected,
        setSelected,
        resetFilter,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
}

export const useProductFilter = () => useContext(ProductFilterContext)