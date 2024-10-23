import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const Show = ({ image, images, text, heading }) => {
  const [activeImage, setActiveImage] = useState(image);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const imageRef = useRef(null);

  const placeholderUrl = "https://via.placeholder.com/600x400?text=No+Image";

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [activeImage]);

  const handleImageClick = (item) => {
    setActiveImage(item.image);
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <>
      <div className="w-full min-h-[90dvh] h-fit flex flex-col xl:flex-row p-8 sm:p-12 gap-4 sm:gap-12">
        <div className="relative w-full xl:w-[25dvw] h-auto xl:h-full">
          <div
            className="absolute inset-0 z-0 bg-[#55555521] filter brightness-50 contrast-50 saturate-50 bg-opacity-15 "
            style={{
              backgroundImage: `url(${image.url || placeholderUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-400 to-black opacity-85"></div>
          </div>

          <div className="relative z-0 h-full flex flex-col justify-between p-6 sm:p-12 Absans-Regular text-white">
            <span
              id="heading-main"
              className="md:text-5xl lg:text-5xl text-3xl UNCAGE-Bold"
            >
              {heading}
              <hr className="border-4" />
            </span>
            <p className="text-justify text-base sm:text-xl">{text}</p>
            <div className="w-full flex items-center justify-center -z-10">
              <button className="bg-[#292929] hover:bg-black hover:w-[80%] transition-all duration-500 w-[100%] p-3 -z-10">
                Sprawdź termin
              </button>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[75dvw] h-auto xl:h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-4">
          {images.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer h-40 xl:h-full w-full hover:scale-105 transition-all duration-300 photos-shadow"
              style={{
                backgroundImage: `url(${item.image.url || placeholderUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.9) contrast(1.1) sepia(0.1)",
              }}
              onClick={() => handleImageClick(item)}
            ></div>
          ))}
        </div>
      </div>

      {/* Okno pełnoekranowe */}
      {isFullScreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-30"
          onClick={handleCloseFullScreen}
          style={{
            backdropFilter: "blur(5px)",
          }}
        >
          <img
            src={activeImage.url || placeholderUrl}
            alt="Fullscreen"
            className="max-w-[100dvw] max-h-[100dvh]"
            style={{ filter: "brightness(0.9) contrast(1.1) sepia(0.1)" }}
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={handleCloseFullScreen}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default Show;
