"use client";
import Image from "next/image";
import React, { useState } from "react";

const CartproductCard = () => {
  const [value, setValue] = useState(0);
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
          <div className="flex justify-center items-center border border-[#ddd]">
            <div
              className="px-3 py-[2px] hover:bg-[#c8c7c7] cursor-pointer select-none"
              onClick={() => setValue(value > 0 ? value - 1 : 0)}
            >
              -
            </div>
            <div className="border-r border-l border-[#ddd] px-3 py-[2px]">
              {value}
            </div>
            <div
              className="px-3 py-[2px] hover:bg-[#c8c7c7] cursor-pointer select-none"
              onClick={() => setValue(value + 1)}
            >
              +
            </div>
          </div>
          <div>$145</div>
        </div>
      </div>
    </div>
  );
};

export default CartproductCard;
