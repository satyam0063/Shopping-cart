import Image from "next/image";
import React from "react";
import ProdQuantity from "../UI/ProdQuantity";
import AddToCartBtn from "../UI/AddToCartBtn";

const FixedBottomBar = (props: any) => {
  return (
    <>
      <div
        className={`fixed block bg-[#fefefe] bottombar-shadow transition-opacity duration-500 ease-in-out bottom-0 left-0 right-0 ${
          props.scrollPercentage > 30
            ? "visible opacity-100"
            : " opacity-0 transition-opacity ease-in-out duration-500"
        }`}
      >
        <div className="flex max-w-[1240px] mx-auto px-5 py-[10px] justify-between">
          <div className="flex items-center">
            <div className="">
              <Image
                src="/static/images/sports-shoe5-400x400.jpg"
                alt=""
                height={500}
                width={500}
                className="max-h-[50px] max-w-[50px]"
              />
            </div>
            <div>DNK Blue Sport Shoes</div>
          </div>
          <div className="flex items-center">
            <div>
              <del className="text-[#4f4f4f] leading-tight font-bold opacity-60 ">
                <span>$</span>
                35.00
              </del>{" "}
              <ins className="text-[#4f4f4f] leading-tight font-bold no-underline ">
                <span>$</span>
                32.00
              </ins>
            </div>
            <div>
              <ProdQuantity />
            </div>
            <div className="">
              <AddToCartBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FixedBottomBar;
