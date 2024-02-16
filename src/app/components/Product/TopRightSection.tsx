import React from "react";
import ProdQuantity from "../UI/ProdQuantity";
import AddToCartBtn from "../UI/AddToCartBtn";

const TopRightSection = () => {
  return (
    <div>
      <div className="flex mb-[15px]">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Home
              </a>
            </li>
            <li>
              <span className="text-gray-500">&nbsp;/&nbsp;</span>
            </li>
            <li>
              <span className="text-gray-500">Page</span>
            </li>
          </ol>
        </nav>
        <div></div>
      </div>
      <div className="mb-[1em]">
        <del className="text-[#4f4f4f] leading-tight font-bold opacity-60 text-[24px]">
          <span>$</span>
          35.00
        </del>{" "}
        <ins className="text-[#4f4f4f] leading-tight font-bold no-underline text-[24px]">
          <span>$</span>
          32.00
        </ins>
      </div>
      <div className="mb-[1em]">
        <p className="text-[#4f4f4f] leading-normal font-sans text-[17px] tracking-wide">
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris
          in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
          augue. Sed non neque elit sed.
        </p>
      </div>
      <div className="flex border-b border-[#d5d5d5]">
        <div>
          <ProdQuantity />
        </div>
        <div>
          <AddToCartBtn />
        </div>
      </div>
      <div className="text-[15px] text-[#4f4f4f] mt-1 font-sans">
        <span>Category: </span>
        <span className="text-[#54595f] cursor-pointer hover:text-[#000]">Shoes</span>
      </div>
    </div>
  );
};

export default TopRightSection;
