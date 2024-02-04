import Image from "next/image";
import React from "react";
import { FaRegBookmark } from "react-icons/fa6";

export default function Card({ item }) {
  return (
    <div className="cursor-pointer border border-[#ebebeb] p-[24px] rounded-[12px] relative group hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-300 ease-in-out h-full">
      <Image width={65} height={65} alt={item.title} src={item.image} />
      <h3 className="card-heading ">{item.title}</h3>
      <p className="card-description line-clamp-2">{item.description}</p>
      <button className="absolute hidden transition-all duration-300 ease-in-out right-4 top-4 group-hover:block">
        <FaRegBookmark strokeWidth={8} size={18} />
      </button>
    </div>
  );
}
