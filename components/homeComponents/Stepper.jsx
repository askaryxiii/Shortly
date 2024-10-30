import React from "react";
import {
  BsSpeedometer2,
  HiOutlinePaintBrush,
  PiGraphLight,
} from "@/externals/imports";

const Stepper = () => {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
        </div>
        <div className="flex flex-col gap-3 p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Brand Recognition</p>
            <p className="flex items-center justify-center w-16 h-16 font-bold rounded-full text-deep-purple-accent-400 bg-purple">
              <PiGraphLight className="text-button w-10 h-10" />
            </p>
          </div>
          <p className="text-sm text-gray-600">
            Boost your brand recognition with each click. Generic links don&apos;t
            mean a thing. Branded links help instil confidence in your content.
            Detailed Records
          </p>
        </div>
        <div className="flex flex-col gap-3 p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Detailed Records</p>
            <p className="flex items-center justify-center w-16 h-16 font-bold rounded-full text-deep-purple-accent-400 bg-purple">
              <BsSpeedometer2 className="text-button w-10 h-10" />
            </p>
          </div>
          <p className="text-sm text-gray-600">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
            Fully Customizable
          </p>
        </div>
        <div className="flex flex-col gap-3 p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Fully Customizable</p>
            <p className="flex items-center justify-center w-16 h-16 font-bold rounded-full text-deep-purple-accent-400 bg-purple">
              <HiOutlinePaintBrush className="text-button w-10 h-10" />
            </p>
          </div>
          <p className="text-sm text-gray-600">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
