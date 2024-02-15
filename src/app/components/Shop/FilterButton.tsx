"use client";
import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import FilterModal from "./FilterModal";

const FilterButton = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  useEffect(() => {
    document.body.style.overflowY = showFilterModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [showFilterModal]);
  return (
    <>
      <button
        className="px-4 py-2 bg-[#54595f] text-white text-xl uppercase rounded flex flex-row"
        onClick={() => setShowFilterModal(true)}
      >
        <Bars3Icon className="h-8 w-8" />
        <div>filter</div>
      </button>
      <div
        className={`bg-black fixed ml-0 p-0 top-0 bottom-0 right-0 left-0 transition-opacity duration-200 ease-in-out ${
          showFilterModal
            ? "bg-opacity-40 visible z-10 cursor-pointer"
            : "bg-opacity-0 invisible"
        }`}
        onClick={() => setShowFilterModal(false)}
      />
      <div
        className={`fixed block overflow-auto will-change-transform transition duration-250 ease h-full right-full top-0 ${
          showFilterModal
            ? "z-20 visible opacity-100 bg-[#fefefe] w-[20%] translate-x-full translate-y-0 border-[#ddd] "
            : "invisible opacity-0 translate-x-0 translate-y-0"
        }`}
      >
        <FilterModal/>
      </div>
    </>
  );
};

export default FilterButton;
