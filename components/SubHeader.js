import { subHeaderData } from "@/utils/data";
import React from "react";

export default function SubHeader() {
  return (
    <>
      <div className="items-center hidden px-8 pt-4 pb-4 space-x-10 shadow-md md:flex">
        {subHeaderData.map((item, index) => (
          <button
            className="text-sm font-medium text-custom-gray dark:text-dark-custom-gray "
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
