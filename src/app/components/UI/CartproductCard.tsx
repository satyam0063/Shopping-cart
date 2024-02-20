"use client";
import Image from "next/image";
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  removeCartProducts,
} from "@/redux/features/cartReducer";

const CartproductCard = (props: any) => {
  const dispatch = useDispatch();

  // const handleQuantity = useCallback(
  //   (action: string) => {
  //     if (action === "add") {
  //       dispatch(
  //         updateQuantity({
  //           id: props.item.id,
  //           quantity: props.item.quantity + 1,
  //         })
  //       );
  //     }
  //     if (action === "substract") {
  //       dispatch(
  //         updateQuantity({
  //           id: props.item.id,
  //           quantity: props.item.quantity > 0 ? props.item.quantity - 1 : 0,
  //         })
  //       );
  //     }
  //   },
  //   [dispatch, props.item.id, props.item.quantity]
  // );

  // const handleRemove = useCallback(() => {
  //   dispatch(removeFromCart(props.item.id));
  // }, [dispatch, props.item.id]);
  const handleRemove = (id: number) => {
    dispatch(removeCartProducts(id));
  };
  const priceAfterDiscount = (price: number, discount: number) => {
    return Number((price - (price * discount) / 100).toFixed(2));
  };
  const productTotalPrice = (price: number, qty: number) => {
    return (price * qty).toFixed(2);
  };
  return (
    <div className="flex border-b border-[#dddddd] py-4">
      <div className="h-auto w-[5em]">
        <Image src={props.item.thumbnail} alt="" width={100} height={100} />
      </div>
      <div className="px-3 flex flex-col justify-between h-auto w-full ">
        <div className="flex justify-between items-start">
          <div>{props.item.title}</div>
          <div>
            <button
              className="h-[20px] w-[20px] mt-[4px] border border-[#000] hover:bg-[#ddd]  rounded-full leading-4 flex justify-center items-center"
              onClick={() => handleRemove(props.item.id)}
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
          {/* <ProdQuantity
            // handleQuantity={handleQuantity}
            // quantity={props.item.quantity}
          /> */}
          <div className="flex justify-center items-center border border-[#ddd]">
            <div
              className="px-3 py-[3px] hover:bg-[#c8c7c7] cursor-pointer select-none"
              onClick={() =>
                props.item.quantity > 1 && dispatch(decrement(props.item.id))
              }
            >
              -
            </div>
            <div className="border-r border-l border-[#ddd] px-3 py-[2px]">
              {props.item.quantity}
            </div>
            <div
              className="px-3 py-[3px] hover:bg-[#c8c7c7] cursor-pointer select-none"
              onClick={() => dispatch(increment(props.item.id))}
            >
              +
            </div>
          </div>
          <div>
            $
            {productTotalPrice(
              priceAfterDiscount(
                props.item.price,
                props.item.discountPercentage
              ),
              props.item.quantity
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CartproductCard);
