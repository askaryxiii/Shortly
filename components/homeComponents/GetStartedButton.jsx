import React from "react";
import { Button } from "@/externals/imports";

const GetStartedButton = ({ text }) => {
  return (
    <Button className="bg-button rounded-full w-fit focus:shadow-none hover:shadow-none shadow-none">
      {text}
    </Button>
  );
};

export default GetStartedButton;
