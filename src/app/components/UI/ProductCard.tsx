/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import RatingBar from "./RatingBar";

const ProductCard = () => {
  return (
    // <div className="flex columns-4">
      <div className="flex flex-col  pb-[1.2em]">
        <div className="relative">
          <span className="text-[#fff] bg-[#54595f] absolute top-0 right-0 left-auto rounded-full min-h-[3em] min-w-[3em] leading-[3em] text-center px-[2px] text-[0.8em] mt-[-0.5em] mr-[-0.5em]">
            Sale!
          </span>
          <Image
            src="/static/images/sports-shoe5-400x400.jpg"
            alt={""}
            width={0}
            height={0}
            sizes="100vw"
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="flex flex-col ml-4">
          <div className="mb-[0.5em] leading-tight">
            <span className="text-[0.85em] opacity-60 ">Men's Shoes</span>
          </div>
          <div className="mb-[0.5em] p-0">
            <h2 className="text-[1em] uppercase font-barlow-condensed">
              DNK BLACK BLUE SPORT SHOES
            </h2>
          </div>
          <div>
            <RatingBar />
          </div>
          <div>$35.00 $32.00</div>
        </div>
      </div>
    // </div>
  );
};

export default ProductCard;
