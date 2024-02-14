import React from "react";
import {
    Bars3Icon,
  } from "@heroicons/react/24/solid";

const FilterButton = () => {
  return (
    <button className="px-4 py-2 bg-[#54595f] text-white text-xl uppercase rounded flex flex-row">
      <Bars3Icon className="h-8 w-8" />
      <div>filter</div>
    </button>
  );
};

export default FilterButton;
