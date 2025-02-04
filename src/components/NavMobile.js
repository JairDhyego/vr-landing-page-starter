/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { IoClose } from "react-icons/io5";

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className=" lg:hidden bg-[#251f3f] w-full h-full">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="text-3x1 absolute left-4 top-6 cursor-pointer"
      />

      <ul className="flex flex-col items-center h-full justify-center space-y-8 font-secondary">
        <li className="text-lg">
          <a href="">Home</a>
        </li>
        <li className="text-lg">
          <a href="">Company</a>
        </li>
        <li className="text-lg">
          <a href="">Features</a>
        </li>
        <li className=" btn">
          <a href="">Sign up</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
