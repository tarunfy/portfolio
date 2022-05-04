import React, { useState } from "react";
import profilePhoto from "../../assets/images/tarun.jpeg";
import Tooltip from "@mui/material/Tooltip";
import { Fade } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { motion } from "framer-motion";
import AnimatedLetters from "../AnimatedLetters";
import { Player } from "@lottiefiles/react-lottie-player";

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

  const [isCopied, setIsCopied] = useState(false);

  const handlePhrases = () => {
    if (index === phrases.length - 1) {
      return;
    } else {
      setIndex(index + 1);
    }
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText("tarunsharma8920@gmail.com");
    setIsCopied(true);
  };

  return (
    <section
      data-scroll-section
      className="w-full bg-[#420fe7] xl:px-44 lg:px-40 sm:py-36 py-32 md:px-32 sm:px-28 vvs:px-16 px-14"
    >
      <div className="hero-container flex flex-col justify-start">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          data-scroll
          data-scroll-delay="0.5"
          data-scroll-speed="1"
          className="flex justify-between items-center xl:mb-10 lg:mb-8 md:mb-6 sm:mb-5 vvs:mb-4 mb-3"
        >
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
                  className="rounded-full lg:h-20 lg:w-20 md:h-16 md:w-16  vvs:h-14 vvs:w-14 w-12 h-12 hover:scale-[1.05] hover:shadow-custom1 hover:-rotate-12 transition-all duration-300 ease-in-out cursor-pointer"
                />
              </div>
            </Tooltip>
          </div>

          <div className="flex justify-between items-center space-x-2">
            <div className="h-[1px] md:w-10 sm:w-7 vvs:w-5 w-4 bg-white"></div>
            <p
              className="text-white capitalize sm:text-sm md:text-base xl:text-lg text-xs"
              id="work-status"
            >
              Available for work
            </p>
          </div>
        </motion.div>

        <div>
          <div>
            <h1
              data-scroll
              data-scroll-delay="0.5"
              data-scroll-speed="1"
              className="text-white 2xl:text-[6.5rem] xl:text-[6.2rem] lg:text-[5rem] md:text-[3.5rem] sm:text-[3rem] vvs:text-[2rem] text-[1.9rem] tracking-normal xl:leading-[120px] md:leading-[80px] lg:leading-[100px] sm:leading-[80px] vvs:leading-[60px] leading-[40px]"
              id="hero-title"
            >
              <AnimatedLetters letters={title} />
            </h1>
            <h2
              data-scroll
              data-scroll-delay="0.5"
              data-scroll-speed="1"
              className="text-white z-20 2xl:text-[5.5rem] xl:text-[5rem] lg:text-[3.5rem] md:text-[2.6rem] sm:text-[2.2rem] vvs:text-[1.5rem] text-[1.3rem] tracking-normal 2xl:leading-[120px] lg:leading-[100px] md:leading-[70px] sm:leading-[50px] vvs:leading-[40px] leading-[30px]"
              id="sub-hero-title"
            >
              <AnimatedLetters letters={letters} />
            </h2>
          </div>

          <motion.div
            className="xl:mt-5 mt-3 w-full flex justify-between items-center"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            data-scroll
            data-scroll-delay="0.5"
            data-scroll-speed="1"
          >
            <div className="w-full flex sm:flex-row flex-col justify-between items-center">
              <div>
                <p
                  className="lg:max-w-lg md:max-w-md sm:max-w-sm max-w-none text-white/50 xl:text-lg lg:text-base md:text-sm text-xs xl:leading-7 lg:leading-6 leading-5 "
                  id="about-me"
                >
                  Tarun Sharma is a 19 year old who develop webapps and turn
                  ideas into a functional and delightful experience. He is
                  focusing on working on backend stuff and imporving his
                  frontend skills - mainly builds webapps & websites with clean
                  UI.
                </p>

                <Tooltip
                  title={isCopied ? "Copied" : "Copy email"}
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 300 }}
                  arrow
                >
                  <div
                    onClick={handleCopyText}
                    className="flex items-center cursor-pointer w-full xl:mt-5 lg:mt-3 mt-3 border-[1px] border-white/20"
                  >
                    <div className="xl:p-6 lg:p-5 vvs:p-4 p-3">
                      <MailOutlineIcon className="text-white/90 vvs:!h-5 vvs:!w-5 !h-4 !w-4 lg:!h-6 lg:!w-6" />
                    </div>
                    <div className="xl:p-6 lg:p-5 vvs:p-4 p-3 border-l-[1px] border-white/20 w-full">
                      <p
                        className="text-white/90 xl:text-lg lg:text-base md:text-sm text-xs w-full"
                        id="email"
                      >
                        tarunsharma8920@gmail.com
                      </p>
                    </div>
                  </div>
                </Tooltip>
              </div>
              <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_m64r7cwa.json"
                className="xl:!h-[400px] xl:!w-[600px] lg:!h-[280px] lg:!w-[480px] md:!h-[220px] md:!w-[300px] vvs:!h-[180px] vvs:!w-[260px] h-[160px] w-[240px] !mt-4 sm:!mt-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
