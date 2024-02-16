"use client";
import Image from "next/image";
import React from "react";
import ProdQuantity from "./ProdQuantity";

const CartproductCard = () => {
  return (
    <div className="flex border-b border-[#dddddd] py-4">
      <div className="h-auto w-[5em]">
        <Image
          src="/static/images/sports-shoe5-400x400.jpg"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="px-3 flex flex-col justify-between h-auto w-full ">
        <div className="flex justify-between items-start">
          <div>Dark Brown Jeans</div>
          <div>
            <div className="h-[20px] w-[20px] mt-[4px] border border-[#000] hover:bg-[#ddd]  rounded-full leading-4 flex justify-center items-center">
              <Image
                src="/static/images/cross-icon.svg"
                alt=""
                width={14}
                height={14}
                className=""
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <ProdQuantity />
          <div>$145</div>
        </div>
      </div>
    </div>
  );
};

export default CartproductCard;
