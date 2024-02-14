import React from "react";
import Image from "next/image";
import Link from "next/link";

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

const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row sm:flex-wrap px-20 py-20 bg-black text-white">
        <div className="w-full sm:w-1/4 flex flex-col px-5">
          <Image
            src="/static/images/home/site-logo-white-free-img.png"
            width={140}
            height={52}
            alt="logo"
          />
          <div className="pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </div>
        </div>
        <div className="w-full sm:w-1/4 flex flex-col px-5 py-2 sm:py-0">
          <div className="text-2xl uppercase pb-4 font-barlow-condensed">
            SHOP COLLECTIONS
          </div>
          <ul className=" text-lg">
            <li>
              <Link href="/shop/50">Men’s Jeans</Link>
            </li>
            <li>
              <Link href="/shop/50">Women’s Tops</Link>
            </li>
            <li>
              <Link href="/shop/50">Hoodies</Link>
            </li>
            <li>
              <Link href="/shop/50">Jackets</Link>
            </li>
            <li>
              <Link href="/shop/50">Shoes</Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/4 flex flex-col px-5 py-3 sm:py-0">
          <div className="text-2xl uppercase pb-4 font-barlow-condensed">
            LATEST COLLECTION
          </div>
          <ul className=" text-lg">
            <li>
              <Link href="/shop/50">Bags</Link>
            </li>
            <li>
              <Link href="/shop/50">Accessories</Link>
            </li>
            <li>
              <Link href="/shop/50">Shorts</Link>
            </li>
            <li>
              <Link href="/shop/50">Wallets</Link>
            </li>
            <li>
              <Link href="/shop/50">Sunglasses</Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/4 flex flex-col px-5 py-3 sm:py-0">
          <div className="text-2xl uppercase pb-4 font-barlow-condensed">
            POPULAR COLLECTION
          </div>
          <ul className=" text-lg">
            <li>
              <Link href="/shop/50">Women’s Shorts</Link>
            </li>
            <li>
              <Link href="/shop/50">Belts</Link>
            </li>
            <li>
              <Link href="/shop/50">Watches</Link>
            </li>
            <li>
              <Link href="/shop/50">Women’s Jeans</Link>
            </li>
            <li>
              <Link href="/shop/50">Formal Shoes</Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/4 flex flex-col px-5 py-3 sm:py-0">
          <div className="text-2xl uppercase pb-4 font-barlow-condensed">
            QUICK LINKS
          </div>
          <ul className=" text-lg">
            {navArray &&
              navArray.map((nav: any, i: any) => (
                <li key={`nav_${i}`}>
                  <Link href={nav.url}>{nav.urlName}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between px-20 py-10 bg-white text-black">
        <div className="py-1 sm:py-0">Copyright © 2024 Brandstore Pro</div>
        <ul className="py-1 sm:py-0 flex flex-row">
          <li className="px-1">
            <Link href='/'>Facebook</Link>
          </li>
          <li className="px-1">
            <Link href='/'>Twitter</Link>
          </li>
          <li className="px-1">
            <Link href='/'>Youtube</Link>
          </li>
          <li className="px-1">
            <Link href='/'>Insta</Link>
          </li>
        </ul>
        <div className="py-1 sm:py-0">Powered by Brandstore Pro</div>
      </div>
    </>
  );
};

export default Footer;
