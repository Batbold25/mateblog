import React from "react";
import { Zaal } from "./SvgFile/Zaal";

export const Trending = () => {
  return (
    <div className=" flex justify-center lg:flex lg:justify-center py-25">
      <div className=" flex justify-center lg:flex lg:justify-between  w-3/4 flex-col">
        <h1 className="text-2xl font-bold py-12">Trending</h1>
        <div className=" flex overflow-auto lg:flex gap-5 ">
          <div
            className="flex flex-col justify-end w-10/12 h-[500px] bg-cover p-5 gap-4"
            style={{
              backgroundImage: "url(/Bata.png)",
              borderRadius: "12px",
            }}
          >
            <p className="px-2.5 py-1 rounded-md  text-white text-xs font-medium font-['Work Sans'] leading-tight bg-indigo-500 w-fit">
              Technology
            </p>
            <h2 className="w-[230px] h-[76px] text-white text-lg font-semibold font-['Work Sans'] leading-7">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h2>
          </div>

          <div
            className="flex flex-col justify-end w-10/12  bg-cover p-5 gap-4"
            style={{
              backgroundImage: "url(/Bata.png)",

              borderRadius: "12px",
            }}
          >
            <p className="px-2.5 py-1 rounded-md  text-white text-xs font-medium font-['Work Sans'] leading-tight bg-indigo-500 w-fit">
              Technology
            </p>
            <h2 className="w-[230px] h-[76px] text-white text-lg font-semibold font-['Work Sans'] leading-7">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h2>
          </div>

          <div
            className="flex flex-col justify-end w-10/12 bg-cover p-5 gap-4"
            style={{
              backgroundImage: "url(/Bata.png)",

              borderRadius: "12px",
            }}
          >
            <p className="px-2.5 py-1 rounded-md  text-white text-xs font-medium font-['Work Sans'] leading-tight bg-indigo-500 w-fit">
              Technology
            </p>
            <h2 className="w-[230px] h-[76px] text-white text-lg font-semibold font-['Work Sans'] leading-7">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h2>
          </div>

          <div
            className="flex flex-col justify-end w-10/12 bg-cover p-5 gap-4"
            style={{
              backgroundImage: "url(/Bata.png)",

              borderRadius: "12px",
            }}
          >
            <p className="px-2.5 py-1 rounded-md  text-white text-xs font-medium font-['Work Sans'] leading-tight bg-indigo-500 w-fit">
              Technology
            </p>
            <h2 className="w-[230px] h-[76px] text-white text-lg font-semibold font-['Work Sans'] leading-7">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
