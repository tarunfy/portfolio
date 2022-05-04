import { useEffect } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  useEffect(() => {
    const bigBall = document.querySelector(".cursor__ball--big");
    const hoverables = document.querySelectorAll(".hoverable");
    const path = document.querySelector("path");

    // Listeners
    document.body.addEventListener("mousemove", onMouseMove);
    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener("mouseenter", onMouseHover);
      hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
    }

    // Move the cursor
    function onMouseMove(e) {
      gsap.to(bigBall, {
        duration: 0.4,
        x: e.pageX - 15,
        y: e.pageY - 15,
      });
    }

    // Hover an element
    function onMouseHover() {
      document.body.style.cursor = "none";
      bigBall.style.fill = "black";
      bigBall.style.opacity = 0.5;
      path.style.strokeWidth = 0;
      gsap.to(bigBall, {
        duration: 0.3,
        scale: 1.6,
        ease: "Power2.easeInOut",
      });
    }
    function onMouseHoverOut() {
      document.body.style.cursor = "default";
      path.style.strokeWidth = 1.1;
      bigBall.style.fill = "none";
      bigBall.style.opacity = 1;

      gsap.to(bigBall, {
        duration: 0.3,
        scale: 1,
        ease: "Power2.easeInOut",
      });
    }
  }, []);

  return (
    <div class="cursor">
      <svg
        width="44"
        height="42"
        viewBox="0 0 54 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor__ball cursor__ball--big"
      >
        <path
          d="M53.5 26C53.5 40.0656 41.6535 51.5 27 51.5C12.3465 51.5 0.5 40.0656 0.5 26C0.5 11.9344 12.3465 0.5 27 0.5C41.6535 0.5 53.5 11.9344 53.5 26Z"
          stroke="#EEA1BE"
          strokeWidth={1.1}
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
