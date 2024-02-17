"use client";
import BottomSection from "@/app/components/Product/BottomSection";
import TopRightSection from "@/app/components/Product/TopRightSection";
import ImageViewer from "@/app/components/UI/ImageViewer";
import Image from "next/image";
import React from "react";

const Product = ({ params }: { params: { id: string } }) => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className=" max-w-[1240px] mx-auto px-[20px] py-14">
        <div className="">
          <div className="bg-[#fefefe] py-[50px] px-[70px]">
            <div className="flex flex-wrap md:flex-nowrap justify-between px-9 py-8">
              <div className="w-full sm:w-[50%] relative">
                <span className="text-[#fff] bg-[#54595f] absolute top-[-0.5em] left-[-0.5em]  rounded-full h-[3.5em] w-[3.5em]  leading-[3.2em] text-center px-[2px] text-[1em] font-sans">
                  Sale!
                </span>
                <ImageViewer />
              </div>
              <div className="w-full sm:w-[46%] pr-5">
                <TopRightSection />
              </div>
            </div>
            <div className="px-9">
            <BottomSection/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
