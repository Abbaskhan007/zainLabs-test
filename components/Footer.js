import { footerBottomRow, footerData } from "@/utils/data";
import React from "react";
import { FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";
import { LuMoon } from "react-icons/lu";
import DarkLightMode from "./DarkLightMode";
import FooterLogo from "./FooterLogo";

export default function Footer() {
  return (
    <footer className="bg-[#f1f3f4] dark:bg-black dark:black px-10  text-gray-800">
      <div className="flex items-center py-8 space-x-8 dark:text-dark-custom-gray">
        <span className="font-medium dark:text-white">Follow us</span>
        <FaYoutube size={22} />
        <FaTwitter size={22} />
        <FaFacebookF size={20} />
      </div>
      <hr className="" />
      <div className="grid grid-cols-1 gap-8 py-8 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3">
        {footerData.map((item, index) => (
          <div key={index}>
            <h3 className="font-medium text-black dark:text-white mb-7">{item.name}</h3>
            <ul className="space-y-4 text-custom-gray">
              {item.values.map(value => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr />
      <div className="flex items-center justify-between py-8">
        <div className="flex items-center space-x-6">
          <FooterLogo />
          <div className="flex-wrap flex-1 hidden space-x-6 md:flex">
            {footerBottomRow.map(item => (
              <span className="text-[14px] text-custom-gray " key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <DarkLightMode />
      </div>

      <div className="flex flex-wrap pb-10 md:hidden">
        {footerBottomRow.map(item => (
          <span className="text-[14px] text-custom-gray mr-6 mb-2" key={item}>
            {item}
          </span>
        ))}
      </div>
    </footer>
  );
}
