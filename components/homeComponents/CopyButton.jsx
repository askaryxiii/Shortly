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
        setTimeout(() => {
          setCopy(false);
        }, "3000");
      }}
      className={`${
        copy ? "bg-purple" : "bg-button"
      } lg:w-fit w-full h-fit rounded-md px-5 py-2 shadow-none hover:shadow-none focus:shadow-none`}
    >
      {copy ? "Copied!" : "Copy"}
    </Button>
  );
};

export default CopyButton;
