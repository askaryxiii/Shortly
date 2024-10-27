"use client";
import { Button, Input, Link, Typography, useState } from "@/externals/imports";
import React from "react";
import { getShortURL } from "./logic/GetShortURL";
import CopyButton from "./homeComponents/CopyButton";

const Shorten = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [err, setErr] = useState(true);
  return (
    <div className="w-full flex flex-col bg-gradient-to-b from-transparent to-secondaryBG  items-center">
      <div className="flex flex-col w-3/4 rounded-lg gap-5 justify-center">
        <div
          className={`flex flex-col w-full bg-purple bg-shorten bg-cover bg-center rounded-lg px-12 py-9 gap-2 justify-center`}
        >
          <div className="flex lg:flex-row flex-col w-full gap-8">
            <Input
              type="text"
              onChange={(key) => {
                setValue(key.target.value), setErr(true);
              }}
              placeholder="Shorten a link here"
              className={`!border ${
                err
                  ? "!border-gray-300 placeholder:text-gray-500"
                  : "!border-red-500 placeholder:text-red-500"
              } bg-white text-gray-900 shadow-none placeholder:opacity-100`}
              labelProps={{
                className: "hidden",
              }}
            />
            <Button
              onClick={() =>
                value ? setResult(getShortURL(value)) : setErr(false)
              }
              className="bg-button lg:w-1/5 w-fit text-white focus:shadow-none hover:shadow-none shadow-none"
            >
              Shorten it!
            </Button>
          </div>
          <Typography
            variant="small"
            color="red"
            className={`${
              err ? "hidden" : "flex"
            } mt-2 items-center gap-1 font-medium`}
          >
            Please add a link.
          </Typography>
        </div>

        {result && (
          <div className="flex flex-col w-full lg:flex-row gap-3 justify-between items-center rounded-md bg-white px-6 py-3">
            <span className="text-base text-gray-700">
              {value?.slice(0, 50)}...
            </span>
            <div className="flex gap-6 items-center">
              <Link
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-button"
              >
                {result}
              </Link>
              <CopyButton result={result} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shorten;
