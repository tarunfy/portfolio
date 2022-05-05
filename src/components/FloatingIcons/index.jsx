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
          className="icon-wrapper rounded-full absolute top-[60%] left-[3%] h-[4rem] w-[4rem] bg-[#18033C]/30 flex justify-center items-center"
        >
          <img src={gmail} alt="gmail" className="h-8 w-8" />
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
          className="icon-wrapper rounded-full absolute top-[14%] left-[55%] h-[4rem] w-[4rem] bg-[#18033C]/30 flex justify-center items-center"
        >
          <img src={github} alt="github" className="h-10 w-10" />
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
          className="icon-wrapper rounded-full absolute top-[43%] right-[5%] h-[4rem] w-[4rem] bg-[#18033C]/30 flex justify-center items-center"
        >
          <img src={linkedin} alt="github" className="h-8 w-8" />
        </motion.span>
      </a>
    </div>
  );
};

export default FloatingIcons;
