'use client'
import OfferSection from "@/app/components/Home/OfferSection";
import Image from "next/image";
import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import TrackingBox from "@/app/components/UI/TrackingBox";

const AboutUs = () => {
  return (
    <div className="py-16">
      <div className="w-full px-4 sm:px-20 flex flex-col sm:flex-row">
        <div className="relative w-full md:w-1/2 items-start">
          <Image
            src="/static/images/home/couple-model.png"
            sizes="100vh"
            width={420}
            height={549}
            alt="models"
          />
        </div>
        <div className="w-full md:w-1/2 py-8 sm:py-0">
          <div className="flex flex-col items-center sm:flex-row mb-8">
            <Image
              src="/static/images/home/trends-free-img.png"
              sizes="120px"
              width={120}
              height={120}
              alt="models"
            />
            <div className="pl-1 sm:pl-10">
              <div className="text-center sm:text-start font-barlow-condensed text-4xl pb-4">
                Latest Trends For All
              </div>
              <div className="text-center sm:text-start pr-0 sm:pr-24 text-[#54595f]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center sm:flex-row">
            <Image
              src="/static/images/home/discount-free-img.png"
              sizes="120px"
              width={120}
              height={120}
              alt="models"
            />
            <div className="pl-1 sm:pl-10">
              <div className="text-center sm:text-start font-barlow-condensed text-4xl pb-4">
                Sale On Latest Fashion
              </div>
              <div className="text-center sm:text-start pr-0 sm:pr-24 text-[#54595f]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </div>
            </div>
          </div>
        </div>
      </div>
      <OfferSection />
      <div className="w-full py-10 px-4 sm:px-20">
        <div className="text-center text-5xl font-barlow-condensed uppercase pb-6">
          THEY LOVE US!!!
        </div>
        <div className="text-center text-2xl font-barlow-condensed text-[#54595f] pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="grid grid-cols-3 gap-14">
          {[1, 2, 3, 4, 5, 6].map((nbr: any) => (
            <div
              key={`test-${nbr}`}
              className={`bg-[url('/static/images/home/testimonial${nbr}.jpg')] bg-cover bg-start h-48 p-3 flex flex-col-reverse relative rounded-xl`}
            >
              <div
                className={`absolute inset-0 h-48 bg-gradient-to-b from-[#fefefe] to-[#fefefe] opacity-80 transition-all duration-300 hover:opacity-90`}
              ></div>
              <div className="flex flex-row z-10">
                <button className="px-4 py-4 text-white bg-[#54595f] rounded-md hover:bg-black">
                  <PlayIcon className="h-6 w-6" />
                </button>
                <div className="flex flex-col pl-4">
                  <div className="text-xl font-barlow-condensed font-medium">
                    Stella Jones
                  </div>
                  <div className="text-md text-[#54595f]">Super Model</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TrackingBox />
    </div>
  );
};

export default AboutUs;
