import React from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="flex bg-[#f2f2f2] items-center rounded-[24px] px-5 py-1 md:w-[550px]">
      <input
        type="text"
        placeholder={`Search for Movies, TV Shows, Themes & Cast`}
        className="flex-1 py-2 pr-2 bg-transparent outline-none"
      />
      <span className="text-[#e6e6e6] text-[26px] font-[200]">|</span>
      <button className="pl-2 md:pl-5" type="button ">
        <IoSearch size={24} />
      </button>
    </div>
  );
}
