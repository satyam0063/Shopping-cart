"use client";
/* eslint-disable react/jsx-no-undef */
import React from "react";

import LeftSection from "@/app/components/Checkout/LeftSection";
import RightSection from "@/app/components/Checkout/RightSection";
type Product = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
  quantity: number;
};

const Checkout = () => {

  return (
    <div className="bg-[#f5f5f5]">
      <div className=" max-w-[1240px] mx-auto px-[20px] py-14">
        <div className="">
          <div className="bg-[#fefefe] py-[20px] px-[10px] sm:py-[80px] sm:px-[110px]">
            <div className="uppercase text-[30px] text-[#000] mb-2 font-barlow-condensed">
              Checkout
            </div>
            <div className="flex flex-wrap sm:flex-nowrap">
              <div className="w-full sm:w-7/12 pr-2">
                <LeftSection />
              </div>
              <div className="w-full sm:w-5/12 pl-2">
                <RightSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
