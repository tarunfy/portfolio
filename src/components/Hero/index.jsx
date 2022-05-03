import React, { useState } from "react";
import profilePhoto from "../../assets/images/tarun.jpeg";
import Tooltip from "@mui/material/Tooltip";
import { Fade } from "@mui/material";

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

        <div>
          <h1 className="text-white text-[7.5rem]" id="hero-title">
            Hello! I'm Tarun
          </h1>
          <h2
            className="text-white text-[5.4rem] tracking-tight  leading-[120px]"
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
      </div>
    </section>
  );
};

export default Hero;
