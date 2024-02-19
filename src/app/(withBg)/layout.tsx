"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/UI/Header";
import SliderText from "../components/UI/SliderText";
import Footer from "../components/UI/Footer";
import { usePathname } from "next/navigation";

const images = [
  "/static/images/home/home-slider1.jpg",
  "/static/images/home/home-slider2-1.jpg",
];

const WithBglayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  console.log('withBgLayout');
  const pathname = usePathname();
  const isHome = pathname.includes("home");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={`w-full inline-flex   ${isHome ? 'h-screen' : `h-96 bg-[url('/static/images/home/home-slider1.jpg')] bg-cover bg-start` }`}>
        {isHome && (
            <Image
              src={images[currentImageIndex]}
              className="absolute inset-0 object-cover"
              layout="fill"
              alt="logo"
            />
        )}
        <div className={`absolute inset-0 ${isHome ? '' : 'h-96'} bg-gradient-to-b from-[#4f4f4f] to-[#272c41] opacity-80 transition-all duration-300`}></div>
        <Header />
        <SliderText isHome={isHome} />
      </div>
      <div className="w-full">{children}</div>
      <Footer />
    </>
  );
};

export default WithBglayout;
