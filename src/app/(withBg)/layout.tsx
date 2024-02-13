import React from "react";
import Image from "next/image";
import Header from "../components/UI/Header";

const WithBglayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="w-full inline-flex h-screen">
        <Image
          src="/static/images/home/home-slider1.jpg"
          layout="fill"
          alt="logo"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4f4f4f] to-[#272c41] opacity-80 transition-all duration-300"></div>
        <Header />
      </div>
      <div className="w-full inline-flex">{children}</div>
    </>
  );
};

export default WithBglayout;
