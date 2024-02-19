'use client'
import React, { memo } from "react";

const ProdQuantity = (props: any) => {
  return (
    <div className="flex justify-center items-center border border-[#ddd]">
      <div
        className="px-3 py-[3px] hover:bg-[#c8c7c7] cursor-pointer select-none"
        onClick={() => props.handleQuantity('substract')}
      >
        -
      </div>
      <div className="border-r border-l border-[#ddd] px-3 py-[2px]">
        {props.quantity}
      </div>
      <div
        className="px-3 py-[3px] hover:bg-[#c8c7c7] cursor-pointer select-none"
        onClick={() => props.handleQuantity('add')}
      >
        +
      </div>
    </div>
  );
};

export default memo(ProdQuantity);
