import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PricingBlock = ({ pricingItems }) => {
  useEffect(() => {
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
          trigger: "#O-FIRMA",
          start: "top 100%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="sm:h-screen h-fit w-full bg-gray-200 flex items-center justify-center">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full h-full p-8 sm:p-16 gap-8 sm:auto-rows-fr"
        id="O-FIRMA"
      >
        {pricingItems.map((item, index) => (
          <div
            key={index}
            className="relative hover:cursor-pointer group pricing-item flex flex-col h-full"
          >
            <a href={item.pageLink.slug} className="h-full flex flex-col">
              <div
                id="company-info"
                className="shadow-main-categories w-full sm:h-full h-[25vh] bg-center z-0 filter brightness-50 contrast-50 saturate-50 group-hover:scale-105 group-hover:brightness-50 group-hover:contrast-100 group-hover:saturate-100 transition-all duration-500 ease-in-out"
                style={{
                  backgroundImage: `url(${item.image.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-white text-center text-2xl Absans-Regular font-bold group-hover:text-3xl transition-all duration-500 ease-in-out">
                  {item.description}
                </span>

                <span className="mt-2 text-white text-center Absans-Regular text-sm font-thin hover:underline">
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
