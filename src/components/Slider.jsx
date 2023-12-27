import React from "react";
import { LeftIcon } from "./SvgFile/LeftIcon";
import { RigthIcon } from "./SvgFile/RigthIcon";

export const Slider = () => {
  return (
    <div className=" hidden lg:w-screen h-1/4 lg:flex items-center flex-col gap-3">
      <div
        className="  relative "
        style={{
          backgroundImage: `url("/Anai.png")`,
          width: "60%",
          height: "600px",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <img src="/Anai.png" alt="" /> */}
        <div className=" w-[598px]  flex flex-col gap-6 p-10 absolute bg-slate-50 rounded bottom-2.5 left-2.5">
          <div>
            <p className="bg-[#4B6BFB] py-1 px-2 w-fit rounded text-neutral-50 mb-4">
              Technology
            </p>
            <h1 className=" w-[518px] text-gray-900 text-4xl font-semibold font-['Work Sans'] leading-10">
              Grid system for better Design User Interface
            </h1>
          </div>

          <p className=" text-gray-400 font-['Work_Sans']">August 20, 2022</p>
        </div>
      </div>
      <div className=" flex flex-row w-[59%] justify-end">
        <button className=" border w-10 h-10 rounded-md flex justify-center items-center border-black mr-2.5">
          <LeftIcon />
        </button>
        <button className="border w-10 h-10 rounded-md  flex justify-center items-center border-black">
          <RigthIcon />
        </button>
      </div>
    </div>
  );
};
