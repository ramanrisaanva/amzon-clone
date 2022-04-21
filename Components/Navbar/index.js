import React from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function index() {
  return (
    <div className="flex bg-black  w-full justify-between text-center">
      <ul className="flex py-4 items-center text-base text-white text-center w-3/4">
        <li className="w-15">
          <img src="logo.png" alt="" />{" "}
        </li>
        <li className="ml-4 ">Select Your Address</li>
        <li className="ml-4 flex bg-white items-center rounded-lg h-4 w-2/5 justify-between">
          <input type="text" />{" "}
          <div className="flex rounded-tr-lg rounded-br-lg w-9 justify-center"  style={{ background: "#f90" }}>
          <BiSearch
          className="h-4  "
            color="#111"
           
            size={"1.5rem"}
          /></div>
        </li>
        <li className="ml-4">Customer Service</li>
      </ul>
      <ul className="flex p-4  text-white">
        <li className="flex"><MdOutlineAddShoppingCart color="white" size={"2rem"}/>Cart</li>
      </ul>
    </div>
  );
}
