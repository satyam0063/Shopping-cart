"use client";
import React from "react";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

const ShopLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <div className="w-full pt-28">{children}</div>
      <Footer />
    </>
  );
};

export default ShopLayout;
