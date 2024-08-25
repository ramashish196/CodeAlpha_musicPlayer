import React from "react";
import { FiSearch } from "react-icons/fi";
import Search from "./Search";

const Navbar = () => {
  return (
    <>
      <div className=" bg-emerald-300 w-full h-24 border-b-2 shadow-md">
        <div className="flex justify-center items-center mt-4">
          <Search />
        </div>
      </div>
    </>
  );
};
export default Navbar;
