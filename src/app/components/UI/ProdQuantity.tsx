import React, { useState } from "react";

const ProdQuantity = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="flex justify-center items-center border border-[#ddd]">
      <div
        className="px-3 py-[3px] hover:bg-[#c8c7c7] cursor-pointer select-none"
        onClick={() => setValue(value > 0 ? value - 1 : 0)}
      >
        -
      </div>
      <div className="border-r border-l border-[#ddd] px-3 py-[2px]">
        {value}
      </div>
      <div
        className="px-3 py-[3px] hover:bg-[#c8c7c7] cursor-pointer select-none"
        onClick={() => setValue(value + 1)}
      >
        +
      </div>
    </div>
  );
};

export default ProdQuantity;
