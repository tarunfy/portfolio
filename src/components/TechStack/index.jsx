import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import react from "../../assets/images/react.svg";
import tailwind from "../../assets/images/tailwind.svg";
import firebase from "../../assets/images/firebase.svg";
import mongo from "../../assets/images/mongo.svg";
import postman from "../../assets/images/postman.svg";
import node from "../../assets/images/node.svg";
import figma from "../../assets/images/figma.svg";
import mui from "../../assets/images/mui.svg";
import js from "../../assets/images/js.svg";
import git from "../../assets/images/git.svg";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useEffect(() => {
    const container = document.getElementById("tech-stack");

    gsap.delayedCall(1, () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom top",
            toggleActions: "play none resume pause",
            scrub: true,
            pin: true,
          },
        })
        .from(container.children[0], {
          opacity: 0,
          rotation: 270,
          top: "-110vh",
          left: "-400px",
          duration: 2,
          ease: "power4.inOut",
        })
        .from(
          container.children[1],
          {
            opacity: 0,
            rotation: 210,
            top: "-60vh",
            left: "-350px",
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        )
        .from(
          container.children[2],
          {
            opacity: 0,
            rotation: 175,
            top: "60vh",
            right: "-110vw",
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        )
        .from(
          container.children[3],
          {
            opacity: 0,
            rotation: 286,
            bottom: "100px",
            right: "-40px",
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        )
        .from(
          container.children[4],
          {
            opacity: 0,
            rotation: 180,
            bottom: "-100px",
            left: "-40px",
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        )
        .from(
          container.children[5],
          {
            opacity: 0,
            rotation: 45,
            top: "-100px",
            right: "-40px",
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        )
        .from(
          container.children[6],
          {
            opacity: 0,
            rotation: 12,
            top: "-20px",
            right: "-10px",
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        )
        .from(
          container.children[7],
          {
            opacity: 0,
            rotation: 55,
            bottom: "-60px",
            right: "-20px",
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        )
        .from(
          container.children[8],
          {
            opacity: 0,
            rotation: 180,
            top: "-200px",
            right: "-60px",
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        )
        .from(
          container.children[9],
          {
            opacity: 0,
            rotation: 155,
            top: -50,
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        );
      const tl2 = gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            start: "80% 78%",
            end: "bottom 70%",
            toggleActions: "play none resume pause",
            scrub: true,
          },
        })
        .fromTo(
          "#techstack-title",
          {
            bottom: "-100px",
            opacity: 0,
          },
          {
            bottom: "40px",
            opacity: 1,
            ease: "power4.inOut",
            duration: 1.4,
          }
        );
    });
  });

  return (
    <div
      id="tech-stack"
      className="h-[calc(100vh_+_20rem)] w-full bg-[#420fe7] relative overflow-hidden"
    >
      <img
        src={react}
        alt="tech"
        id="react-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute xl:top-[260px] xl:left-[300px] opacity-1 rotate-[10deg]"
      />
      <img
        src={tailwind}
        alt="tech"
        id="tailwind-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute xl:top-[360px] xl:left-[400px] opacity-1 rotate-[-10deg]"
      />
      <img
        src={js}
        alt="tech"
        id="js-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute xl:top-[420px] xl:right-[750px] opacity-1 rotate-[4deg]"
      />
      <img
        src={firebase}
        alt="tech"
        id="firebase-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute xl:right-[800px] xl:bottom-[900px] opacity-1 rotate-[-50deg]"
      />
      <img
        src={figma}
        alt="tech"
        id="figma-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute xl:left-[280px] xl:bottom-[500px] opacity-1 rotate-45"
      />
      <img
        src={node}
        alt="tech"
        id="node-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute xl:right-[380px] xl:top-[500px] opacity-1 rotate-[-300deg]"
      />
      <img
        src={mongo}
        alt="tech"
        id="mongo-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute xl:right-[580px] xl:top-[300px] opacity-1 rotate-[-48deg]"
      />
      <img
        src={postman}
        alt="tech"
        id="postman-img"
        className="tech 2xl:h-28 2xl:w-28 xl:w-24 xl:h-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute xl:right-[720px] xl:bottom-[440px] opacity-1 rotate-[48deg]"
      />
      <img
        src={mui}
        alt="tech"
        id="next-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute xl:right-[420px] xl:top-[240px] opacity-1 rotate-[18deg]"
      />
      <img
        src={git}
        alt="tech"
        id="css-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute  xl:top-[140px] xl:right-[620px] opacity-1 rotate-[18deg]"
      />

      <h1
        className="2xl:text-9xl xl:text-[7rem] cursor-default absolute text-center  text-white/60"
        id="techstack-title"
      >
        Languages, Frameworks & Tools
      </h1>
    </div>
  );
};

export default TechStack;
