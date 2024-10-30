import React, { useEffect, useState, useRef } from "react";
import header from "@/globalData/header.json";
import Link from "next/link";
import { gsap } from "gsap";
import Headroom from "react-headroom";

// ICONS
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");

    gsap.set(links, { opacity: 0, y: -20 });
    gsap.fromTo(
      links,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <Headroom id="header">
      <div className="w-full min-h-[10vh] max-h-[10vh] font-quicksand bg-gray-100 z-50 p-5 text-center flex md:justify-center justify-end items-center shadow-md">
        <div className="hidden md:flex gap-8">
          {header.navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="hover:underline nav-link"
              style={{ color: "#555555", fontWeight: "400" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-4xl text-[#555555]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {isOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 left-0 w-full bg-gray-100 shadow-md md:hidden"
          >
            <div className="flex flex-col items-center gap-4 py-4">
              {header.navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className="hover:underline nav-link"
                  onClick={() => setIsOpen(false)}
                  style={{ color: "#555555", fontWeight: "400" }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-4">
                <FaFacebookSquare className="text-4xl text-[#555555]" />
                <IoIosMail className="text-4xl text-[#555555]" />
                <FaSquarePhone className="text-4xl text-[#555555]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </Headroom>
  );
}
