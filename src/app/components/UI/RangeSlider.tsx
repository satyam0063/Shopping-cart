/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMinPrice, setMaxPrice } from "@/redux/features/productReducer";


const RangeSlider = ({
  min,
  max,
  step,
  priceCap,
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
}: {
  min: number;
  max: number;
  step: number;
  priceCap: number;
  minValue: number;
  maxValue: number;
  setMinValue: Function;
  setMaxValue: Function;
}) => {
  const dispatch = useDispatch();
  const progressRef: any = useRef(null!);

  const handleMin = (e: any) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) >= maxValue - 900) {
      } else {
        setMinValue(parseInt(e.target.value));
        dispatch(setMinPrice(parseInt(e.target.value)));
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value));
        dispatch(setMinPrice(parseInt(e.target.value)));
      }
    }
  };
  const handleMax = (e: any) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) < minValue + 1000) {
      } else {
        setMaxValue(parseInt(e.target.value));
        dispatch(setMaxPrice(parseInt(e.target.value)));
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value));
        dispatch(setMaxPrice(parseInt(e.target.value)));
      }
    }
  };
  useEffect(() => {
    progressRef.current.style.left = (minValue / max) * step + "%";
    progressRef.current.style.right = step - (maxValue / max) * step + "%";
  }, [minValue, maxValue]);

  return (
    <div className="flex flex-col w-full rounded-lg z-50 py-4">
      <div>
        <div className="relative h-1 rounded-md bg-gray-200">
          <div
            className="absolute h-1 bg-[#54595f] rounded"
            ref={progressRef}
          ></div>
        </div>
        <div className="range-input relative">
          <input
            type="range"
            value={minValue}
            onChange={handleMin}
            min={min}
            max={max}
            step={step}
            className=" range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
          />
          <input
            type="range"
            value={maxValue}
            onChange={handleMax}
            min={min}
            max={max}
            step={step}
            className=" range-max absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
