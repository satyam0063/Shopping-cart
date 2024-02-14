import React from "react";
import {
    ListBulletIcon,
    TableCellsIcon,
  } from "@heroicons/react/24/solid";

const GridListToggleButton = () => {
  return (
    <>
      <button className="px-2 py-1 bg-[#54595f] text-white text-xl rounded ml-2">
        <ListBulletIcon className="h-6 w-6" />
      </button>
      <button className="px-2 py-1 bg-[#54595f] text-white text-xl rounded ml-2">
        <TableCellsIcon className="h-6 w-6" />
      </button>
    </>
  );
};

export default GridListToggleButton;
