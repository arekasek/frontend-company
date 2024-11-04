import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const PricingBlock = ({ pricingItems }) => {
  useEffect(() => {
    const isMobile = () => window.innerWidth < 648;

    const animateItems = () => {
      const items = document.querySelectorAll(".pricing-item");
      gsap.fromTo(
        items,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#OFERTA",
            start: "top 100%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
    };

    if (!isMobile()) {
      animateItems();
    }

    const handleResize = () => {
      if (!isMobile()) {
        animateItems();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sm:h-screen h-fit w-full bg-gray-200 flex items-center justify-center">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full h-full p-8 sm:p-16 gap-8 sm:auto-rows-fr"
        id="OFERTA"
      >
        {pricingItems.map((item, index) => (
          <div
            key={index}
            className="relative hover:cursor-pointer group pricing-item flex flex-col h-full"
          >
            <a href={item.pageLink.slug} className="h-full flex flex-col">
              <div className="relative w-full sm:h-full h-[25vh] overflow-hidden group-hover:scale-105 transition-all duration-500 ease-in-out shadow-main-categories">
                <Image
                  src={item.image.url}
                  alt={`Image for ${item.description}`}
                  layout="fill"
                  objectFit="cover"
                  quality={75}
                  loading="eager"
                  className="shadow-main-categories w-full sm:h-full h-[25vh] bg-center z-0 filter brightness-50 contrast-50 saturate-50 group-hover:scale-105 group-hover:brightness-50 group-hover:contrast-100 group-hover:saturate-100 transition-all duration-500 ease-in-out"
                />
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center z-0">
                <span className="text-white text-center text-xl xl:text-3xl Absans-Regular font-bold transition-transform duration-300 ease-in-out transform group-hover:scale-125">
                  {item.description}
                </span>

                <span className="mt-2 text-white text-center Absans-Regular text-xs xl:text-sm font-thin hover:underline">
                  Zobacz więcej
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingBlock;
