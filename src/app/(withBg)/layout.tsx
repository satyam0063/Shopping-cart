'use client'
import React, {useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/UI/Header";
import SliderText from "../components/UI/SliderText";
import Footer from "../components/UI/Footer";

const images = [
  '/static/images/home/home-slider1.jpg',
  '/static/images/home/home-slider2-1.jpg'
];

const WithBglayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
      <div className="w-full inline-flex h-screen">
        <Image
          src={images[currentImageIndex]}
          className="absolute inset-0 object-cover"
          layout="fill"
          alt="logo"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4f4f4f] to-[#272c41] opacity-80 transition-all duration-300"></div>
        <Header />
        <SliderText />
      </div>
      <div className="w-full">{children}</div>
      <Footer />
    </>
  );
};

export default WithBglayout;
