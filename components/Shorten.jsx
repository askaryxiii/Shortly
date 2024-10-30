"use client";
import { Button, Input, Link, useState } from "@/externals/imports";
import React from "react";
import { getShortURL } from "./logic/GetShortURL";
import CopyButton from "./homeComponents/CopyButton";

const Shorten = () => {
  const [result, setResult] = useState(null);
  const [value, setValue] = useState(null);
  const [displayedValue, setDisplayedValue] = useState("");
  return (
    <div className="flex flex-col w-3/4 rounded-lg gap-8 justify-center">
      <div
        className={`flex lg:flex-row flex-col w-full bg-purple bg-shorten bg-cover bg-center rounded-lg px-12 py-9 lg:gap-8 gap-3 justify-center items-center`}
      >
        <Input
          type="text"
          onChange={(key) => setValue(key.target.value)}
          placeholder="Shorten a link here"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-none placeholder:text-gray-500 placeholder:opacity-100  "
          labelProps={{
            className: "hidden",
          }}
        />
        <Button
          onClick={() => {
            setResult(getShortURL(value)), setDisplayedValue(value);
          }}
          className="bg-button lg:w-1/5 w-full text-white focus:shadow-none hover:shadow-none shadow-none"
        >
          Shorten it!
        </Button>
      </div>
      {result && (
        <div className="flex lg:flex-row flex-col gap-3 justify-between items-center border-2 px-4 py-2">
          <span className="text-base text-gray-700 h-6 line-clamp-1 w-full">
            {displayedValue}
          </span>
          <div className="flex lg:flex-row w-full flex-col gap-3 items-center">
            <Link
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium w-full text-button"
            >
              {result}
            </Link>
            <CopyButton result={result} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Shorten;
