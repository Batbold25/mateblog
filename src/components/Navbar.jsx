import React, { useState } from "react";
import { MetaIcon } from "./SvgFile/MetaIcon";
import { SearchIcon } from "./SvgFile/SearchIcon";
import { MoreIcon } from "./SvgFile/MoreIcon";
import { useContext } from "react";
import { SearchContextValue } from "@/context/SearchContext";
import Link from "next/link";
import { Buenard } from "next/font/google";

export const Navbar = () => {
  const { searchValue, setSearchValue } = useContext(SearchContextValue);
  console.log("search", searchValue);

  const [burger, setBurger] = useState(false);
  const clickedBurger = () => {
    setBurger(!burger);
  };

  return (
    <div className="w-screen h-1/4 p-5 lg:w-screen flex justify-center ">
      <div className=" w-full flex justify-between lg:w-10/12 h-9 lg:flex lg:gap-28 lg:justify-center">
        <MetaIcon />
        <div className="hidden lg:flex gap-5 w-2/6 justify-center items-center font-semibold text-neutral-500 leading-6 ">
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
        <div className=" hidden lg:block bg-gray-200 px-4 py-1 lg:flex items-center gap-3 rounded  ">
          <input
            type="text"
            placeholder="Search"
            className=" lg:bg-gray-200"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <SearchIcon />
        </div>
        <div onClick={clickedBurger} className="block cursor-pointer lg:hidden">
          <MoreIcon />
        </div>
        {burger === true && (
          <div>
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
        )}
      </div>
    </div>
  );
};
