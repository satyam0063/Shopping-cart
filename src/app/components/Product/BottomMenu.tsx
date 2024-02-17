import React from "react";

const BottomMenu = ({array,selectedItem,setSelectedItem}:{array:any,selectedItem:any,setSelectedItem:any}) => {
  
  return (
    <div>
      <ul className="">
        {array.map((item: any, idx: number) => (
          <li
            key={idx}
            className="border-t border-[#d5d5d5] cursor-pointer p-[0.5em] relative before:hover:absolute before:hover:top-auto before:hover:bottom-0 before:hover:right-0 before:hover:h-full before:hover:w-1 before:hover:bg-[#54595f]"
            onClick={()=>setSelectedItem(idx)}
          >
            <span className="text-[16px] font-bold text-[#515151] ">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomMenu;
