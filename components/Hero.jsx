import { working, Image } from "@/externals/imports";
import React from "react";
import GetStartedButton from "./homeComponents/GetStartedButton";


const Hero = () => {
  return (
    <div className="flex w-full flex-col-reverse lg:flex-row py-6 lg:px-24 px-10 items-center justify-evenly gap-10">
      <div className="flex flex-col justify-center px-16 gap-6">
        <span className="text-7xl font-bold ">
          More than just shorter links
        </span>
        <span className="text-lg text-gray-700 ">
          Build your brand&apos;s recognition and get detailed insights on how your
          links are performing
        </span>
        <GetStartedButton text="Get Started" />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={working}
          width={1000}
          height={1000}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default Hero;
