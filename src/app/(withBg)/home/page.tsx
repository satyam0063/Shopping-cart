"use client";
import ImageGrid from "@/app/components/Home/ImageGrid";
import OfferSection from "@/app/components/Home/OfferSection";
import Quote from "@/app/components/Home/Quote";
import ProductCard from "@/app/components/UI/ProductCard";
import React from "react";

const Home = () => {
  return (
    <>
      <ImageGrid />
      <Quote/>
      <OfferSection/>
      <ProductCard/>
    </>
  );
};

export default Home;
