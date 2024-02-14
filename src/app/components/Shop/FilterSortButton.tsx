import React from "react";

const FilterSortButton = () => {
  return (
    <select className="block w-full sm:w-1/2 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-black-500">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  );
};

export default FilterSortButton;
