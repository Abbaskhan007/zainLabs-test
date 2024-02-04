import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-3 py-4 space-x-4 shadow-md md:px-8 md:shadow-none">
      <Logo />
      <SearchBar />
      <div className="md:flex items-center space-x-6 text-[14px] hidden">
        <button className="font-medium text-custom-gray dark:text-dark-custom-gray">
          Log in
        </button>
        <button className="px-5 py-2.5 text-white bg-blue-600 rounded-full">
          Sign up
        </button>
      </div>
    </div>
  );
}
