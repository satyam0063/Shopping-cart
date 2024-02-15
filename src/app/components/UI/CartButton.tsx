"use client";
import React, { useState, useEffect } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import CartPopup from "./CartPopup";

const CartButton = (props: any) => {
  const [showCartModal, setShowCartModal] = useState(false);
  useEffect(() => {
    document.body.style.overflowY = showCartModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [showCartModal]);

  return (
    <>
      <div
        className="relative inline-block"
        onClick={() => setShowCartModal(true)}
      >
        <button>
          <ShoppingBagIcon
            className={`h-8 w-8 ${
              props.updateColor
                ? "text-[#54595f] hover:text-black"
                : "text-[#fefefe] hover:text-white"
            }`}
          />
        </button>
        <span
          className={`absolute -right-3 -top-3 inline-flex items-center justify-center h-5 w-5 ${
            props.updateColor
              ? "bg-[#54595f] text-[#fefefe]"
              : "bg-[#fefefe] text-[#54595f]"
          } text-xs font-bold rounded-full`}
        >
          3
        </span>
      </div>
      <div
        className={`bg-black fixed ml-0 p-0 top-0 bottom-0 right-0 left-0 transition-opacity duration-200 ease-in-out ${
          showCartModal
            ? "bg-opacity-40 visible z-10 cursor-pointer"
            : "bg-opacity-0 invisible"
        }`}
        onClick={() => setShowCartModal(false)}
      />
      <div
        className={`fixed block overflow-auto will-change-transform transition duration-250 ease h-full left-full right-0 top-0 ${
          showCartModal
            ? "z-20 visible opacity-100 bg-[#fefefe] w-[35%] -translate-x-full translate-y-0 border-[#ddd] "
            : "invisible opacity-0 translate-x-0 translate-y-0"
        }`}
      >
        <CartPopup />
      </div>
    </>
  );
};

export default CartButton;
