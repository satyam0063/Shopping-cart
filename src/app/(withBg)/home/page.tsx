"use client";
import ImageGrid from "@/app/components/Home/ImageGrid";
import OfferSection from "@/app/components/Home/OfferSection";
import ProductList from "@/app/components/Home/ProductList";
import Quote from "@/app/components/Home/Quote";
import TrackingBox from "@/app/components/UI/TrackingBox";
import React from "react";

const Home = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <ImageGrid />
      <Quote />
      <OfferSection />
      <div className="max-w-[1200px] mx-auto mt-20">
        <h2 className="text-center uppercase font-barlow-condensed text-[42px] mb-8">
          Featured Products
        </h2>
        <ProductList />
      </div>
      <TrackingBox />
    </div>
  );
};

export default Home;
