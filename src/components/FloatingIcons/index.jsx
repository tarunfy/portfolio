import React from "react";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import gmail from "../../assets/images/gmail.svg";
import { motion } from "framer-motion";

const FloatingIcons = () => {
  return (
    <div className="z-[10] flex justify-between w-full items-center my-14">
      <a href="mailto:tarunsharma8920@gmail.com" className="social">
        <motion.span
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            type: "spring",
            stiffness: 110,
          }}
          className="icon-wrapper rounded-full  sm:absolute sm:top-[65%] sm:left-[3%] 2xl:h-[6rem] 2xl:w-[6rem] xl:h-[5.6rem] xl:w-[5.6rem] lg:h-[5.2rem] lg:w-[5.2rem] md:h-[4.8rem] md:w-[4.8rem] vvs:h-[4.4rem] vvs:w-[4.4rem] h-[3.5rem] w-[3.5rem] bg-[#ffffff]/70 flex justify-center items-center"
        >
          <motion.span
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
              type: "spring",
              stiffness: 100,
            }}
            className="icon-container rounded-full  2xl:h-[5rem] 2xl:w-[5rem] xl:h-[4.6rem] xl:w-[4.6rem] lg:h-[4.2rem] lg:w-[4.2rem] md:h-[3.8rem] md:w-[3.8rem] vvs:h-[3.4rem] vvs:w-[3.4rem] h-[2.5rem] w-[2.5rem] bg-[#ffffff]/90 flex justify-center items-center"
          >
            <motion.img
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                delay: 1.4,
              }}
              src={gmail}
              alt="gmail"
              className="sm:h-8 sm:w-8 h-5 w-5"
            />
          </motion.span>
        </motion.span>
      </a>
      <a href="https://github.com/tarunfy" target="_blank" className="social">
        <motion.span
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            type: "spring",
            stiffness: 110,
          }}
          className="icon-wrapper rounded-full sm:absolute xl:top-[8.2%] xl:left-[50%] lg:top-[9%] sm:top-[13%] sm:left-[45%] md:top-[11%] md:left-[43%] lg:left-[47%] 2xl:h-[6rem] 2xl:w-[6rem] xl:h-[5.6rem] xl:w-[5.6rem] lg:h-[5.2rem] lg:w-[5.2rem] md:h-[4.8rem] md:w-[4.8rem] vvs:h-[4.4rem] vvs:w-[4.4rem] h-[3.5rem] w-[3.5rem] bg-[#ffffff]/70 flex justify-center items-center"
        >
          <motion.span
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
              type: "spring",
              stiffness: 100,
            }}
            className="icon-container rounded-full  2xl:h-[5rem] 2xl:w-[5rem] xl:h-[4.6rem] xl:w-[4.6rem] lg:h-[4.2rem] lg:w-[4.2rem] md:h-[3.8rem] md:w-[3.8rem] vvs:h-[3.4rem] vvs:w-[3.4rem] h-[2.5rem] w-[2.5rem] bg-[#ffffff]/90 flex justify-center items-center"
          >
            <motion.img
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                delay: 1.4,
              }}
              src={github}
              alt="github"
              className="sm:h-10 sm:w-10 h-6 w-6"
            />
          </motion.span>
        </motion.span>
      </a>
      <a
        href="https://linkedin.com/in/tarunfy/"
        target="_blank"
        className="social"
      >
        <motion.span
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            type: "spring",
            stiffness: 110,
          }}
          className="icon-wrapper rounded-full sm:absolute sm:top-[40%] sm:right-[5%]  2xl:h-[6rem] 2xl:w-[6rem] xl:h-[5.6rem] xl:w-[5.6rem] lg:h-[5.2rem] lg:w-[5.2rem] md:h-[4.8rem] md:w-[4.8rem] vvs:h-[4.4rem] vvs:w-[4.4rem] h-[3.5rem] w-[3.5rem] bg-[#ffffff]/70 flex justify-center items-center"
        >
          <motion.span
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
              type: "spring",
              stiffness: 100,
            }}
            className="icon-container rounded-full 2xl:h-[5rem] 2xl:w-[5rem] xl:h-[4.6rem] xl:w-[4.6rem] lg:h-[4.2rem] lg:w-[4.2rem] md:h-[3.8rem] md:w-[3.8rem] vvs:h-[3.4rem] vvs:w-[3.4rem] h-[2.5rem] w-[2.5rem] bg-[#ffffff]/90 flex justify-center items-center"
          >
            <motion.img
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                delay: 1.4,
              }}
              src={linkedin}
              alt="linkedin"
              className="sm:h-8 sm:w-8 h-5 w-5"
            />
          </motion.span>
        </motion.span>
      </a>
    </div>
  );
};

export default FloatingIcons;
