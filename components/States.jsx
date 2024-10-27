import React from "react";
import Stepper from "./homeComponents/Stepper";

const States = () => {
  return (
    <div className="pt-16 flex flex-col items-center gap-5">
      <div className="flex flex-col items-center text-center gap-4 w-2/3">
        <span className="text-4xl font-bold">Advanced Statistics</span>
        <span className="text-lg text-gray-600">
          track how your links are performing across the web with our advanced
          statistics dashboard
        </span>
      </div>
      <Stepper />
    </div>
  );
};

export default States;
