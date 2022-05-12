import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const AnimatedLetters = ({ letters }) => {
  return (
    <>
      <motion.span variants={banner} initial="initial" animate="animate">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block z-30 "
            variants={letterAnimation}
          >
            {letter}&nbsp;
          </motion.span>
        ))}
      </motion.span>
    </>
  );
};

export default AnimatedLetters;
