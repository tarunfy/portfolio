import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export const useLocoScroll = () => {
  useEffect(() => {
    const el = document.querySelector("#main-container");

    const locoScroll = new LocomotiveScroll({
      el,
      smooth: true,
      multiplier: 1,
      class: "reveal",
    });
  }, []);
};
