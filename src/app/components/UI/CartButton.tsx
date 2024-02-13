'use client'
import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const CartButton = () => {
  return (
    <div className="relative inline-block">
      <button>
        <ShoppingBagIcon className="h-6 w-6 text-white" />
      </button>
      <span className="absolute -right-3 -top-3 inline-flex items-center justify-center h-5 w-5 bg-white text-black text-xs font-bold rounded-full">
        3
      </span>
    </div>
  );
};

export default CartButton;
