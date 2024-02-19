"use client";
import Image from "next/image";
import React, { useCallback, memo } from "react";
import ProdQuantity from "./ProdQuantity";
import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "@/redux/features/cartReducer";

const CartproductCard = (props: any) => {
  const dispatch = useDispatch();

  const handleQuantity = useCallback(
    (action: string) => {
      if (action === "add") {
        dispatch(
          updateQuantity({
            id: props.item.product.id,
            quantity: props.item.quantity + 1,
          })
        );
      }
      if (action === "substract") {
        dispatch(
          updateQuantity({
            id: props.item.product.id,
            quantity: props.item.quantity > 0 ? props.item.quantity - 1 : 0,
          })
        );
      }
    },
    [dispatch, props.item.product.id, props.item.quantity]
  );

  const handleRemove = useCallback(() => {
    dispatch(removeFromCart(props.item.product.id));
  }, [dispatch, props.item.product.id]);

  return (
    <div className="flex border-b border-[#dddddd] py-4">
      <div className="h-auto w-[5em]">
        <Image
          src="/static/images/sports-shoe5-400x400.jpg"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="px-3 flex flex-col justify-between h-auto w-full ">
        <div className="flex justify-between items-start">
          <div>{props.item.product.title}</div>
          <div>
            <button
              className="h-[20px] w-[20px] mt-[4px] border border-[#000] hover:bg-[#ddd]  rounded-full leading-4 flex justify-center items-center"
              onClick={handleRemove}
            >
              <Image
                src="/static/images/cross-icon.svg"
                alt=""
                width={14}
                height={14}
                className=""
              />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <ProdQuantity
            handleQuantity={handleQuantity}
            quantity={props.item.quantity}
          />
          <div>${props.item.product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default memo(CartproductCard);
