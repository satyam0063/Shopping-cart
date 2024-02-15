"use client";
import React, { useState } from "react";
import RangeSlider from "../UI/RangeSlider";

const FilterModal = () => {
  const initialMin = 2500;
  const initialMax = 7500;
  const min = 0;
  const max = 10000;
  const step = 100;
  const priceCap = 1000;
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);
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
            <button>Filter</button>
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
        <div className="flex justify-between px-1 mb-2">
          <div>Accessories</div>
          <div>(3)</div>
        </div>
        <div className="flex justify-between px-1 mb-2">
          <div>Accessories</div>
          <div>(3)</div>
        </div>
        <div className="flex justify-between px-1 mb-2">
          <div>Accessories</div>
          <div>(3)</div>
        </div>
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
