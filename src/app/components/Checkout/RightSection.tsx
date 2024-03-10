import React, { useCallback, useMemo } from "react";
import Image from "next/image";
import { UseAppSelector } from "@/redux/store";
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

const RightSection = () => {
  const cartList = UseAppSelector((state) => (state.cart as any).items);
  const individualSubTotal = useCallback(
    (price: number, qty: number, discount: number) => {
      return (
        Number(Number((price - (price * discount) / 100).toFixed(2))) * qty
      ).toFixed(2);
    },
    []
  );
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
  return (
    <div className="pl-4">
      <h2 className="font-barlow-condensed font-medium text-[28px] mb-6">
        Your Order
      </h2>
      <div className="viewOnlyTable">
        <table className="w-full">
          <thead>
            <tr className="flex justify-between">
              <th className="w-8/12 text-left">Product</th>
              <th className="w-3/12 text-left">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((item: Product, idx: number) => (
              <tr key={idx} className="flex justify-between">
                <td className="w-8/12">
                  <div className="flex">
                    <div className="h-auto flex justify-center w-2/5">
                      <Image
                        src={item.thumbnail}
                        alt=""
                        width={100}
                        height={100}
                        className="max-h-16 w-[5em]"
                      />
                    </div>
                    <div className="w-3/5">{item.title}</div>
                    <div className="w-1/5"> X {item.quantity}</div>
                  </div>
                </td>
                <td className="w-3/12">
                  $
                  {individualSubTotal(
                    item.price,
                    item.quantity,
                    item.discountPercentage
                  )}
                </td>
              </tr>
            ))}
            <tr key={"5n"} className="flex justify-between">
              <td className="w-8/12">Subtotal</td>
              <td className="w-3/12">${subTotal}</td>
            </tr>
            <tr key={"6n"} className="flex justify-between">
              <td className="w-8/12">Shipping</td>
              <td className="w-3/12">Flat rate</td>
            </tr>
            <tr key={"7n"} className="flex justify-between">
              <td className="w-8/12">Total</td>
              <td className="w-3/12">${subTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RightSection;
