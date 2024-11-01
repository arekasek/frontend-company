import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import dynamic from "next/dynamic";

gsap.registerPlugin(ScrollTrigger);

const PauseBlock = ({ texts, image }) => {
  const textRefs = useRef([]);
  const headingRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const items = textRefs.current;
    const heading = headingRef.current;

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 100%",
      end: "bottom 50%",
      scrub: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 100%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    tl.fromTo(
      items,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      }
    );

    tl.fromTo(heading, { scale: 0.2 }, { scale: 1.2, ease: "power3.out" }, 0);

    return () => {
      scrollTriggerInstance.kill();
      gsap.killTweensOf(items);
      gsap.killTweensOf(heading);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-stretch justify-center w-full h-fit -z-0 text-white Absans-Regular font-medium flex-col-reverse xl:flex-row bg-[#555555]"
    >
      <div className="xl:w-[50%] w-[100%] sm:p-12 text-about-container flex-grow">
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 h-full text-grid-container"
          style={{ padding: "0" }}
        >
          {texts.map((item, index) => (
            <li
              key={index}
              ref={(el) => (textRefs.current[index] = el)}
              className={`sm:text-lg text-medium xl:flex-row flex flex-col items-center gap-4 mb-6 transform transition-transform hover:scale-105 duration-300`}
            >
              <div
                className="w-[40px] h-[40px] flex-shrink-0 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(/image.png)`,
                }}
              ></div>
              <span className="text-about sm:text-lg text-base 2xl:text-left">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative w-full xl:w-[50%] h-[50vh] xl:h-auto flex-grow">
        <Image
          src={image.url}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="absolute w-full h-full z-0 filter brightness-50 contrast-50 saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
        <span
          ref={headingRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 text-white text-3xl sm:text-5xl text-center UNCAGE font-light z-10"
        >
          Dlaczego my?
        </span>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(PauseBlock), {
  ssr: false,
});
