"use client";
import React from "react";
import Navbar from "./Navbar";
import CartButton from "./CartButton";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const asPath = pathname.split("/");
  return (
    <>
      <div className="w-full absolute z-10 flex flex-row justify-between py-6 px-9 items-center">
        <Image
          src={
            ["shop", "product", "cart", "checkout", "successful"].includes(
              asPath[1]
            )
              ? "/static/images/home/site-logo-black-free-img.png"
              : "/static/images/home/site-logo-white-free-img.png"
          }
          width={140}
          height={52}
          alt="logo"
        />
        <div className="flex flex-row items-center">
          <Navbar
            updateColor={[
              "shop",
              "product",
              "cart",
              "checkout",
              "successful",
            ].includes(asPath[1])}
          />
          <CartButton
            updateColor={[
              "shop",
              "product",
              "cart",
              "checkout",
              "successful",
            ].includes(asPath[1])}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
