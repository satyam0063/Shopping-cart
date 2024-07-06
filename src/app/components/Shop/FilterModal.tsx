"use client";
import React, { useState } from "react";
import RangeSlider from "../UI/RangeSlider";
import { UseAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setFilterByPrice, setSelectedCategory } from "@/redux/features/productReducer";

const FilterModal = () => {
  const dispatch = useDispatch();
  const categoriesList = UseAppSelector((state) => state.product.categories);
  const selectedCategory = UseAppSelector((state) => state.product.selectedCategory);
  const filterByPrice = UseAppSelector((state) => state.product.filterByPrice);

  const initialMin = 2500;
  const initialMax = 7500;
  const min = 0;
  const max = 10000;
  const step = 100;
  const priceCap = 1000;
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);

  const handleSelectedCategory = (cl: string) => {
    dispatch(setSelectedCategory(cl));
  };

  const handleFilterByPrice = (val: any) => {
    dispatch(setFilterByPrice(val));
  }

  return (
    <div className="p-9">
      <div className="mb-11">
        <h2 className="text-[23px] text-[#4f4f4f] font-barlow-condensed ">
          FILTER BY PRICE
        </h2>
        <div>
          <RangeSlider
            min={min}
            max={max}
            step={step}
            priceCap={priceCap}
            minValue={minValue}
            maxValue={maxValue}
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
          />
        </div>
        <div className="flex justify-between">
          <div>
            {!filterByPrice && (<button onClick={() => handleFilterByPrice(true)}>Filter</button>)}
            {filterByPrice && (<button onClick={() => handleFilterByPrice(false)}>Clear Price Filter</button>)}
          </div>
          <div>
            Price: {minValue} - {maxValue}
          </div>
        </div>
      </div>
      <div className="mb-11">
        <h2 className="text-[23px] text-[#4f4f4f] font-barlow-condensed mb-5">
          PRODUCT CATEGORIES
        </h2>
        {categoriesList &&
          categoriesList.length > 0 &&
          categoriesList.map((cl: any, i: number) => (
            <div
              className="flex justify-between px-1 mb-2"
              key={`categories-${i}`}
            >
              <button
                className={`uppercase hover:text-black ${
                  cl === selectedCategory ? "text-black" : ""
                }`}
                onClick={() => handleSelectedCategory(cl)}
              >
                {cl}
                {console.log(cl)                }
              </button>
              {/* <div>(3)</div> */}
            </div>
          ))}
      </div>
      <div className="mb-11">
        <h2 className="text-[23px] text-[#4f4f4f] font-barlow-condensed mb-5">
          FILTER BY COLOR
        </h2>
        <div className="px-1">
          <div className="mb-2">Black (3)</div>
          <div className="mb-2">Aqua (1)</div>
          <div className="mb-2">Blue (8)</div>
          <div className="mb-2">Blue (8)</div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
