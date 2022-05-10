import React, { useEffect } from "react";
import hirely from "../../assets/images/Hirely.svg";
import easyStaff from "../../assets/images/EasyStaff.svg";
import formify from "../../assets/images/Formify.svg";
import sigmaRules from "../../assets/images/SigmaRules.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import github from "../../assets/images/github.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    let containers = document.querySelectorAll(".container");

    containers.forEach((container) => {
      const imgContainer = container.querySelector(".img-container");
      const img = container.querySelector(".img");
      const textContainer = container.querySelector(".text-container");
      const contentLine = textContainer.children[0].children[0];
      const contentP = textContainer.children[1];
      const contentBtn = textContainer.children[2];

      gsap.delayedCall(1, () => {
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              start: "top 65%",
              end: "top top",
              scroller: "#main-container",
              toggleActions: "play none resume pause",
            },
          })
          .set(container, {
            duration: 0,
            visibility: "visible",
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
            0.2
          )
          .from(
            contentLine.firstChild,
            {
              duration: 1,
              y: "54px",
              ease: "power3.out",
            },
            0.5
          )
          .from(
            contentP,
            {
              duration: 1,
              y: 20,
              opacity: 0,
              ease: "power3.out",
            },
            1
          )
          .from(
            contentBtn,
            {
              duration: 1,
              y: 20,
              opacity: 0,
              ease: "power3.out",
            },
            1.2
          );
      });
    });
  });
  return (
    <div
      className="w-full  pb-40 xl:px-44 lg:px-40 sm:pb-0 md:px-32 sm:px-28 vvs:px-12 px-10 bg-[#420fe7]"
      data-scroll-section
      id="projects"
    >
      <h1
        data-scroll
        data-scroll-delay="0.1"
        data-scroll-speed="4"
        className="text-white/70 z-40 vvs:text-[4rem] sm:text-[5.2rem] md:text-[6.4rem] lg:text-[7.5rem] xl:text-[9.2rem] 2xl:text-[10.8rem]  text-[3.5rem] leading-[3.5rem] sm:leading-[5.5rem] md:leading-[6rem] lg:leading-[7rem] xl:leading-[9rem] 2xl:leading-[10rem]  cursor-default"
        id="project-heading"
      >
        Featured Projects
      </h1>
      <div className="space-y-10 z-30">
        <div className="container space-x-4 flex justify-between items-center invisible">
          <div
            data-scroll
            data-scroll-delay="0.1"
            data-scroll-speed="3"
            className="text-container text-white space-y-4 max-w-md"
          >
            <h1 className="hidden-text font-bold text-5xl">
              <div className="content-line m-0 h-[52px] overflow-hidden bg-[#420fe7]">
                <div className="content-line-inner">Hirely</div>
              </div>
            </h1>
            <p className="font-normal text-xl">
              Hirely is a platform where candidates can get hired by the
              recruiters from different upcoming starups.
            </p>
            <div className="btn-row flex justify-start space-x-6 items-center">
              <div className="github-btn">
                <a
                  className="icon "
                  target="_blank"
                  href="https://github.com/tarunfy/Hirely"
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-8 w-8 hover:-translate-y-1 transition duration-200 ease-in-out repo"
                  />
                </a>
              </div>
              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://hirely.vercel.app/"
                >
                  <img
                    src={rightArrow}
                    alt="arrow"
                    className="link h-8 w-8 hover:-rotate-[45deg] transition duration-200 ease-in-out"
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            data-scroll
            data-scroll-delay="0.1"
            data-scroll-speed="3"
            className="w-[680px] h-[560px] relative overflow-hidden img-wrapper"
          >
            <img
              src={hirely}
              alt="project image"
              className="absolute w-full object-cover h-full img"
            />
            <div className="img-container absolute top-0 left-0 bg-[#420fe7] w-full h-full"></div>
          </div>
        </div>

        <div className="container space-x-4 flex justify-between items-center invisible">
          <div
            data-scroll
            data-scroll-delay="0.1"
            data-scroll-speed="3"
            className="w-[680px] h-[560px] relative overflow-hidden img-wrapper"
          >
            <img
              src={formify}
              alt="project image"
              className="absolute w-full object-cover h-full img"
            />
            <div className="img-container absolute top-0 right-0 bg-[#420fe7] w-full h-full"></div>
          </div>

          <div
            data-scroll
            data-scroll-delay="0.1"
            data-scroll-speed="3"
            className="text-container text-white space-y-4 max-w-md"
          >
            <h1 className="hidden-text font-bold text-5xl text-right">
              <div className="content-line m-0 h-[52px] overflow-hidden bg-[#420fe7]">
                <div className="content-line-inner">Formify</div>
              </div>
            </h1>
            <p className="font-normal text-xl text-right">
              The fastest and the easiest way to create forms and collect
              submissions on the internet.
            </p>
            <div className="btn-row flex justify-end space-x-6 items-center">
              <div className="github-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://github.com/tarunfy/formify"
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-8 w-8 hover:-translate-y-1 transition duration-200 ease-in-out repo"
                  />
                </a>
              </div>
              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://formifyy.vercel.app/"
                >
                  <img
                    src={rightArrow}
                    alt="arrow"
                    className="link h-8 w-8 hover:-rotate-[45deg] transition duration-200 ease-in-out"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container space-x-4 flex justify-between items-center invisible">
          <div
            data-scroll
            data-scroll-delay="0.1"
            data-scroll-speed="3"
            className="text-container text-white space-y-4 max-w-md"
          >
            <h1 className="hidden-text font-bold text-5xl">
              <div className="content-line m-0 h-[52px] overflow-hidden bg-[#420fe7]">
                <div className="content-line-inner">Easy Staff</div>
              </div>
            </h1>
            <p className="font-normal text-xl">
              Easy Staff allows you to manage your staff's attendance, salary,
              payments and compliances in few clicks.
            </p>
            <div className="btn-row flex justify-start space-x-6 items-center">
              <div className="github-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://github.com/tarunfy/EasyStaff"
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-8 w-8 hover:-translate-y-1 transition duration-200 ease-in-out repo"
                  />
                </a>
              </div>
              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://tankhava-book.vercel.app/"
                >
                  <img
                    src={rightArrow}
                    alt="arrow"
                    className="link h-8 w-8 hover:-rotate-[45deg] transition duration-200 ease-in-out"
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            data-scroll
            data-scroll-delay="0.1"
            data-scroll-speed="3"
            className="w-[680px] h-[560px] relative overflow-hidden img-wrapper"
          >
            <img
              src={easyStaff}
              alt="project image"
              className="absolute w-full object-cover h-full img"
            />
            <div className="img-container absolute top-0 left-0 bg-[#420fe7] w-full h-full"></div>
          </div>
        </div>

        <div className="container space-x-4 flex justify-between items-center invisible">
          <div
            data-scroll
            data-scroll-delay="0.1"
            data-scroll-speed="3"
            className="w-[680px] h-[560px] relative overflow-hidden img-wrapper"
          >
            <img
              src={sigmaRules}
              alt="project image"
              className="absolute w-full object-cover h-full img"
            />
            <div className="img-container absolute top-0 right-0 bg-[#420fe7] w-full h-full"></div>
          </div>
          <div
            data-scroll
            data-scroll-delay="0.1"
            data-scroll-speed="3"
            className="text-container text-white space-y-4 max-w-md"
          >
            <h1 className="hidden-text font-bold text-5xl text-right">
              <div className="content-line m-0 h-[52px] overflow-hidden bg-[#420fe7]">
                <div className="content-line-inner">Sigma Rules</div>
              </div>
            </h1>
            <p className="font-normal text-xl text-right">
              Sigma Rules is a webapp that allows users to create new{" "}
              <span className="italic">Sigma Rules</span> which can be read by
              everyone globally.
            </p>
            <div className="btn-row flex justify-end space-x-6 items-center">
              <div className="github-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://github.com/tarunfy/Hirely"
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-8 w-8 hover:-translate-y-1 transition duration-200 ease-in-out repo"
                  />
                </a>
              </div>
              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://sigma-rules.netlify.app/"
                >
                  <img
                    src={rightArrow}
                    alt="arrow"
                    className="link h-8 w-8 hover:-rotate-[45deg] transition duration-200 ease-in-out"
                  />
                </a>
              </div>
            </div>
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
