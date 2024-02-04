"use client";
import React from "react";
import { LuMoon } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function DarkLightMode() {
  const { setTheme, theme } = useTheme();
  console.log("Theme: ", theme);
  const onChangeMode = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <>
      {theme === "light" ? (
        <button
          onClick={onChangeMode}
          className="bg-[#DEDEDE] w-[48px] h-[48px] rounded-full flex  justify-center items-center"
        >
          <LuMoon size={20} />
        </button>
      ) : (
        <button
          onClick={onChangeMode}
          className="bg-[#2E2E2E] w-[48px] h-[48px] rounded-full flex  justify-center items-center text-white"
        >
          <FiSun size={20} />
        </button>
      )}
    </>
  );
}
