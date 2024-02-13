"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";

const navArray = [
  {
    urlName: "Home",
    url: "/home",
  },
  {
    urlName: "Shop",
    url: "/shop",
  },
  {
    urlName: "Lookbook",
    url: "/lookbook",
  },
  {
    urlName: "About Us",
    url: "/about-us",
  },
  {
    urlName: "Contact Us",
    url: "/contact-us",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ul className="hidden md:flex flex-row justify-between justify-items-center items-center">
        {navArray &&
          navArray.map((nav: any, i: any) => (
            <li key={`nav_${i}`}>
              <Link href={nav.url} className="py-4 px-4 uppercase text-white">
                {nav.urlName}
              </Link>
            </li>
          ))}
      </ul>
      <div className="relative inline-block md:hidden">
        {/* Menu Icon */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="py-1" role="none">
              {navArray &&
                navArray.map((nav: any, i: any) => (
                  <React.Fragment key={`nav_${i}`}>
                    <Link
                      href={nav.url}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      {nav.urlName}
                    </Link>
                  </React.Fragment>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
