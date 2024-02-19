"use client";
import React, { memo } from "react";

const AddToCartBtn = (props: any) => {
  return (
    <div>
      <button
        className="bg-[#54595f] text-[#fefefe] hover:bg-[#000] px-[20px] py-[5px] mb-[15px] text-[15px] font-sans font-medium rounded-md uppercase ml-[15px] tracking-widest"
        onClick={() => props.handleAddToCart()}
      >
        Add to cart
      </button>
    </div>
  );
};

export default memo(AddToCartBtn);
