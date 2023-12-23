"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MenuBar from "./MenuBar/MenuBar";

const Header = () => {
  const [open, setopen] = useState(false);
  // console.log(open);

  return (
    <header className="bg-black py-4 px-4">
      <div className="container mx-auto flex justify-between relative overflow-visible">
        <div>
          <h1 className="text-2xl text-red-500 font-extrabold">LOGO</h1>
        </div>
        <div onClick={() => setopen(!open)} className="text-white md:hidden">
          {open ? <CloseIcon></CloseIcon> : <MenuIcon></MenuIcon>}
        </div>
        {/* <MenuBar key={1} setopen={setopen} open={open}></MenuBar> */}
        <nav
          className={`flex flex-col md:flex-row gap-y-3 md:w-auto w-full py-5 md:py-0 md:opacity-100 md:space-x-6 text-center bg-black text-white font-semibold md:static absolute transition-all ease-in duration-300 top-[150%] ${
            open ? "left-[0%] opacity-100 delay-200" : "-left-[120%] opacity-70"
          }`}
        >
          <Link onClick={() => setopen(false)} href="/">
            Home
          </Link>
          <Link onClick={() => setopen(false)} href="/about">
            About
          </Link>
          <Link onClick={() => setopen(false)} href="/shop">
            Shop
          </Link>
          <Link onClick={() => setopen(false)} href="/blog">
            Blog
          </Link>
          <Link onClick={() => setopen(false)} href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
