import ProductUpload from "@/app/components/Admin/ProductUpload";
import ViewProducts from "@/app/components/Admin/ViewProducts";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap">
      <div className="w-full sm:w-1/2 px-2 sm:px-4">
        <ProductUpload />
      </div>
      <div className="w-full sm:w-1/2 px-2 sm:px-0 pr-0 sm:pr-4 h-auto sm:h-[600px] sm:overflow-y-auto">
        <ViewProducts />
      </div>
    </div>
  );
};

export default page;
