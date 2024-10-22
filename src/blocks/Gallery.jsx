import React, { useEffect, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = ({
  heading,
  text,
  image,
  images,
  direction = "left",
  color,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const galleryElement = document.querySelector(".gallery-container");
    const imagesElement = document.querySelectorAll(".gallery-image");

    gsap.fromTo(
      galleryElement,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: galleryElement,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      imagesElement,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: galleryElement,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-[100dvh] w-full bg-gray-200 flex items-center justify-center p-8 sm:p-16 gallery-container">
      <div className="flex sm:flex-row flex-col items-stretch justify-center text-white font-normal text-xl w-full gap-4 h-full">
        <div className="relative">
          {direction === "left" && (
            <div
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="sm:h-[80vh] h-[30vh] sm:w-[25vw] w-full flex-grow flex justify-center items-center text-justify filter brightness-50 contrast-50 saturate-50 shadow-main-categories"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
            </div>
          )}
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 UNCAGE font-bold text-center text-3xl">
            {heading}
          </h1>
        </div>
        <div className="h-[80vh] sm:w-[75vw] w-full flex sm:flex-row flex-col gap-4">
          {images.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`gallery-image flex justify-center items-center text-justify h-full transition-all duration-700 ease-in-out shadow-main-categories ${
                activeIndex === index ? "w-full flex-grow" : "sm:w-1/3"
              }`}
              style={{
                backgroundImage: `url(${item.image.url})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              {activeIndex === index ? (
                <div className="h-full w-full bg-black opacity-10"></div>
              ) : null}
            </div>
          ))}
        </div>

        {direction === "right" && (
          <div
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-full w-[25vw] flex-grow flex justify-center items-center text-justify"
          >
            <h1>{heading}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
