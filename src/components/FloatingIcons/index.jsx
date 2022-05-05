import React from "react";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import gmail from "../../assets/images/gmail.svg";
import { motion } from "framer-motion";

const FloatingIcons = () => {
  return (
    <div className="z-[0]">
      <a href="mailto:tarunsharma8920@gmail.com" className="social">
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          data-scroll
          data-scroll-delay="1"
          data-scroll-speed="4"
          className="icon-wrapper rounded-full  absolute top-[55%] left-[3%] h-[5.8rem] w-[5.8rem] bg-[#ffffff]/70 flex justify-center items-center"
        >
          <span className="icon-container rounded-full  h-[4.9rem] w-[4.9rem] bg-[#ffffff]/90 flex justify-center items-center">
            <img src={gmail} alt="gmail" className="h-8 w-8" />
          </span>
        </motion.span>
      </a>
      <a href="https://github.com/tarunfy" target="_blank" className="social">
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          data-scroll
          data-scroll-delay="1"
          data-scroll-speed="4"
          className="icon-wrapper rounded-full absolute top-[13%] left-[53%] h-[5.8rem] w-[5.8rem] bg-[#ffffff]/70 flex justify-center items-center"
        >
          <span className="icon-container rounded-full  h-[4.9rem] w-[4.9rem] bg-[#ffffff]/90 flex justify-center items-center">
            <img src={github} alt="github" className="h-10 w-10" />
          </span>
        </motion.span>
      </a>
      <a
        href="https://linkedin.com/in/tarunfy/"
        target="_blank"
        className="social"
      >
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          data-scroll
          data-scroll-delay="1"
          data-scroll-speed="4"
          className="icon-wrapper rounded-full absolute top-[40%] right-[5%] h-[5.8rem] w-[5.8rem] bg-[#ffffff]/70 flex justify-center items-center"
        >
          <span className="icon-container rounded-full  h-[4.9rem] w-[4.9rem] bg-[#ffffff]/90 flex justify-center items-center">
            <img src={linkedin} alt="github" className="h-8 w-8" />
          </span>
        </motion.span>
      </a>
    </div>
  );
};

export default FloatingIcons;
