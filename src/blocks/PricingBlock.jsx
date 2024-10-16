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
    <div className="min-h-[90vh] w-full bg-gray-200 flex items-center justify-center">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 opacity-100 text-white Absans-Regular font-normal text-2xl p-8 sm:p-16 gap-8 w-full"
        id="O-FIRMA"
      >
        {pricingItems.map((item, index) => (
          <div
            key={index}
            className="relative hover:cursor-pointer group pricing-item"
          >
            <a href={item.pageLink.slug}>
              <div
                id="company-info"
                className="shadow-main-categories w-full h-[35vh] text-justify bg-center z-0 filter brightness-50 contrast-50 saturate-50 group-hover:scale-105 group-hover:brightness-50 group-hover:contrast-100 group-hover:saturate-100 transition-all duration-500 ease-in-out"
                style={{
                  backgroundImage: `url(${item.image.url})`,
                  backgroundSize: "cover",
                }}
              ></div>

              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 text-white text-center Absans-Regular font-bold group-hover:text-3xl transition-all duration-500 ease-in-out">
                {item.description}
              </span>

              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-10 text-white text-center Absans-Regular text-sm font-thin hover:underline">
                Zobacz więcej
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingBlock;
