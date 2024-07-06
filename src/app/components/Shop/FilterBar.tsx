'use client'
import React from "react";
import FilterButton from "./FilterButton";
import GridListToggleButton from "./GridListToggleButton";
import FilterSortButton from "./FilterSortButton";

const FilterBar = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between font-barlow-condensed text-[#54595f] pb-20">
      <div className="w-full sm:w-1/2 flex flex-col sm:flex-row items-center text-lg">
        <FilterButton />{" "}
        <div className="px-2 items-center sm:items-start">Showing 1–18 of 25 results</div>
      </div>
      <div className="w-full sm:w-1/2 flex flex-row-reverse">
        {/* <GridListToggleButton /> */}
        {/* <FilterSortButton /> */}
      </div>
    </div>
  );
};

export default FilterBar;
