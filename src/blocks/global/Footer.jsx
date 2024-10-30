import React from "react";
import footer from "@/globalData/footer.json";
import Link from "next/link";

export default function Footer({ icon }) {
  return (
    <div className="w-full bg-[#292929]">
      <div className="flex-wrap flex flex-row gap-4 z-10 p-4 justify-between md:justify-evenly items-center top-0 text-left Absans-Regular">
        {footer.bottomNavLinks.map((categoryItem, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="font-bold text-[#6d6d6d] text-sm md:text-sm">
              {categoryItem.category}
            </div>
            {categoryItem.links.map((linkItem, linkIndex) => (
              <div key={linkIndex}>
                <Link
                  className="text-[#6d6d6d] text-xs hover:underline text-left"
                  href={linkItem.link}
                >
                  {linkItem.label}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
