import React from "react";

const TopRightSection = () => {
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};

export default TopRightSection;
