"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import RatingBar from "./RatingBar";
import { useRouter } from "next/navigation";

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

const calculateActualPrice = (actualPrice: any, discountPercentage: any) => {
    // Calculate actual price from discount percentage
    // return (originalPrice - (originalPrice * (discountPercentage / 100))).toFixed(2);
    return (actualPrice / (1 - (discountPercentage / 100))).toFixed(2);
}

const ProductCard = ({ product }:{product: Product}) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col  pb-[1.2em]"
      onClick={() => router.push(`/shop/${product.id}`)}
    >
      <div className="group relative mb-[0.5em] hover:cursor-pointer">
        <span className="text-[#fff] bg-[#54595f] absolute top-0 right-0 left-auto rounded-full min-h-[3em] min-w-[3em] leading-[3em] text-center px-[2px] text-[0.8em] mt-[-0.5em] mr-[-0.5em]">
          Sale!
        </span>
        <Image
          src={product.thumbnail}
          alt={""}
          width={0}
          height={0}
          sizes="100vw"
          className="w-[100%] h-[100%]"
        />
        <span className="text-[#fff] transition-all duration-200 ease-linear bg-[#54595f] absolute bottom-0 left-0 opacity-0 min-h-[2em] leading-[2em] w-full text-center group-hover:opacity-100 hover:bg-[#000]">
          Quick View
        </span>
      </div>
      <div className="flex flex-col ml-4">
        <div className="mb-[0.5em] leading-tight">
          <span className="text-[0.85em] opacity-60 ">{product.category}</span>
        </div>
        <div className="">
          <h2 className="text-[1em] uppercase font-barlow-condensed">
            {product.title}
          </h2>
        </div>
        <div className="m-0 p-0">
          <RatingBar />
        </div>
        <div className="">
          <del className="text-[#4f4f4f] leading-tight font-bold opacity-60 text-[0.9em]">
            <span>$</span>
            {calculateActualPrice(product.price,product.discountPercentage)}
          </del>{" "}
          <ins className="text-[#4f4f4f] leading-tight font-bold no-underline text-[0.9em]">
            <span>$</span>
            {product.price}
          </ins>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
