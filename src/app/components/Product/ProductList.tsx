'use client'
import React from "react";
import ProductCard from "../UI/ProductCard";

const ProductList = (props: any) => {
  const array =
    props.data && props.data.length > 0 ? props.data : [1, 2, 3, 4, 5];
  return (
    <>
      <h2
        className={`${
          props.productListType ? "text-center" : "text-start"
        } uppercase font-barlow-condensed text-[42px] mb-8`}
      >
        {props.title}
      </h2>
      <div className="w-full flex flex-row flex-wrap">
        {array.map((_item: any, idx: any) => (
          <div className="w-full sm:w-1/4 px-2 py-2" key={idx}>
            {/* <ProductCard /> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
