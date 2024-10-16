import React from "react";

const Show = ({ image, images }) => {
  return (
    <div className="grid grid-cols-5 grid-rows-3 gap-4 w-full h-[90vh]">
      {/* Główny obrazek */}
      <div
        className="col-span-2 row-span-2"
        style={{
          backgroundImage: `url(${image.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Uzupełnienie pozostałych divów z obrazami */}
      <div className="row-span-2 col-start-3">
        {images[0] && (
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url(${images[0].image.url})`, // Użyj images[0].image.url
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        )}
      </div>
      <div className="row-span-2 col-start-4">
        {images[1] && (
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url(${images[1].image.url})`, // Użyj images[1].image.url
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        )}
      </div>
      <div className="row-span-4 col-start-5">
        {images[2] && (
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url(${images[2].image.url})`, // Użyj images[2].image.url
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        )}
      </div>
      <div className="row-span-2 row-start-3">
        {images[3] && (
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url(${images[3].image.url})`, // Użyj images[3].image.url
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        )}
      </div>
      <div className="col-span-3 row-span-2 row-start-3">
        {images[4] && (
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url(${images[4].image.url})`, // Użyj images[4].image.url
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Show;
