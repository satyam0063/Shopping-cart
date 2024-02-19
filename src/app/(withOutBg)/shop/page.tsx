"use client";
import React, { useEffect } from "react";
import FilterBar from "../../components/Shop/FilterBar";
import ProductCard from "../../components/UI/ProductCard";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { UseAppSelector } from "@/redux/store";
import { setAllProducts } from "@/redux/features/productReducer";

const Shop = () => {
  const dispatch = useDispatch();
  const productsList = UseAppSelector((state) => state.product.items);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const result: any =  await axios.get("https://dummyjson.com/products");
        dispatch(setAllProducts(result.data.products));
      } catch (error: any) {
        console.log('resdt', error);
        throw new Error(error.message);
      }
    };
    getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full bg-[#f5f5f5] px-5 py-16">
      <div className="w-full bg-[#ffffff] px-4 py-4 sm:px-20 sm:py-12">
        <div className="uppercase font-barlow-condensed text-6xl text-[#54595f] pb-20 text-center sm:text-start">
          Shop
        </div>
        <FilterBar />
        <div className="w-full flex flex-row flex-wrap">
          {productsList && productsList.map((item: any, idx: any) => (
            <div className="w-full sm:w-1/4 px-2 py-2" key={idx}>
              <ProductCard product={item}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
