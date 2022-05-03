import React, { useState } from "react";
import profilePhoto from "../../assets/images/tarun.jpeg";
import Tooltip from "@mui/material/Tooltip";
import { Fade } from "@mui/material";
import Spline from "@splinetool/react-spline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const phrases = [
  "Hey, click me",
  "do it again",
  "yes go on",
  "don't know why I created this",
  "anyway...",
  "drop me an email if you'd like",
  "...",
  "still playing with this? 😂",
  "you can stop now.",
  "seriously.",
  "checkout the website now ffs!",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  const [isCopied, setIsCopied] = useState(false);

  const handlePhrases = () => {
    if (index === phrases.length - 1) {
      return;
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <section data-scroll-section className=" w-full bg-[#420fe7] px-44 py-36">
      <div className="hero-container flex flex-col justify-start space-y-4">
        <div className="flex justify-between items-center">
          <div className="w-fit">
            <Tooltip
              title={phrases[index]}
              placement="right-start"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 300 }}
            >
              <div>
                <img
                  src={profilePhoto}
                  alt="Tarun Sharma"
                  onClick={handlePhrases}
                  className="rounded-full h-20 w-20 hover:scale-[1.05] hover:shadow-custom1 hover:-rotate-12 transition-all duration-300 ease-in-out cursor-pointer"
                />
              </div>
            </Tooltip>
          </div>

          <div className="flex justify-between items-center space-x-2">
            <div className="h-[1px] w-10 bg-white"></div>
            <p className="text-white capitalize" id="work-status">
              Available for work
            </p>
          </div>
        </div>

        <div className="z-10">
          <h1 className="text-white text-[7.5rem]" id="hero-title">
            Hello! I'm Tarun
          </h1>
          <h2
            className="text-white text-[5.4rem] tracking-normal  leading-[120px]"
            id="sub-hero-title"
          >
            I'm developing{" "}
            <span className="italic inline-block hover:translate-y-2 hover:-skew-y-6 transition-all duration-150 ease-linear">
              Creative
            </span>{" "}
            &{" "}
            <span className="italic inline-block hover:-translate-y-2 hover:skew-y-6 transition-all duration-150 ease-linear">
              Interactive
            </span>{" "}
            webapps
          </h2>
        </div>

        <div className="relative !mt-10 pl-28 pt-6">
          <div className="w-[50%]">
            <p
              className="max-w-lg text-white/50 text-lg leading-7"
              id="about-me"
            >
              Tarun Sharma is a 19 year old who gives efforts && time to develop
              webapps and turn ideas into a functional and delightful
              experience. He is focusing on working on backend stuff and
              imporving his frontend skills - mainly builds webapps & websites
              with clean UI.
            </p>
            <Tooltip
              title={isCopied ? "Copied" : "Copy email"}
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 300 }}
              arrow
            >
              <div
                onClick={() => {
                  navigator.clipboard.writeText("tarunsharma8920@gmail.com");
                  setIsCopied(true);
                }}
                className="flex items-center cursor-pointer w-full mt-5 border-[1px] border-white/20"
              >
                <div className="p-6">
                  <MailOutlineIcon className="text-white/90" />
                </div>
                <div className="p-6 border-l-[1px] border-white/20 w-full">
                  <p className="text-white/90 text-lg w-full" id="email">
                    tarunsharma8920@gmail.com
                  </p>
                </div>
              </div>
            </Tooltip>
          </div>

          <Spline
            className="absolute -top-64 -right-[25rem]"
            id="spline-canvas"
            scene="https://prod.spline.design/2OUo58AzMHWE8Ru7/scene.spline"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
