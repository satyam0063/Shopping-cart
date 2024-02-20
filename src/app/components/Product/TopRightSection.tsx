"use client";
import React, { useCallback, useState } from "react";
import ProdQuantity from "../UI/ProdQuantity";
import AddToCartBtn from "../UI/AddToCartBtn";

interface Product {
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
}

const TopRightSection = (props: any) => {
  const [quantity, setQuantity] = useState(1);
  const priceAfterDiscount = (price: number, discount: number) => {
    return (price - (price * discount) / 100).toFixed(2);
  };

  return (
    <div>
      <div className="flex mb-[15px]">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Home
              </a>
            </li>
            <li>
              <span className="text-gray-500">&nbsp;/&nbsp;</span>
            </li>
            <li>
              <span className="text-gray-500">Page</span>
            </li>
          </ol>
        </nav>
        <div></div>
      </div>
      <div className="mb-[1em]">
        <del className="text-[#4f4f4f] leading-tight font-bold opacity-60 text-[24px]">
          <span>$</span>
          {props.product.price}
        </del>{" "}
        <ins className="text-[#4f4f4f] leading-tight font-bold no-underline text-[24px]">
          <span>$</span>
          {priceAfterDiscount(
            props.product.price,
            props.product.discountPercentage
          )}
        </ins>
      </div>
      <div className="mb-[1em]">
        <p className="text-[#4f4f4f] leading-normal font-sans text-[17px] tracking-wide">
          {props.product.description}
        </p>
      </div>
      <div className="flex border-b border-[#d5d5d5]">
        <div>
          <ProdQuantity setQuantity={setQuantity} quantity={quantity} />
        </div>
        <div className="mb-[15px]">
          <AddToCartBtn product={props.product} quantity={quantity}/>
        </div>
      </div>
      <div className="text-[15px] text-[#4f4f4f] mt-1 font-sans">
        <span>Category: </span>
        <span className="text-[#54595f] cursor-pointer hover:text-[#000] capitalize">
          {props.product.category}
        </span>
      </div>
    </div>
  );
};

export default TopRightSection;
