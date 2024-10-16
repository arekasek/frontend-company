import React from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const PauseBlock = ({ texts, image }) => {
  useEffect(() => {
    const items = document.querySelectorAll("#text-firma");
    const text = document.querySelectorAll("#heading-firma");
    gsap.fromTo(
      items,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        duration: 5,
        stagger: 1,
        x: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#text-firma-cont",
          start: "top 100%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      text,
      {
        scale: 0.2,
      },
      {
        scale: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#text-firma-cont",
          start: "top 100%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      id="text-firma-cont"
      className="relative flex items-stretch justify-center w-full h-fit -z-0 text-white Absans-Regular font-medium flex-col-reverse xl:flex-row bg-gradient-to-r from-[#969696ab] via-[#646464b4] to-[#5a5a5a00]"
    >
      <div className="xl:w-[50%] w-[100%] sm:p-12 text-about-container flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 h-full text-grid-container">
          {texts.map((item, index) => (
            <li
              id="text-firma"
              key={index}
              className={`sm:text-lg text-base xl:flex-row flex flex-col items-center gap-4 mb-6 transform transition-transform hover:scale-105 duration-300`}
            >
              <div
                className="w-[40px] h-[40px] flex-shrink-0 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(/image.png)`,
                }}
              ></div>
              <span className="text-about 2xl:text-left">{item.text}</span>
            </li>
          ))}
        </div>
      </div>

      <div className="relative w-full xl:w-[50%] h-[50vh] xl:h-auto flex-grow">
        <div
          className="absolute w-full h-full bg-cover bg-center z-0 filter brightness-50 contrast-50 saturate-50"
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
        </div>
        <span
          id="heading-firma"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 text-white text-3xl sm:text-5xl text-center UNCAGE font-light z-10"
        >
          Dlaczego my?
        </span>
      </div>
    </div>
  );
};

export default PauseBlock;
