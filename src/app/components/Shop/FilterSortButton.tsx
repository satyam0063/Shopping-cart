"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { sortProducts } from "@/redux/features/productReducer";

const FilterSortButton = () => {
  const dispatch = useDispatch();
  const handleSortChange = (e: any) => {
    dispatch(sortProducts(e.target.value));
  }
  return (
    <select className="block w-full sm:w-1/2 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-black-500" onChange={handleSortChange}>
      <option value="default">Default</option>
      <option value="price-asc">Sort By Price: low to high</option>
      <option value="price-desc">Sort By Price: high to low</option>
    </select>
  );
};

export default FilterSortButton;
