import React from "react";
import GetStartedButton from "./homeComponents/GetStartedButton";

const PreFooter = () => {
  return (
    <div className="bg-boost w-full py-10 bg-purple flex flex-col justify-center items-center gap-8">
      <span className="text-3xl font-bold text-white">
        Boost your links today
      </span>
      <GetStartedButton text="Get Started" />
    </div>
  );
};

export default PreFooter;
