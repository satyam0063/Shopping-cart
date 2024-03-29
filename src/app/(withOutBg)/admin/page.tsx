import ProductUpload from "@/app/components/Admin/ProductUpload";
import ViewProducts from "@/app/components/Admin/ViewProducts";
import React from "react";

const page = () => {
  return (
    <div className="flex ">
      <div className="w-1/2 px-4">
        <ProductUpload />
      </div>
      <div className="w-1/2 pr-4">
        <ViewProducts />
      </div>
    </div>
  );
};

export default page;
