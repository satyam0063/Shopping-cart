"use client";
import ImageGrid from "@/app/components/Home/ImageGrid";
import OfferSection from "@/app/components/Home/OfferSection";
import Quote from "@/app/components/Home/Quote";
import React from "react";

const Home = () => {
  return (
    <>
      <ImageGrid />
      <Quote/>
      <OfferSection/>
    </>
  );
};

export default Home;
