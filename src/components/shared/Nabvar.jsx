import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const Nabvar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu className="text-2xl text-gray-600" />
          </div>
          <img className="w-8" src="https://images.app.goo.gl/YMD4hbi7kQRrY8uk7" />


        </div>
      </div>
    </div>
  );
};

export default Nabvar;
