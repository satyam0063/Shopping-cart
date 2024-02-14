/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import CommonButtons from "../UI/CommonButtons";

const ImageGrid = () => {
  return (
    <>
      <div className="flex lg:flex-nowrap flex-wrap min-h-[750px] py-2 px-6">
        <div className="w-full md:w-1/2 m-3 rounded-2xl bg-[url('/static/images/home/new-collection-1.jpg')] bg-hero bg-no-repeat bg-cover bg-center flex items-end justify-center relative">
          <div className="rounded-2xl absolute top-0 left-0 h-full w-full bg-transparent bg-gradient-to-b from-transparent to-[#e36262] opacity-75"></div>
          <div className="mb-24 relative">
            <h2 className="text-neutral-100 font-sans ">
              <span className="text-4xl leading-tight">SUMMER COLLECTION</span>
            </h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="h-full md:h-1/2 flex lg:flex-nowrap flex-wrap">
            <div className="w-full md:w-1/2 m-3 rounded-2xl bg-[url('/static/images/home/men-collection.jpg')] bg-hero bg-no-repeat bg-cover bg-center flex items-end justify-center relative ">
              <div className="rounded-2xl absolute top-0 left-0 h-full w-full bg-transparent bg-gradient-to-b from-transparent to-[#e36262] opacity-75"></div>
              <div className="mb-16 ml-10 relative">
                <h2 className="text-neutral-100 font-sans ">
                  <span className="text-4xl leading-tight">
                    MEN'S COLLECTION
                  </span>
                </h2>
              </div>
            </div>
            <div className="w-full md:w-1/2 m-3 rounded-2xl bg-[url('/static/images/home/women-collection-1.jpg')] bg-hero bg-no-repeat bg-cover bg-center flex items-end justify-center relative">
              <div className="rounded-2xl absolute top-0 left-0 h-full w-full bg-transparent bg-gradient-to-b from-transparent to-[#e36262] opacity-75"></div>
              <div className="mb-16 ml-10 relative">
                <h2 className="text-neutral-100 font-sans ">
                  <span className="text-4xl leading-tight">
                    WOMEN'S COLLECTION
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="h-1/2 m-3 rounded-2xl bg-[url('/static/images/home/fashion-accessories.jpg')] bg-hero bg-no-repeat bg-cover bg-center flex items-end relative">
            <div className="rounded-2xl absolute top-0 left-0 h-full w-full bg-transparent bg-gradient-to-b from-[#54595f] to-[#272c41] opacity-75"></div>
            <div className="mb-16 ml-10 relative">
              <h2 className="text-neutral-100 font-sans ">
                <span className="text-4xl leading-loose">FREE SHIPPING</span>
                <div className="text-2xl leading-loose">
                  On All Orders Above $299
                </div>
                <CommonButtons name={"View Collection"} textColor={"4f4f4f"} bgColor={"fefefe"} hoverBgClr={"f5f5f5"} />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
