"use client";
import React from "react";
import { Button, useState } from "@/externals/imports";

const CopyButton = ({ result }) => {
  const [copy, setCopy] = useState(false);
  const base = result.value;
  const copylink = (e) => {
    navigator.clipboard.writeText(base);
  };
  return (
    <Button
      onClick={() => {
        copylink(), setCopy(true);
      }}
      className={`${
        copy ? "bg-purple" : "bg-button"
      } w-fit h-fit rounded-md px-5 py-2 shadow-none hover:shadow-none focus:shadow-none`}
    >
      {copy ? "Copied!" : "Copy"}
    </Button>
  );
};

export default CopyButton;
