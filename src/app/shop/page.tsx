"use client";
import React from "react";
import FilterBar from "../components/Shop/FilterBar";

const Shop = () => {
  return (
    <div className="w-full bg-[#f5f5f5] px-5 py-16">
      <div className="w-full bg-[#ffffff] px-4 py-4 sm:px-20 sm:py-12">
        <div className="uppercase font-barlow-condensed text-6xl text-[#54595f] pb-20 text-center sm:text-start">
          Shop
        </div>
        <FilterBar />
        <div className="w-full flex flex-row flex-wrap">
            <div className="w-full sm:w-1/4 px-2 py-2">Card</div>
            <div className="w-full sm:w-1/4 px-2 py-2">Card</div>
            <div className="w-full sm:w-1/4 px-2 py-2">Card</div>
            <div className="w-full sm:w-1/4 px-2 py-2">Card</div>
            <div className="w-full sm:w-1/4 px-2 py-2">Card</div>
            <div className="w-full sm:w-1/4 px-2 py-2">Card</div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
