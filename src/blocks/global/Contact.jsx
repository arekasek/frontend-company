import React from "react";
import dynamic from "next/dynamic";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { GiSpikedFence } from "react-icons/gi";
import { GoClockFill } from "react-icons/go";

const DynamicMapComponent = dynamic(() => import("../MapComponent"), {
  ssr: false,
});

export default function Contact() {
  return (
    <div
      id="Kontakt"
      className="w-full h-auto bg-[#444444c9] flex md:flex-row flex-col-reverse bg-[#555555] text-white md:p-12 p-8 gap-8"
    >
      <div className="md:w-[45%] w-full h-[200px] md:h-auto">
        <DynamicMapComponent />
      </div>
      <div className="md:w-[50%] w-full flex flex-col justify-center">
        <div className="w-[90%]">
          <h3 className="md:text-5xl lg:text-7xl text-3xl UNCAGE-Bold">
            Kontakt
          </h3>
          <hr className="border-4 mb-4 mt-1 border-white" />
          <div className="text-base md:text-lg Absans-Regular space-y-4">
            <ContactDetail
              icon={<GiSpikedFence className="md:w-10 md:h-10 flex-shrink-0" />}
              label="Woj-Płot Ogrodzenia Balustrady Kowalstwo - Wojciech Asmus"
            />
            <ContactDetail
              icon={
                <FaPhoneSquareAlt className="md:w-10 sm:h-10 flex-shrink-0" />
              }
              label="Telefon: 609 693 204"
            />
            <ContactDetail
              icon={
                <MdMarkEmailRead className="md:w-10 md:h-10 flex-shrink-0" />
              }
              label="Email: wojplot@wp.pl"
            />
            <ContactDetail
              icon={<MdHomeWork className="md:w-10 md:h-10 flex-shrink-0" />}
              label="Adres: Dworcowa 8, 84-300 Lębork"
            />
            <ContactDetail
              icon={<GoClockFill className="md:w-10 md:h-10 flex-shrink-0" />}
              label="Poniedziałek - Piątek | 8:00 - 16:00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactDetail = ({ icon, label }) => (
  <div className="flex gap-8 flex-row items-center">
    {icon}
    <span>
      <strong>{label}</strong>
    </span>
  </div>
);
