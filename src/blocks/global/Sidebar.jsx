import React, { useEffect } from "react";
import Link from "next/link";
import sidebar from "@/globalData/sidebar.json";
import { gsap } from "gsap";

// ICONS
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";

export default function Sidebar() {
  useEffect(() => {
    const sidebarMain = document.querySelector("#sidebar");
    const links = document.querySelectorAll("#sidebar-links");

    const tl = gsap.timeline();
    tl.fromTo(
      sidebarMain,
      {
        opacity: 0,
        x: 300,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
    tl.fromTo(
      links,
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      id="sidebar"
      className="sidebar-contact fixed z-40 right-6 p-8 gap-6 flex-col logo-blue-color rounded-xl hidden xl:flex sidebar-contact-shadow"
    >
      <div className="flex flex-col gap-8 justify-center">
        <Link href="https://www.facebook.com/profile.php?id=100057877560719">
          <FaFacebookSquare className="sidebar-icon" />
        </Link>
        <Link href="mailto:wojplot@wp.pl">
          <IoIosMail className="sidebar-icon" />
        </Link>
        <Link href="tel:+480000000000">
          <FaSquarePhone className="sidebar-icon" />
        </Link>
      </div>
    </div>
  );
}
