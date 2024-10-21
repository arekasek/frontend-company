import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const Show = ({ image, images }) => {
  const [activeImage, setActiveImage] = useState(image);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [activeImage]);

  return (
    <>
      <div className="w-full h-[90dvh] flex flex-col sm:flex-row p-12 gap-4">
        <div
          ref={imageRef}
          className="h-full sm:w-[50%] w-full sm:rounded-l-xl rounded-xl blog-post-shadow"
          style={{
            backgroundImage: `url(${activeImage.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="h-full sm:w-[50%] w-full flex flex-col justify-center">
          <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-full">
            {images.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer h-full w-full blog-post-shadow hover:scale-105 transition-all duration-300 "
                style={{
                  backgroundImage: `url(${item.image.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => setActiveImage(item.image)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
