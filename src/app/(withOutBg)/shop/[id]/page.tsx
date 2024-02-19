"use client";
import BottomSection from "@/app/components/Product/BottomSection";
import ProductList from "@/app/components/Product/ProductList";
import TopRightSection from "@/app/components/Product/TopRightSection";
import ImageViewer from "@/app/components/UI/ImageViewer";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import axios from "axios";

interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

const Product = ({ params }: { params: { id: number } }) => {
  const [currentProduct, setCurrentProduct] = useState<null | Product>();

  useEffect(() => {
    const getProductById = async (id: number) => {
      try {
        const result =  await axios.get(`https://dummyjson.com/products/${id}`);
        console.log('result', result);
        setCurrentProduct(result.data);
      } catch (error: any) {
        console.log('resdt', error);
        throw new Error(error.message);
      }
    };
    getProductById(params.id);
  }, [params.id]);
  
  return (
    <div className="bg-[#f5f5f5]">
      <div className=" max-w-[1240px] mx-auto px-[20px] py-14">
        <div className="">
          <div className="bg-[#fefefe] py-[50px] px-[70px]">
            <div className="flex flex-wrap md:flex-nowrap justify-between px-9 py-8">
              <div className="w-full sm:w-[50%] relative">
                <span className="text-[#fff] bg-[#54595f] absolute top-[-0.5em] left-[-0.5em]  rounded-full h-[3.5em] w-[3.5em]  leading-[3.2em] text-center px-[2px] text-[1em] font-sans">
                  Sale!
                </span>
                <ImageViewer images={currentProduct ? currentProduct.images : []}/>
              </div>
              <div className="w-full sm:w-[46%] pr-5">
                <TopRightSection product={currentProduct}/>
              </div>
            </div>
            <div className="px-9">
              <BottomSection />
            </div>
            <div className="max-w-[1240px] mx-auto px-9 py-10">
              {/* <ProductList
                title="RELATED PRODUCTS"
                productListType=""
                data={[1, 2, 3]}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
