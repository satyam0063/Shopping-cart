'use client'
import React from "react";

const Quote = () => {
  return (
    <div className="pt-[70px] pb-[100px] px-3 lg:px-0">
      <div className="max-w-[1200px] mr-auto ml-auto">
        <div className="flex flex-col mr-0 lg:mr-[40%]">
          <div className="text-[40px] mb-5">
            <i className="fa fa-quote-left  text-[#54595f]" />
          </div>
          <div>
            <h3 className="leading-tight m-0 text-[#000] text-[30px] font-normal font-barlow-condensed">
              Proident Earum, Luctus Autem, Class Impedit Nostrud Pariatur,
              Perferendis Eiusmod Minima Perferendis, Itaque Recusandae Eligendi
              Facilisis.
            </h3>
          </div>
          <div className="mt-7">
            <div className="flex items-center w-[300px] text-[#4f4f4f]">
            <span className=" top-0 left-0 w-full h-full border-t border-dotted border-gray-500"></span>
            <span className=" text-nowrap  text-[14px] ml-2 font-sans">Mark Fosters</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
