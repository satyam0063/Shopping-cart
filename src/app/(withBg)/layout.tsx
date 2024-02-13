import React from "react";
import Header from "../components/UI/Header";

const WithBglayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full">
      <Header />
      {children}
    </div>
  );
};

export default WithBglayout;
