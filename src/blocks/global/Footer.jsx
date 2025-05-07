import React from "react";
import globalData from "@/globalData/globalData";
import Link from "next/link";

export default function Footer({ icon }) {
  return (
    <div className="w-full bg-[#4b4b4b]">
      <div className="flex-wrap flex flex-col gap-4 z-10 p-4 top-0 text-left Absans-Regular">
        {globalData.bottomNavLinks.map((categoryItem, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="font-bold text-[#6d6d6d] text-sm md:text-sm flex flex-col sm:flex-row gap-4 items-center justify-center">
              {categoryItem.category}
              {categoryItem.links.map((linkItem, linkIndex) => (
                <span
                  key={linkIndex}
                  className="text-[#6d6d6d] text-xs hover:underline text-left flex"
                >
                  {linkItem.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
