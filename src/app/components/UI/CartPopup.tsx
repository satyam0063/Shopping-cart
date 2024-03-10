"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import CartproductCard from "./CartproductCard";
import { UseAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
  quantity: number;
}

const CartPopup = ({ setShowCartModal }: { setShowCartModal: Function }) => {
  const router = useRouter();
  const cartList = UseAppSelector((state) => (state.cart as any).items);

  const subTotal = useMemo(
    () =>
      cartList.reduce((accumulator: number, currentValue: Product) => {
        return Number((
          accumulator +
          Number(
            Number(
              (
                currentValue.price -
                (currentValue.price * currentValue.discountPercentage) / 100
              ).toFixed(2)
            )
          ) *
            currentValue.quantity
        )?.toFixed(2));
      }, 0),
    [cartList]
  );
  return (
    <div>
      <div className="absolute w-full text-left z-50 border-b border-[#ddd] p-[1.34em] leading-none max-h-[3.5em] font-medium">
        <button
          className="absolute right-[1em] top-[1.1em]"
          onClick={() => setShowCartModal(false)}
        >
          <Image
            src="\static\images\cross-icon.svg"
            alt=""
            width={22}
            height={22}
          />
        </button>
        <div className="text-left leading-none font-normal">Shopping Cart</div>
      </div>
      <div className="pt-[3.5em] flex flex-col h-screen ">
        <div className="flex-grow overflow-auto">
          <div className="p-5">
            {cartList &&
              cartList.length > 0 &&
              cartList.map((cartItem: any) => (
                <CartproductCard
                  key={`cart-product-${cartItem.id}`}
                  item={cartItem}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex justify-between border-b border-t border-[#ddd] py-[15px] px-[21px] ">
            <div>Subtotal:</div>
            <div>${subTotal}</div>
          </div>
          <div className="px-[22px] py-[21px]">
            <div className="text-center">
              <button
                className="text-[#fefefe] font-medium bg-[#54595f] hover:bg-[#000] w-full px-9 py-5 mb-[5px] rounded-md leading-[1em] tracking-[2px] uppercase "
                onClick={() => router.push("/cart")}
              >
                View Cart
              </button>
            </div>
            <div className="text-center">
              <button className="text-[#fefefe] font-medium bg-[#54595f] hover:bg-[#000] w-full px-9 py-5 mt-[10px] rounded-md leading-[1em] tracking-[2px] uppercase">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
