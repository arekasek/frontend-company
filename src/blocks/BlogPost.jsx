import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import gsap from "gsap";
import { useEffect } from "react";
const TwoColumn = ({ heading, text, images, direction }) => {
  useEffect(() => {
    const heading = document.querySelectorAll("#heading-main");
    const text = document.querySelectorAll("#text-main");
    const tl = gsap.timeline();
    tl.fromTo(
      heading,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    );
    tl.fromTo(
      text,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-[90vh] -z-0">
      <Carousel
        controls={false}
        indicators={true}
        interval={8000}
        className="w-full"
        slides={direction === "left" ? 2 : 1}
      >
        {images.map((item, index) => (
          <Carousel.Item key={index} className="relative w-full h-[90vh]">
            <div
              className="absolute top-0 left-0 w-[100vw] h-full bg-cover bg-center z-0 filter brightness-50 contrast-50 saturate-50 bg-opacity-40"
              style={{ backgroundImage: `url(${item.image.url})` }}
              alt={item.image.alt}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center UNCAGE-Bold">
        <div className="sm:w-[50vw] w-[80vw] text-center h-fit text-white flex flex-col items-center gap-3">
          <h1
            id="heading-main"
            className="xl:text-7xl font-extrabold lg:text-5xl md:text-2xl text-[7vw]"
          >
            {heading}
          </h1>
          <p
            id="text-main"
            className="sm:text-xl text-sm sm:w-3/5 w-full Absans-Regular font-medium"
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwoColumn;
