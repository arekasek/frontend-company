import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { GiSpikedFence } from "react-icons/gi";
import { GoClockFill } from "react-icons/go";

export default function Contact() {
  return (
    <div
      id="Kontakt"
      className="w-full h-auto bg-[#444444c9] flex md:flex-row flex-col-reverse bg-[#555555] text-white md:p-12 p-8 gap-8"
    >
      <div className="md:w-[45%] w-full">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.0671595111894!2d17.742053577132527!3d54.53231118532972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fddd408a56dbc9%3A0xc806e81eeff74232!2zV29qLVDFgm90LiBVc8WCdWdpIMWbbHVzYXJza2ll!5e0!3m2!1spl!2spl!4v1730306442732!5m2!1spl!2spl"
          allowFullScreen=""
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="md:w-[50%] w-full flex flex-col justify-center">
        <div className="w-[90%]">
          <h1 className="md:text-5xl lg:text-7xl text-3xl UNCAGE-Bold">
            Kontakt
          </h1>
          <hr className="border-4 mb-4 mt-1 border-white"></hr>
          <div className="text-base md:text-lg Absans-Regular space-y-4">
            <div className="flex gap-8 flex-row items-center">
              <GiSpikedFence className="md:w-10 md:h-10 flex-shrink-0" />
              <span>
                <strong>Woj-Płot</strong> Ogrodzenia Balustrady Kowalstwo -
                Wojciech Asmus
              </span>
            </div>
            <div className="flex gap-8 flex-row items-center">
              <FaPhoneSquareAlt className="md:w-10 sm:h-10 flex-shrink-0" />
              <span>
                <strong>Telefon:</strong> 609 693 204
              </span>
            </div>
            <div className="flex gap-8 flex-row items-center">
              <MdMarkEmailRead className="md:w-10 md:h-10 flex-shrink-0" />
              <span>
                <strong>Email:</strong> wojplot@wp.pl
              </span>
            </div>
            <div className="flex gap-8 flex-row items-center">
              <MdHomeWork className="md:w-10 md:h-10 flex-shrink-0" />
              <span>
                <strong>Adres:</strong> Dworcowa 8, 84-300 Lębork
              </span>
            </div>
            <div className="flex gap-8 flex-row items-center">
              <GoClockFill className="md:w-10 md:h-10 flex-shrink-0" />
              <span>
                <strong>Poniedziałek - Piątek</strong> | 8:00 - 16:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
