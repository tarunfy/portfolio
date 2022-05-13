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
          },
        })
        .from("#techstack-title", {
          bottom: "-40px",
          opacity: 0,
          ease: "power4.inOut",
          duration: 1.4,
        });
    });
  });

  return (
    <div
      id="tech-stack"
      className="h-[calc(100vh_+_20rem)] w-full  relative overflow-hidden"
    >
      <img
        src={react}
        alt="tech"
        id="react-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24 lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:top-[260px] 2xl:left-[300px]  1xl:top-[240px] 1xl:left-[300px] 1/2xl:top-[220px] 1/2xl:left-[300px]   xl:top-[260px] xl:left-[300px] lg:top-[200px] lg:left-[290px] md:top-[200px] md:left-[200px] sm:top-[300px] sm:left-[180px] vvs:top-[300px] vvs:left-[120px] top-[340px] left-[60px]  opacity-1 rotate-[10deg]"
      />
      <img
        src={tailwind}
        alt="tech"
        id="tailwind-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:top-[460px] 2xl:left-[400px] 1xl:top-[400px] 1xl:left-[350px] 1/2xl:top-[400px] 1/2xl:left-[360px] xl:top-[420px] xl:left-[360px] lg:top-[360px] lg:left-[320px] md:top-[340px] md:left-[230px] sm:top-[440px] sm:left-[100px] vvs:top-[440px] vvs:left-[40px] top-[490px] left-[40px] opacity-1 rotate-[-10deg]"
      />
      <img
        src={js}
        alt="tech"
        id="js-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:top-[420px] 2xl:right-[750px] 1xl:top-[400px] 1xl:right-[750px] 1/2xl:top-[270px] 1/2xl:right-[680px] xl:top-[510px] xl:right-[650px] lg:top-[410px] lg:right-[450px] md:top-[450px] md:right-[350px] sm:top-[450px] sm:right-[350px] vvs:top-[490px] vvs:right-[150px] top-[430px] right-[150px] opacity-1 rotate-[4deg]"
      />
      <img
        src={firebase}
        alt="tech"
        id="firebase-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:right-[880px] 2xl:bottom-[950px] 1xl:right-[690px] 1xl:bottom-[850px] 1/2xl:right-[680px] 1/2xl:bottom-[950px] xl:right-[680px] xl:bottom-[950px] lg:right-[480px] lg:bottom-[860px] md:right-[340px] md:bottom-[820px] sm:right-[340px] sm:bottom-[820px] vvs:right-[100px] vvs:bottom-[700px] right-[100px] bottom-[710px] opacity-1 rotate-[-50deg]"
      />
      <img
        src={figma}
        alt="tech"
        id="figma-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:left-[280px] 2xl:bottom-[540px] 1xl:left-[290px] 1xl:bottom-[480px] 1/2xl:left-[280px] 1/2xl:bottom-[450px] xl:left-[280px] xl:bottom-[480px] lg:left-[280px] lg:bottom-[420px] md:left-[240px] md:bottom-[420px] sm:left-[140px] sm:bottom-[420px] vvs:left-[40px] vvs:bottom-[400px] left-[40px] bottom-[400px] opacity-1 rotate-45"
      />
      <img
        src={node}
        alt="tech"
        id="node-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:right-[380px] 2xl:top-[550px] 1xl:right-[390px] 1xl:top-[580px] 1/2xl:right-[380px] 1/2xl:top-[600px] xl:right-[380px] xl:top-[600px] lg:right-[320px] lg:top-[550px] md:right-[220px] md:top-[600px] sm:right-[250px] sm:top-[600px] vvs:right-[50px] vvs:top-[600px] right-[50px] top-[550px] opacity-1 rotate-[-300deg]"
      />
      <img
        src={mongo}
        alt="tech"
        id="mongo-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:right-[620px] 2xl:top-[350px]  xl:right-[520px] xl:top-[350px] lg:right-[400px] lg:top-[250px] md:right-[280px] md:top-[300px] sm:right-[280px] sm:top-[300px] vvs:right-[80px] vvs:top-[200px] right-[80px] top-[220px] opacity-1 rotate-[-48deg]"
      />
      <img
        src={postman}
        alt="tech"
        id="postman-img"
        className="tech 2xl:h-28 2xl:w-28 xl:w-24 xl:h-24  lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:right-[770px] 2xl:bottom-[480px] xl:right-[670px] xl:bottom-[400px] lg:right-[480px] lg:bottom-[340px] md:right-[560px] md:bottom-[530px] sm:right-[220px] sm:bottom-[530px] vvs:right-[130px] vvs:bottom-[390px] right-[130px] bottom-[390px] opacity-1 rotate-[48deg]"
      />
      <img
        src={mui}
        alt="tech"
        id="next-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:right-[420px] 2xl:top-[240px] xl:right-[420px] xl:top-[240px] lg:right-[320px] lg:top-[360px] md:right-[250px] md:top-[400px] sm:right-[250px] sm:top-[380px] vvs:right-[55px] vvs:top-[300px] right-[40px] top-[420px] opacity-1 rotate-[18deg]"
      />
      <img
        src={git}
        alt="tech"
        id="css-img"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute  2xl:top-[140px] 2xl:right-[620px] xl:top-[440px] xl:right-[320px] lg:top-[480px] lg:right-[210px] md:top-[480px] md:right-[210px] sm:top-[400px] sm:right-[140px] vvs:top-[220px] vvs:right-[240px] top-[220px] right-[240px] opacity-1 rotate-[18deg]"
      />

      <h1
        className="2xl:text-[8rem] font-Glimer-Outlined font-semibold xl:text-[7rem] lg:text-[6rem] md:text-[5rem] sm:text-[4rem] vvs:text-[3rem] text-[2.5rem] cursor-default absolute text-center sm:bottom-[40px] xl:bottom-[40px] bottom-[100px] opacity-100 leading-normal text-white/60"
        id="techstack-title"
      >
        Languages, Frameworks & Tools
      </h1>
    </div>
  );
};

export default TechStack;
