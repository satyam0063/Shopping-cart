import Image from "next/image";
import React from "react";

const TrackingBox = () => {
  return (
    <div className="">
      <div className="max-w-[940px] mx-auto pb-10">
        <div className="flex w-full flex-wrap sm:flex-nowrap">
          <div className=" w-full sm:w-1/3 p-7">
            <div className="bg-[#fff] text-center p-5 rounded-xl shadow-custom flex flex-col sm:flex-row items-center">
              <div>
                <Image
                  src="/static/images/delivery-box.svg"
                  alt={""}
                  width={40}
                  height={40}
                />
              </div>
              <div className="mx-auto">Express Delivery</div>
            </div>
          </div>
          <div className=" w-full sm:w-1/3 p-7">
            <div className="bg-[#fff] text-center p-5 rounded-xl shadow-custom flex flex-col sm:flex-row items-center">
              <div>
                <Image
                  src="/static/images/location-box.svg"
                  alt={""}
                  width={40}
                  height={40}
                />
              </div>
              <div className="mx-auto">Order Tracking</div>
            </div>
          </div>
          <div className=" w-full sm:w-1/3 p-7">
            <div className="bg-[#fff] text-center p-5 rounded-xl shadow-custom flex flex-col sm:flex-row items-center">
              <div>
                <Image
                  src="/static/images/discount-percentage.svg"
                  alt={""}
                  width={40}
                  height={40}
                />
              </div>
              <div className="mx-auto">Regular Discounts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingBox;
