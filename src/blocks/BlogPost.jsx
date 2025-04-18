import React, { useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import gsap from "gsap";
import Image from "next/image";
import PropTypes from "prop-types";

const TwoColumn = ({ heading, text, images, direction }) => {
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headingRef.current,
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
      textRef.current,
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

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full min-h-[90vh] max-h-[90vh] -z-0 bg-gray-500">
      <Carousel
        controls={false}
        indicators={true}
        interval={8000}
        className="w-full"
        slides={direction === "left" ? 2 : 1}
      >
        {images.map((item, index) => (
          <Carousel.Item
            key={index}
            className="relative w-full min-h-[90vh] max-h-[90vh]"
          >
            <div className="absolute top-0 left-0 w-full h-full z-0 filter brightness-50 contrast-50 saturate-50 bg-opacity-40">
              <Image
                src={item.image.url}
                alt={item.image.alt || `Slide image ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center UNCAGE-Bold">
        <div className="md:w-[50vw] w-[80vw] text-center h-fit text-white flex flex-col items-center gap-3">
          <h1
            ref={headingRef}
            className="xl:text-7xl font-extrabold text-3xl sm:text-4xl"
          >
            {heading}
          </h1>
          <p
            ref={textRef}
            className="xl:text-xl sm:text-base text-sm md:w-3/5 w-full Absans-Regular"
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

TwoColumn.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
  direction: PropTypes.string,
};

export default TwoColumn;
