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
import css from "../../assets/images/css.svg";
import html from "../../assets/images/html.svg";
import sass from "../../assets/images/sass.svg";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useEffect(() => {
    const container = document.getElementById("tech-stack");

    gsap.delayedCall(1, () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            start: "+=50px bottom",
            end: "center top",
            scroller: "#main-container",
            toggleActions: "play none resume pause",
            scrub: true,
          },
        })
        .fromTo(
          container.children[0],
          {
            opacity: 0,
            rotation: -270,
            y: -100,
            x: -10,
          },

          {
            opacity: 1,
            rotation: 0,
            duration: 2.2,
            y: 300,
            x: 300,
            ease: "power4.inOut",
          }
        )
        .fromTo(
          container.children[1],
          {
            opacity: 0,
            rotation: -180,
            y: "80vh",
            x: "-20vw",
          },

          {
            opacity: 1,
            rotation: 4,
            duration: 2,
            y: 400,
            x: 400,
            ease: "power4.inOut",
          },
          0.4
        )
        .fromTo(
          container.children[2],
          {
            opacity: 0,
            rotation: 180,
            y: "110vh",
            x: "120vw",
          },

          {
            opacity: 1,
            rotation: -22,
            duration: 2,
            y: 150,
            x: 700,
            ease: "power4.inOut",
          },
          0.4
        )
        .fromTo(
          container.children[3],
          {
            opacity: 0,
            rotation: -290,
            y: "-110vh",
            x: "120vw",
          },

          {
            opacity: 1,
            rotation: -10,
            duration: 2,
            y: 0,
            x: "77vw",
            ease: "power4.inOut",
          },
          0.4
        )
        .fromTo(
          container.children[4],
          {
            opacity: 0,
            rotation: 300,
            y: "130vh",
            x: "70vw",
          },

          {
            opacity: 1,
            rotation: -13,
            duration: 2,
            y: 90,
            x: 200,
            ease: "power4.inOut",
          },
          0.4
        )
        .fromTo(
          container.children[5],
          {
            opacity: 0,
            rotation: -90,
            y: "100vh",
            x: "10vw",
          },

          {
            opacity: 1,
            rotation: -18,
            duration: 2,
            y: 10,
            x: "58vw",
            ease: "power4.inOut",
          },
          0.4
        )
        .fromTo(
          container.children[6],
          {
            opacity: 0,
            rotation: -360,
            y: "-140vh",
            x: "70vw",
          },

          {
            opacity: 1,
            rotation: 9,
            duration: 2,
            y: -500,
            x: "44vw",
            ease: "power4.inOut",
          },
          0.4
        )
        .fromTo(
          container.children[7],
          {
            opacity: 0,
            rotation: 260,
            y: "-125vh",
            x: "30vw",
            scale: 1,
          },

          {
            opacity: 1,
            rotation: -12,
            duration: 2,
            scale: 0.9,
            y: -650,
            x: "27vw",
            ease: "power4.inOut",
          },
          0.4
        )
        .fromTo(
          container.children[8],
          {
            opacity: 0,
            rotation: -234,
            y: "125vh",
            x: "70vw",
            scale: 1,
          },

          {
            opacity: 1,
            rotation: 10,
            duration: 2,
            scale: 0.9,
            y: -750,
            x: "63vw",
            ease: "power4.inOut",
          },
          0.4
        )
        .fromTo(
          container.children[9],
          {
            opacity: 0,
            rotation: 174,
            y: "104vh",
            x: "8vw",
            scale: 1,
          },

          {
            opacity: 1,
            rotation: -40,
            duration: 2,
            scale: 0.7,
            y: -800,
            x: "12vw",
            ease: "power4.inOut",
          },
          0.2
        )
        .fromTo(
          container.children[10],
          {
            opacity: 0,
            rotation: 174,
            y: "110vh",
            x: "-120vw",
            scale: 1,
          },

          {
            opacity: 1,
            rotation: 20,
            duration: 2,
            scale: 0.7,
            y: -600,
            x: "80vw",
            ease: "power4.inOut",
          },
          0.2
        )
        .fromTo(
          container.children[11],
          {
            opacity: 0,
            rotation: -294,
            y: "110vh",
            x: "-120vw",
            scale: 1,
          },

          {
            opacity: 1,
            rotation: 20,
            duration: 2,
            scale: 0.9,
            y: -600,
            x: "40vw",
            ease: "power4.inOut",
          },
          0.2
        )
        .fromTo(
          container.children[12],
          {
            opacity: 0,
            y: 20,
          },

          {
            opacity: 1,
            duration: 2,
            y: -130,
            ease: "power4.inOut",
          }
        );
    });
  });

  return (
    <div
      id="tech-stack"
      data-scroll-section
      className="h-[calc(100vh_+_20rem)] w-full bg-[#420fe7] relative"
    >
      <img src={react} alt="tech" id="react-img" className=" h-28 w-28" />
      <img src={tailwind} alt="tech" id="tailwind-img" className=" h-28 w-28" />
      <img src={js} alt="tech" id="js-img" className="h-28 w-28" />
      <img src={firebase} alt="tech" id="firebase-img" className="h-28 w-28" />
      <img src={figma} alt="tech" id="figma-img" className="h-28 w-28" />
      <img src={node} alt="tech" id="node-img" className="h-28 w-28" />
      <img src={mongo} alt="tech" id="mongo-img" className="h-28 w-28" />
      <img src={postman} alt="tech" id="postman-img" className="h-28 w-28" />
      <img src={mui} alt="tech" id="next-img" className="h-28 w-28" />
      <img src={css} alt="tech" id="css-img" className="h-28 w-28" />
      <img src={html} alt="tech" id="html-img" className="h-28 w-28" />
      <img src={sass} alt="tech" id="sass-img" className="h-28 w-28" />

      <h1
        className="text-9xl absolute text-center bottom-0  text-white/60"
        id="tech-title"
      >
        Languages, Frameworks & Tools
      </h1>
    </div>
  );
};

export default TechStack;
