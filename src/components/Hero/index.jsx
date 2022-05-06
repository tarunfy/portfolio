import React, { useState } from "react";
import profilePhoto from "../../assets/images/tarun.jpeg";
import Tooltip from "@mui/material/Tooltip";
import { Fade } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedLetters from "../AnimatedLetters";
import { Player } from "@lottiefiles/react-lottie-player";
import FloatingIcons from "../FloatingIcons";

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

const letters = [
  "I'm",
  "developing",
  "Creative",
  "&",
  "Interactive",
  "webapps",
];

const title = ["Hello!", "I'm", "Tarun"];

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
    <section
      data-scroll-section
      className="w-full cursor-default bg-[#420fe7] xl:px-44 lg:px-40 sm:pt-48 sm:pb-0 pt-40 md:px-32 sm:px-28 vvs:px-12 px-10"
    >
      <div className="hero-container flex flex-col ">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-between items-center"
        >
          <div
            className="w-fit"
            data-scroll
            data-scroll-delay="0.5"
            data-scroll-speed="2"
          >
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
                  id="profilePhoto"
                  className="rounded-full !z-10 lg:h-20 lg:w-20 md:h-16 md:w-16 vvs:h-14 vvs:w-14 w-12 h-12 hover:scale-[1.05] hover:shadow-custom1 hover:-rotate-12 transition-all duration-300 ease-in-out cursor-pointer"
                />
              </div>
            </Tooltip>
          </div>

          <div
            className="flex justify-between items-center space-x-2 "
            data-scroll
            data-scroll-delay="0.5"
            data-scroll-speed="2"
          >
            <div className="h-[1px] md:w-10 sm:w-7 vvs:w-5 w-4 bg-white"></div>
            <p
              className="text-white hover:text-[#EEA1BE] transition-colors duration-300 ease-in-out capitalize vss:text-sm md:text-base xl:text-lg text-xs"
              id="work-status"
            >
              Available for work
            </p>
          </div>
        </motion.div>

        <div>
          <div className="mt-10">
            <h1
              data-scroll
              data-scroll-delay="0.5"
              data-scroll-speed="1"
              className="text-white/70 !z-10 2xl:text-[6.5rem] xl:text-[6.2rem] lg:text-[5rem] md:text-[3.5rem] sm:text-[3rem] vvs:text-[2.3rem] text-[2.2rem] tracking-normal xl:leading-[120px] md:leading-[80px] lg:leading-[100px] sm:leading-[80px] vvs:leading-[60px] leading-[40px]"
              id="hero-title"
            >
              <AnimatedLetters letters={title} />
            </h1>
            <h2
              data-scroll
              data-scroll-delay="0.5"
              data-scroll-speed="1"
              className="text-white !z-10 2xl:text-[5.5rem] xl:text-[5rem] lg:text-[3.5rem] md:text-[2.6rem] sm:text-[2.2rem] vvs:text-[1.7rem] text-[1.5rem] tracking-normal 2xl:leading-[120px] lg:leading-[100px] md:leading-[70px] sm:leading-[50px] leading-[40px]"
              id="sub-hero-title"
            >
              <AnimatedLetters letters={letters} />
            </h2>
          </div>

          <motion.div
            className="xl:-mt-10"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full flex md:flex-row flex-col justify-between items-center">
              <div>
                <p
                  data-scroll
                  data-scroll-delay="0.5"
                  data-scroll-speed="2"
                  className="max-w-md text-white/50 xl:text-lg lg:text-base md:text-sm text-xs xl:leading-7 lg:leading-6 leading-5"
                  id="about-me"
                >
                  Tarun Sharma is a 19 year old who develop webapps and turn
                  ideas into a functional and delightful experience. He is
                  focusing on working on backend stuff and imporving his
                  frontend skills - mainly builds webapps & websites with clean
                  UI.
                </p>
              </div>

              <div data-scroll data-scroll-delay="0.5" data-scroll-speed="2">
                <Player
                  autoplay
                  loop
                  src="https://assets6.lottiefiles.com/packages/lf20_m64r7cwa.json"
                  className="xl:!h-[400px] !z-10 xl:!w-[600px] lg:!h-[280px] lg:!w-[480px] md:!h-[240px] md:!w-[300px] !h-[180px] !w-[360px]"
                />
              </div>
            </div>
          </motion.div>
          <FloatingIcons />
        </div>
      </div>
    </section>
  );
};

export default Hero;
