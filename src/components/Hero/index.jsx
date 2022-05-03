import React, { useState } from "react";
import profilePhoto from "../../assets/images/tarun.jpeg";
import Tooltip from "@mui/material/Tooltip";
import { Fade } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { motion } from "framer-motion";
import AnimatedLetters from "../AnimatedLetters";

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
    <section data-scroll-section className=" w-full bg-[#420fe7] px-44 py-36">
      <div className="hero-container flex flex-col justify-start">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          data-scroll
          data-scroll-delay="0.5"
          data-scroll-speed="1"
          className="flex justify-between items-center mb-10"
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
        </motion.div>

        <div>
          <div>
            <h1
              data-scroll
              data-scroll-delay="0.5"
              data-scroll-speed="1"
              className="text-white text-[6.5rem] tracking-normal leading-[120px]"
              id="hero-title"
            >
              <AnimatedLetters letters={title} />
            </h1>
            <h2
              data-scroll
              data-scroll-delay="0.5"
              data-scroll-speed="1"
              className="text-white z-20 text-[5.5rem] tracking-normal leading-[120px]"
              id="sub-hero-title"
            >
              <AnimatedLetters letters={letters} />
            </h2>
          </div>

          <motion.div
            className="mt-5"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            data-scroll
            data-scroll-delay="0.5"
            data-scroll-speed="1"
          >
            <div className="w-fit">
              <p
                className="max-w-lg text-white/50 text-lg leading-7"
                id="about-me"
              >
                Tarun Sharma is a 19 year old who develop webapps and turn ideas
                into a functional and delightful experience. He is focusing on
                working on backend stuff and imporving his frontend skills -
                mainly builds webapps & websites with clean UI.
              </p>

              <Tooltip
                title={isCopied ? "Copied" : "Copy email"}
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 300 }}
                arrow
              >
                <div
                  onClick={handleCopyText}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
