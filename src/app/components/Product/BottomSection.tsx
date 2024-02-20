"use client";
import React, { useState } from "react";
import BottomMenu from "./BottomMenu";
import Description from "./Description";
import AddInfo from "./AddInfo";
import Reviews from "./Reviews";

const BottomSection = (props: any) => {
  const array = [
    {
      name: "Description",
      component: <Description description={props.product.description} />,
    },
    { name: "Additional Information", component: <AddInfo /> },
    { name: "Reviews", component: <Reviews product={props.product}/> },
  ];
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <div>
      <div className="flex">
        <div className="w-1/5 border-r border-[#d5d5d5]">
          <BottomMenu
            array={array}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
        <div className="w-4/5 pl-10">{array[selectedItem].component}</div>
      </div>
    </div>
  );
};

export default BottomSection;
