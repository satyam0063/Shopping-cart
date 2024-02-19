'use client'
import React from "react";

const CommonButtons = ({
  name,
  textColor,
  bgColor,
  hoverBgClr,
}: {
  name: string;
  textColor: string;
  bgColor: string;
  hoverBgClr: string;
}) => {
  return (
    <>
      <button
        type="button"
        className={`text-[#${textColor ?? "4f4f4f"}] bg-[#${
          bgColor ?? "fefefe"
        }] rounded-md px-9 py-4 mt-3 tracking-widest uppercase text-sm font-semibold hover:bg-[#${
          hoverBgClr ?? "f5f5f5"
        }] hover:translate-y-[-8px] transition-transform duration-300 ease-out text`}
      >
        {name ?? "View Collection"}
      </button>
    </>
  );
};

export default CommonButtons;
