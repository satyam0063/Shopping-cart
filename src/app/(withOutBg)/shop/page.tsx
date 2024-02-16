"use client";
import React from "react";
import FilterBar from "../../components/Shop/FilterBar";
import ProductCard from "../../components/UI/ProductCard";

const Shop = () => {
  const array = [1, 2, 3, 4, 5];
  return (
    <div className="w-full bg-[#f5f5f5] px-5 py-16">
      <div className="w-full bg-[#ffffff] px-4 py-4 sm:px-20 sm:py-12">
        <div className="uppercase font-barlow-condensed text-6xl text-[#54595f] pb-20 text-center sm:text-start">
          Shop
        </div>
        <FilterBar />
        <div className="w-full flex flex-row flex-wrap">
          {array.map((_item: any, idx: any) => (
            <div className="w-full sm:w-1/4 px-2 py-2" key={idx}>
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
