import React from "react";
import CommonButtons from "./CommonButtons";

const SliderText = () => {
  return (
    <div className="w-full flex items-center justify-center sm:justify-start px-20 absolute top-40 text-white">
      <div className="w-full sm:w-1/2 text-center sm:text-start flex-col">
        <div className="text-2xl pb-5 font-barlow-condensed font-normal">Summer Collection</div>
        <div className="text-5xl sm:text-8xl pb-2 font-barlow-condensed font-thin fade-in-delay">INTRODUCING</div>
        <div className="text-5xl sm:text-8xl font-barlow-condensed font-thin">NEW ARRIVALS</div>
        <div className=" text-lg pt-5 pb-5 animate-fade-in delay-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </div>
        <CommonButtons name={"View Collection"} textColor={"4f4f4f"} bgColor={"fefefe"} hoverBgClr={"f5f5f5"} />
      </div>
    </div>
  );
};

export default SliderText;
