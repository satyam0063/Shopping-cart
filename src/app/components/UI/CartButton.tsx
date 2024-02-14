'use client'
import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const CartButton = (props: any) => {
  return (
    <div className="relative inline-block">
      <button>
        <ShoppingBagIcon className={`h-8 w-8 ${props.updateColor ? 'text-[#54595f] hover:text-black' : 'text-[#fefefe] hover:text-white'}`} />
      </button>
      <span className={`absolute -right-3 -top-3 inline-flex items-center justify-center h-5 w-5 ${props.updateColor ? 'bg-[#54595f] text-[#fefefe]' : 'bg-[#fefefe] text-[#54595f]'} text-xs font-bold rounded-full`}>
        3
      </span>
    </div>
  );
};

export default CartButton;
