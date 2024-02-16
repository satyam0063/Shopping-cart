"use client";
import TopRightSection from "@/app/components/Product/TopRightSection";
import ImageViewer from "@/app/components/UI/ImageViewer";
import React from "react";

const Product = ({ params }: { params: { id: string } }) => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className=" max-w-[1200px] mx-auto px-[20px] py-14">
        <div className="">
          <div className="bg-[#fefefe] py-[50px] px-[70px]">
            <div className="flex flex-wrap md:flex-nowrap justify-between">
              <div className="w-full sm:w-[48%]">
                <ImageViewer />
              </div>
              <div className="w-full sm:w-[48%]">
                <TopRightSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
