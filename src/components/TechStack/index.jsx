import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import react from "../../assets/images/react.svg";
import next from "../../assets/images/next.svg";
import tailwind from "../../assets/images/tailwind.svg";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useEffect(() => {
    const containerr = document.getElementById("tech-stack");

    gsap.delayedCall(1, () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: containerr,
            start: "top bottom",
            end: "top top",
            scroller: "#main-container",
            toggleActions: "play none resume pause",
            scrub: true,
          },
        })
        .fromTo(
          containerr.children[1],
          {
            opacity: 0,
            rotation: 270,
            y: -100,
            x: -10,
          },

          {
            opacity: 1,
            rotation: 0,
            duration: 1,
            y: 300,
            x: 300,
            ease: "power3.inOut",
          }
        )
        .fromTo(
          containerr.children[2],
          {
            opacity: 0,
            rotation: 180,
            y: -80,
            x: 0,
          },

          {
            opacity: 1,
            rotation: 0,
            duration: 1,
            y: 400,
            x: 400,
            ease: "power3.inOut",
          },
          0.2
        );
    });
  });

  return (
    <div
      id="tech-stack"
      data-scroll-section
      className="h-screen w-full bg-[#420fe7] relative"
    >
      <div className="absolute top-0 left-0 opacity-10 text-center bottom-0 right-0 flex justify-center items-center">
        <h1
          className="text-[8rem] leading-[8rem] cursor-default text-white"
          id="tech-title"
        >
          Languages, Frameworks & Tools
        </h1>
      </div>
      <img
        src={react}
        alt="tech"
        id="react-img"
        className="absolute h-28 w-28"
      />
      <img
        src={tailwind}
        alt="tech"
        id="tailwind-img"
        className="absolute h-28 w-28"
      />
      <img src={next} alt="tech" id="next-img" className="absolute h-28 w-28" />
    </div>
  );
};

export default TechStack;
