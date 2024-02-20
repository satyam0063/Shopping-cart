'use client'
import React from "react";

const Description = (props:any) => {
  return (
    <>
      <p className="text-[#4f4f4f] leading-normal font-sans text-[17px] tracking-wide">
        {props.description}
      </p>
    </>
  );
};

export default Description;
