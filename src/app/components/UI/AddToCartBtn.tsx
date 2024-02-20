"use client";
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { addCartProducts } from "@/redux/features/cartReducer";

const AddToCartBtn = (props: any) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="bg-[#54595f] text-[#fefefe] hover:bg-[#000] px-[20px] py-[5px]  text-[15px] font-sans font-medium rounded-md uppercase ml-[15px] tracking-widest"
        onClick={() =>
          dispatch(
            addCartProducts({ ...props.product, quantity: props.quantity })
          )
        }
      >
        Add to cart
      </button>
    </div>
  );
};

export default memo(AddToCartBtn);
