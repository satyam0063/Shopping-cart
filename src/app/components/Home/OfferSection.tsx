'use client'
import React from "react";
import CommonButtons from "../UI/CommonButtons";
import Image from "next/image";

const OfferSection = () => {
  console.log('OfferSection');
  return (
    <>
      <div className="bg-[#f5f5f5] bg-[url('/static/images/home/pattern-free-img.png')] bg-repeat bg-center relative">
        <div className="bg-[#f5f5f5] absolute top-0 left-0 h-full w-full opacity-90" />
        <div className="flex flex-wrap lg:flex-nowrap max-w-[1200px] mr-auto ml-auto relative">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-[45%] py-[50px]">
            <div className="mb-5">
              <Image
                src="/static/images/percentage-off.svg"
                alt=""
                height={50}
                width={50}
              />
            </div>
            <div className="mb-5">
              <h2 className="font-barlow-condensed text-[42px] uppercase">
                25% off
              </h2>
            </div>
            <div className="mb-5">
              <h3 className="font-barlow-condensed text-[30px] capitalize">
                On all orders above $299!
              </h3>
            </div>
            <div className="mb-5 text-[#54595f] text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor
              incididunt labore dolore.
            </div>
            <div>
              <div className="mt-5">
                <CommonButtons name={'Grab this offer'} textColor={"fefefe"} bgColor={"54595f"} hoverBgClr={"000"} />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[55%]">
            <div className="flex justify-center lg:justify-end mt-0 lg:mt-[-150px]">
              <Image
                src="/static/images/home/smiling-girl.png"
                alt=""
                width={750}
                height={767}
                sizes="100vw"
                className=" w-[75%] lg:w-[90%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferSection;
