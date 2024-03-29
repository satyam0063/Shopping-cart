"use client";
/* eslint-disable react/jsx-no-undef */
import React, { useCallback, useMemo } from "react";
import Image from "next/image";
import { UseAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  removeCartProducts,
} from "@/redux/features/cartReducer";
type Product = {
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
};
import { useRouter } from "next/navigation";
const Cart = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const cartList = UseAppSelector((state) => (state.cart as any).items);
  const individualSubTotal = useCallback(
    (price: number, qty: number, discount: number) => {
      return (
        Number(Number((price - (price * discount) / 100).toFixed(2))) * qty
      ).toFixed(2);
    },
    []
  );
  const priceAfterDiscount = useCallback((price: number, discount: number) => {
    return Number((price - (price * discount) / 100).toFixed(2));
  }, []);
  const subTotal = useMemo(
    () =>
      cartList.reduce((accumulator: number, currentValue: Product) => {
        return Number(
          (
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
          ).toFixed(2)
        );
      }, 0),
    [cartList]
  );
  const handleRemove = (id: number) => {
    dispatch(removeCartProducts(id));
  };
  return (
    <div className="bg-[#f5f5f5]">
      <div className=" max-w-[1240px] mx-auto px-[20px] py-14">
        <div className="">
          <div className="bg-[#fefefe] py-[20px] px-[10px] sm:py-[80px] sm:px-[110px]">
            <div className="uppercase text-[30px] text-[#000] mb-2 font-barlow-condensed">
              Cart
            </div>
            <div className="flex flex-col flex-wrap ">
              <div className="w-full pr-0 sm:pr-1 cartTable">
                <table className="w-full border border-[#dddddd]">
                  <thead>
                    <tr className="border-b border-[#dddddd] bg-[#f5f5f5]">
                      <th className="py-2 w-[5%]"></th>
                      <th className="py-2 w-2/12"></th>
                      <th className="text-left py-2 w-4/12">Product</th>
                      <th className="text-left py-2 w-1/12">Price</th>
                      <th className="text-left py-2 w-2/12">Quantity</th>
                      <th className="text-left py-2 w-2/12">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartList.map((item: Product, idx: number) => (
                      <tr key={idx} className="border-b border-[#dddddd]">
                        <td className="w-[5%]">
                          <div className="flex justify-end">
                            <button
                              className="h-[20px] w-[20px] mt-[4px] border border-[#000] hover:bg-[#ddd]  rounded-full leading-4 flex justify-center items-center"
                              onClick={() => handleRemove(item.id)}
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
                        </td>
                        <td className="w-2/12">
                          <div className="h-auto flex justify-center">
                            <Image
                              src={item.thumbnail}
                              alt=""
                              width={100}
                              height={100}
                              className="max-h-16 w-[5em]"
                            />
                          </div>
                        </td>
                        <td className="w-4/12">
                          <div>{item.title}</div>
                        </td>
                        <td className="w-1/12">
                          <div>
                            $
                            {priceAfterDiscount(
                              item.price,
                              item.discountPercentage
                            )}
                          </div>
                        </td>
                        <td className="w-2/12">
                          <div className="flex items-center ">
                            <div
                              className="px-3 py-[3px] hover:bg-[#c8c7c7] cursor-pointer select-none border-b border-l border-t border-[#ddd]"
                              onClick={() =>
                                item.quantity > 1 &&
                                dispatch(decrement(item.id))
                              }
                            >
                              -
                            </div>
                            <div className="border border-[#ddd] px-3 py-[3px]">
                              {item.quantity}
                            </div>
                            <div
                              className="px-3 py-[3px] hover:bg-[#c8c7c7] cursor-pointer select-none border-b border-r border-t border-[#ddd]"
                              onClick={() => dispatch(increment(item.id))}
                            >
                              +
                            </div>
                          </div>
                        </td>
                        <td className="w-2/12">
                          <div>
                            $
                            {individualSubTotal(
                              item.price,
                              item.quantity,
                              item.discountPercentage
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end sm:pr-1 mt-5">
                <div className="w-full sm:w-3/6">
                  <table className="w-full border border-[#dddddd]">
                    <thead>
                      <tr className="border-b border-[#dddddd] bg-[#f5f5f5]">
                        <th className="text-left px-4 py-2">CART TOTALS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2">
                          <div className="flex  border-b border-[#dddddd]">
                            <div className="w-2/5">Subtotal</div>
                            <div className=" w-3/5">${subTotal}</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">
                          <div className="flex  border-b border-[#dddddd]">
                            <div className="w-2/5">Shipping</div>
                            <div className=" w-3/5">
                              <p>Flat rate</p>
                              <p>Shpping to <b className="font-semibold">India, Bhubaneswar, Odisha, 755007</b></p>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 ">
                          <div className="flex  border-b border-[#dddddd]">
                            <div className="w-2/5">Total</div>
                            <div className="w-3/5">${subTotal}</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">
                          <div>Have a coupon?</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">
                          <button className="text-[#fefefe] font-medium bg-[#54595f] hover:bg-[#000] w-full px-9 py-5 mb-[5px] rounded-md leading-[1em] tracking-[2px] uppercase" onClick={()=>router.push('/checkout')}>
                            Checkout
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
