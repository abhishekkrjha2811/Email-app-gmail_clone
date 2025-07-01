import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import { PiDotsNine } from "react-icons/pi";
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setUser } from "../../redux/appSlice";
import { AnimatePresence, motion } from "framer-motion";
import {signOut} from 'firebase/auth';
import {auth} from '../../firebase'

const Navbar = () => {
  const [input,setInput]=useState("");
  const [toggle,setToggle]=useState(false);
  const dispatch = useDispatch();
  const {user} = useSelector(store=>store.appSlice);

  const signOutHandler =()=>{
    signOut(auth).then(()=>{
      dispatch(setUser(null));
    }).catch((err)=>{
      console.log(err);
      
    })
  }
  useEffect(()=>{
    dispatch(setSearchText(input))
  },[input, dispatch]);

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
      <div className="md:block hidden w-[50%] mr-10">
        <div className="flex items-center px-2 py-3 rounded-full bg-blue-100">
          <IoIosSearch size={"24px"} className="text-gray-500"/>
          <input
            type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
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
            <Avatar onClick={()=>setToggle(!toggle)} alt="User" src={user?.photoUrl || "src/assets/userimg.png"} />
            <AnimatePresence>
              {
                toggle && (
                  <motion.div 
                  initial={{opacity:0,scale:0.0}}
                  animate={{opacity:1,scale:1.1}}
                  exit={{opacity:0,scale:0.8}}
                  transition={{duration:0.2}}
                  className='absolute right-2 top-16 z-20 shadow-lg bg-white rounded-md'
                  >
                    <p onClick={signOutHandler} className="p-2 underline cursor-pointer">LogOut</p>
                  </motion.div>
                )
              }
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
