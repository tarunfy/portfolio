import React, { useEffect } from "react";
import hirely from "../../assets/images/Hirely.svg";
import easyStaff from "../../assets/images/EasyStaff.svg";
import formify from "../../assets/images/Formify.svg";
import sigmaRules from "../../assets/images/SigmaRules.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    let containers = document.querySelectorAll(".container");

    containers.forEach((container) => {
      let imgContainer = container.querySelector(".img-container");
      let img = container.querySelector("img");
      let imgWrapper = container.querySelector(".img-wrapper");
      gsap.delayedCall(1, () => {
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              start: "top 60%",
              end: "top top+=100px",
              scroller: "#main-container",
              toggleActions: "play none resume pause",
              markers: true,
            },
          })
          .set(container, {
            duration: 0,
            visibility: "visible",
            ease: "expo.out",
          })
          .to(imgContainer, {
            duration: 1.6,
            width: "0%",
            ease: "expo.out",
          })
          .from(
            img,
            {
              duration: 1.6,
              scale: 1.6,
              ease: "expo.out",
            },
            "=-1.6"
          );
      });
    });
  });
  return (
    <div
      className="w-full px-44 pb-10 bg-[#420fe7]"
      data-scroll-section
      id="projects"
    >
      <h1
        data-scroll
        data-scroll-delay="0.1"
        data-scroll-speed="4"
        className="text-white/70 z-40 text-[9rem] leading-[9rem] cursor-default"
        id="project-heading"
      >
        Featured Projects
      </h1>
      <div className="space-y-10 z-30">
        <div
          className="container flex justify-between items-center"
          data-scroll
          data-scroll-delay="0.1"
          data-scroll-speed="4"
        >
          <div className="text-container">
            <h1>
              <span className="hidden-text">Hirely</span>
            </h1>
          </div>

          <div className="w-[940px] h-[460px] relative overflow-hidden img-wrapper">
            <img
              src={hirely}
              alt="project image"
              className="absolute w-[940px]"
            />
            <div className="img-container absolute top-0 right-0 bg-[#420fe7] w-full h-full"></div>
          </div>
        </div>

        <div
          className="container flex justify-between items-center"
          data-scroll
          data-scroll-delay="0.1"
          data-scroll-speed="4"
        >
          <div className="w-[940px] h-[460px] relative overflow-hidden img-wrapper">
            <img
              src={formify}
              alt="project image"
              className="absolute w-[940px]"
            />
            <div className="img-container absolute top-0 right-0 bg-[#420fe7] w-full h-full"></div>
          </div>

          <div className="text-container">
            <h1>
              <span className="hidden-text">Formify</span>
            </h1>
          </div>
        </div>

        <div
          className="container flex justify-between items-center"
          data-scroll
          data-scroll-delay="0.1"
          data-scroll-speed="4"
        >
          <div className="text-container">
            <h1>
              <span className="hidden-text">Easy Staff</span>
            </h1>
          </div>

          <div className="w-[940px] h-[460px] relative overflow-hidden img-wrapper">
            <img
              src={easyStaff}
              alt="project image"
              className="absolute w-[940px]"
            />
            <div className="img-container absolute top-0 right-0 bg-[#420fe7] w-full h-full"></div>
          </div>
        </div>

        <div
          className="container flex justify-between items-center"
          data-scroll
          data-scroll-delay="0.1"
          data-scroll-speed="4"
        >
          <div className="w-[940px] h-[460px] relative overflow-hidden img-wrapper">
            <img
              src={sigmaRules}
              alt="project image"
              className="absolute w-[940px]"
            />
            <div className="img-container absolute top-0 right-0 bg-[#420fe7] w-full h-full"></div>
          </div>

          <div className="text-container">
            <h1>
              <span className="hidden-text">Sigma Rules</span>
            </h1>
          </div>
        </div>
      </div>
      {/* <span class="lerp-wrap" data-scroll id="hero-title" className="text-8xl">
        <span
          data-scroll
          data-scroll-delay="0.18"
          data-scroll-speed="6"
          className="inline-block"
        >
          F
        </span>
        <span
          data-scroll
          data-scroll-delay="0.14"
          data-scroll-speed="6"
          className="inline-block"
        >
          I
        </span>
        <span
          data-scroll
          data-scroll-delay="0.12"
          data-scroll-speed="6"
          className="inline-block"
        >
          R
        </span>
        <span
          data-scroll
          data-scroll-delay="0.1"
          data-scroll-speed="6"
          className="inline-block"
        >
          S
        </span>
        <span
          data-scroll
          data-scroll-delay="0.08"
          data-scroll-speed="6"
          className="inline-block"
        >
          T
        </span>
      </span> */}
      {/* <div className="transform rotate-6 skew-x-12">
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="20"
          data-scroll-target="#projects"
        >
          <span className="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl bg-green-400 p-5 whitespace-nowrap">
            Social Media — Email Marketing — Digital Advertising
          </span>
        </div>
      </div> */}
      {/* <div className="transform -rotate-6 -skew-x-12 mt-40">
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-20"
          data-scroll-target="#projects"
        >
          <span className="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl bg-green-400 p-5 whitespace-nowrap">
            Web Development - Motion Design - Graphic Design
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
