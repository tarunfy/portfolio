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
            start: "top bottom",
            end: "top top",
            toggleActions: "play none resume pause",
            scrub: true,
          },
        })
        .to(container.children[0], {
          opacity: 1,
          rotation: 10,
          top: 260,
          left: 300,
          duration: 2,
          ease: "power4.inOut",
        })
        .to(
          container.children[1],
          {
            opacity: 1,
            rotation: -10,
            top: 360,
            left: 400,
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        )
        .to(
          container.children[2],
          {
            opacity: 1,
            rotation: 0,
            top: 450,
            left: 600,
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        )
        .to(
          container.children[3],
          {
            opacity: 1,
            rotation: -50,
            bottom: 900,
            right: 800,
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        )
        .to(
          container.children[4],
          {
            opacity: 1,
            rotation: 45,
            bottom: 500,
            left: 280,
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        )
        .to(
          container.children[5],
          {
            opacity: 1,
            rotation: -300,
            top: 500,
            right: 380,
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        )
        .to(
          container.children[6],
          {
            opacity: 1,
            rotation: -48,
            top: 300,
            right: 580,
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        )
        .to(
          container.children[7],
          {
            opacity: 1,
            rotation: 48,
            bottom: 440,
            right: 620,
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        )
        .to(
          container.children[8],
          {
            opacity: 1,
            rotation: 18,
            top: 240,
            right: 420,
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        )
        .to(
          container.children[9],
          {
            opacity: 1,
            rotation: 18,
            top: 140,
            right: 620,
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
        )
        .to(
          container.children[10],
          {
            opacity: 1,
            bottom: 40,
            duration: 2,
            ease: "power4.inOut",
          },
          0.4
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
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute xl:top-[-110vh] xl:left-[-400px] opacity-0 rotate-[270deg]"
      />
      <img
        src={tailwind}
        alt="tech"
        id="tailwind-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute top-[-60vh] left-[-350px] opacity-0 rotate-[210deg]"
      />
      <img
        src={js}
        alt="tech"
        id="js-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute top-[60vh] right-[-110vw] opacity-0 rotate-[175deg]"
      />
      <img
        src={firebase}
        alt="tech"
        id="firebase-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute right-[-40px] bottom-[100px] opacity-0 rotate-[286deg]"
      />
      <img
        src={figma}
        alt="tech"
        id="figma-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute left-[-40px] bottom-[-100px] opacity-0 rotate-180"
      />
      <img
        src={node}
        alt="tech"
        id="node-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute right-[-40px] top-[-100px] opacity-0 rotate-45"
      />
      <img
        src={mongo}
        alt="tech"
        id="mongo-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute right-[-10px] top-[-20px] opacity-0 rotate-12"
      />
      <img
        src={postman}
        alt="tech"
        id="postman-img"
        className="tech 2xl:h-28 2xl:w-28 xl:w-24 xl:h-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute right-[-20px] bottom-[-60px] opacity-0 rotate-[55deg]"
      />
      <img
        src={mui}
        alt="tech"
        id="next-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute right-[-60px] top-[-200px] opacity-0 rotate-[180deg]"
      />
      <img
        src={git}
        alt="tech"
        id="css-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-12 sm:w-12 vvs:h-9 vvs:w-9 w-8 h-8 absolute  top-[-50px] opacity-0 rotate-[155deg]"
      />

      <h1
        className="2xl:text-9xl xl:text-[7rem] cursor-default absolute  bottom-[-100px] opacity-0 text-center  text-white/60"
        id="tech-title"
      >
        Languages, Frameworks & Tools
      </h1>
    </div>
  );
};

export default TechStack;
