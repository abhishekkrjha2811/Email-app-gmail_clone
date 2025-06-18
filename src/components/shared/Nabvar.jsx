import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import { PiDotsNine } from "react-icons/pi";
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={"28px"}/>
          </div>
          <img className="w-8" src="src/assets/email_logo.jpg" alt="Email Logo"/>
          <h1 className="text-2xl text-gray-500 font-medium">Email</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center px-2 py-3 rounded-full bg-blue-100">
          <IoIosSearch size={"24px"} className="text-gray-500"/>
          <input
            type="text"
            placeholder="Search Mail"
            className="w-full px-1 bg-transparent outline-none rounded-full"
          />
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <BiSupport size={"28px"} className="text-gray-500"/>
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdSettings size={"28px"} className="text-gray-500"/>
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNine size={"28px"} className="text-gray-500"/>
          </div>
          <div className="cursor-pointer" >
            <Avatar alt="Abhishek Kumar Jha" src="src/assets/userimg.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
