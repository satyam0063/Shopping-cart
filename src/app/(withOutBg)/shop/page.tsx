"use client";
import React, { useEffect } from "react";
import FilterBar from "../../components/Shop/FilterBar";
import ProductCard from "../../components/UI/ProductCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { UseAppSelector } from "@/redux/store";
import { setAllProducts, setCategories } from "@/redux/features/productReducer";

const Shop = () => {
  const dispatch = useDispatch();
  const productsList = UseAppSelector((state) => state.product.products);
  const filterByPrice = UseAppSelector((state) => state.product.filterByPrice);
  const priceRange = UseAppSelector((state) => state.product.priceRange);
  const selectedCategory = UseAppSelector(
    (state) => state.product.selectedCategory
  );

  useEffect(() => {
    const getCategories = async () => {
      try {
        const result: any = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        dispatch(setCategories(result.data));
      } catch (error: any) {
        throw new Error(error.message);
      }
    };
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getProductByCategory = async () => {
      try {
        let productUrl = `https://dummyjson.com/products`;
        if (selectedCategory !== "") {
          productUrl = `https://dummyjson.com/products/category/${selectedCategory}`;
        }
        const result: any = await axios.get(productUrl);
        let productData: any = result.data.products;
        if (filterByPrice) {
          productData = productsList.filter((pl: any) => pl.price >= priceRange.min && pl.price <= priceRange.max);
        }
        dispatch(setAllProducts(productData));
      } catch (error: any) {
        throw new Error(error.message);
      }
    };
    getProductByCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, filterByPrice]);

  return (
    <div className="w-full bg-[#f5f5f5] px-5 py-16">
      <div className="w-full bg-[#ffffff] px-4 py-4 sm:px-20 sm:py-12">
        <div className="uppercase font-barlow-condensed text-6xl text-[#54595f] pb-20 text-center sm:text-start">
          {selectedCategory === '' ? 'Shop' : selectedCategory.replaceAll('-', ' ')}
        </div>
        <FilterBar />
        <div className="w-full flex flex-row flex-wrap">
          {productsList &&
            productsList.map((item: any, idx: any) => (
              <div className="w-full sm:w-1/4 px-2 py-2" key={idx}>
                <ProductCard product={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
