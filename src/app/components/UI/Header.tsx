"use client";
import React from "react";
import Navbar from "./Navbar";
import CartButton from "./CartButton";
import Image from "next/image";
import SliderText from "./SliderText";

const Header = () => {
  return (
    <>
      <div className="w-full absolute z-10 flex flex-row justify-between py-6 px-9 items-center">
        <Image
          src="/static/images/home/site-logo-white-free-img.png"
          width={140}
          height={52}
          alt="logo"
        />
        <div className="flex flex-row space-x-8 items-center">
          <Navbar />
          <CartButton />
        </div>
      </div>
    </>
  );
};

export default Header;
