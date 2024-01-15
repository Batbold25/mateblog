import React from "react";
import { MateIcon } from "./SvgFile/MateIcon";
import { TwitterIcon } from "./SvgFile/TwitterIcon";
import { InstIcon } from "./SvgFile/InstIcon";
import { LinkedIcon } from "./SvgFile/LinkedIcon";
import Link from "next/link";

export const Fooder = () => {
  return (
    <div className="w-full pt-16 bg-neutral-100 border-gray-200 border-t flex justify-center">
      <div className="w-5/6 flex flex-col items-center gap-5">
        <div className=" flex flex-col  lg:flex  w-full gap-5 lg:flex-row">
          <div className="   lg:flex flex-col gap-6 ">
            <div className=" flex flex-col gap-6">
              <h2 className="text-gray-900 text-lg font-semibold font-['Work Sans'] leading-7">
                About
              </h2>
              <p className="w-[280px] text-zinc-500 text-base font-normal font-['Work Sans'] leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>

            <div>
              <p className="text-gray-900 text-base font-normal font-['Work Sans'] leading-normal">
                Email : info@jstemplate.net
              </p>
              <p className="text-gray-900 text-base font-normal font-['Work Sans'] leading-normal">
                Phone : 880 123 456 789{" "}
              </p>
            </div>
          </div>
          <div className="lg:w-4/6  flex items-center flex-col ">
            <div className=" lg:flex flex-col gap-2 text-zinc-700 text-base font-normal font-['Work Sans'] leading-normal">
              <Link href={"/"}>
                <p>Home</p>
              </Link>

              <Link href={"/blog"}>
                <p>Blog</p>
              </Link>
              <Link href={"/contact"}>
                <p>Contact</p>
              </Link>
            </div>
          </div>
          <div className=" flex justify-center lg:flex gap-5">
            <MateIcon />
            <TwitterIcon />
            <InstIcon />
            <LinkedIcon />
          </div>
        </div>

        <div className=" lg:w-full border-t border-zinc-200 justify-between flex">
          <div className="  lg:w-full flex gap-2 py-8">
            <img src="./Blogo.png" alt="" />
            <div className="mt-1">
              <img src="./Blogss.png" alt="" />
              <h2 className="text-zinc-700 text-base font-normal font-['Work Sans'] leading-normal">
                © All Rights Reserved.
              </h2>
            </div>
          </div>

          <div className=" hidden lg:w-2/5 lg:flex items-center">
            <p className="w-fit  px-2 border-r-2 ">Terms of Use</p>
            <p className="w-fit px-2 border-r-2 ">Privacy Policy</p>
            <p className="w-fit px-2">Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
