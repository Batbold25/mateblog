import React from "react";
import { MetaIcon } from "./SvgFile/MetaIcon";
import { SearchIcon } from "./SvgFile/SearchIcon";
import { MoreIcon } from "./SvgFile/MoreIcon";

export const Navbar = () => {
  return (
    <div className="w-screen h-1/4 p-5 lg:w-screen flex justify-center ">
      <div className=" w-full flex justify-between lg:w-10/12 h-9 lg:flex lg:gap-28 lg:justify-center">
        <MetaIcon />
        <div className="hidden lg:flex gap-5 w-2/6 justify-center items-center font-semibold text-neutral-500 leading-6 ">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className=" hidden lg:block bg-gray-200 px-4 py-1 lg:flex items-center gap-3 rounded  ">
          <input type="text" placeholder="Search" className=" lg:bg-gray-200" />
          <SearchIcon />
        </div>
        <div className="block lg:hidden">
          <MoreIcon />
        </div>
      </div>
    </div>
  );
};
