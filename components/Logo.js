import React from "react";
import { IoSettingsSharp } from "react-icons/io5";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="p-1 bg-[#616BF4] rounded-lg">
        <IoSettingsSharp size={24} className="text-white" />
      </div>
      <h3 className="font-bold text-[18px] tracking-tighter">ZinTools</h3>
    </div>
  );
}
