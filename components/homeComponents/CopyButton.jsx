"use client";
import React from "react";
import { Button } from "@/externals/imports";

const CopyButton = ({ result }) => {
  const base = result.value;
  const copylink = (e) => {
    navigator.clipboard.writeText(base);
  };
  return (
    <Button
      onClick={copylink}
      className="bg-button w-fit h-fit rounded-md px-5 py-2 shadow-none hover:shadow-none focus:shadow-none"
    >
      Copy
    </Button>
  );
};

export default CopyButton;
