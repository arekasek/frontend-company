import React, { useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const Show = React.memo(({ image, images, text, heading }) => {
  const [activeImage, setActiveImage] = useState(image);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const placeholderUrl = "https://via.placeholder.com/600x400?text=No+Image";

  const handleLazyLoad = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.fromTo(
          entry.target,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
        );
        observer.unobserve(entry.target);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleLazyLoad, {
      root: null,
      threshold: 0.1,
    });

    const photos = document.querySelectorAll(".photo-container");
    photos.forEach((photo) => observer.observe(photo));

    return () => observer.disconnect();
  }, [handleLazyLoad]);

  const handleImageClick = (item) => {
    setActiveImage(item.image);
    setIsFullScreen(true);
    setIsImageLoading(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full xl:w-[80dvw] min-h-[90dvh] h-fit flex flex-col p-8 sm:p-12 gap-4 sm:gap-12">
        <div className="relative w-full h-auto xl:h-full">
          <div
            className="absolute inset-0 z-0 bg-[#55555521] filter brightness-50 contrast-50 saturate-50 bg-opacity-15"
            id="image-main"
          >
            <Image
              src={image.url || placeholderUrl}
              fill
              style={{ objectFit: "cover" }}
              quality={70}
              alt="Main Background Image"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-400 to-black opacity-85"></div>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <div className="xl:w-[90%] w-full">
              <div className="relative z-0 h-full flex flex-col justify-between p-6 sm:p-12 Absans-Regular text-white">
                <span
                  id="heading-main"
                  className="md:text-3xl lg:text-4xl 2xl:5xl text-[7vw] UNCAGE-Bold"
                >
                  {heading}
                  <hr className="border-4" />
                </span>
                <p className="text-justify text-sm 2xl:text-lg lg:text-base">
                  {text}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full min-h-screen grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {images.map((item) => (
            <div
              key={item.id}
              className="photo-container cursor-pointer sm:h-[40dvh] h-[20dvh] w-full relative"
              onClick={() => handleImageClick(item)}
              style={{
                filter: "brightness(0.9) contrast(1.1) sepia(0.1)",
              }}
            >
              <Image
                src={item.image.url || placeholderUrl}
                fill
                style={{ objectFit: "cover" }}
                quality={70}
                alt="Gallery Image"
                loading="lazy"
                className="hover:scale-105 transition-transform duration-300 photos-shadow"
              />
            </div>
          ))}
        </div>
      </div>

      {isFullScreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-30"
          onClick={handleCloseFullScreen}
          style={{
            backdropFilter: "blur(5px)",
          }}
        >
          {isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-40">
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          <Image
            src={activeImage.url || placeholderUrl}
            width={800}
            height={600}
            quality={80}
            alt="Fullscreen Image"
            className="max-w-full max-h-full object-contain"
            style={{ filter: "brightness(0.9) contrast(1.1) sepia(0.1)" }}
            onLoadingComplete={() => setIsImageLoading(false)}
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={handleCloseFullScreen}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
});

export default Show;
