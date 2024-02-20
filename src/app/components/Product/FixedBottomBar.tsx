import Image from "next/image";
import React, { useState } from "react";
import ProdQuantity from "../UI/ProdQuantity";
import AddToCartBtn from "../UI/AddToCartBtn";

const FixedBottomBar = (props: any) => {
  const [quantity, setQuantity] = useState(1);
  const priceAfterDiscount = (price: number, discount: number) => {
    return (price - (price * discount) / 100).toFixed(2);
  };
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
                src={props.product.thumbnail}
                alt=""
                height={500}
                width={500}
                className="max-h-[50px] max-w-[50px]"
              />
            </div>
            <div>{props.product.title}</div>
          </div>
          <div className="flex items-center">
            <div>
              <del className="text-[#4f4f4f] leading-tight font-bold opacity-60 ">
                <span>$</span>
                {props.product.price}
              </del>{" "}
              <ins className="text-[#4f4f4f] leading-tight font-bold no-underline ">
                <span>$</span>
                {priceAfterDiscount(
                  props.product.price,
                  props.product.discountPercentage
                )}
              </ins>
            </div>
            <div>
              <ProdQuantity setQuantity={setQuantity} quantity={quantity} />
            </div>
            <div className="">
            <AddToCartBtn product={props.product} quantity={quantity}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FixedBottomBar;
