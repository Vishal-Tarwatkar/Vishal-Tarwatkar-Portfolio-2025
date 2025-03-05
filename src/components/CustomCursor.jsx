import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
   const mouse = useRef({ x: 0, y: 0 });
   const delayedMouse = useRef({ x: 0, y: 0 });
   const rafId = useRef(null);
   const circle = useRef();
   const size = 30;

   const lerp = (x, y, a) => x * (1 - a) + y * a;

   const manageMouseMove = (e) => {
      const { clientX, clientY } = e;

      mouse.current = {
         x: clientX,
         y: clientY,
      };
   };

   const animate = () => {
      const { x, y } = delayedMouse.current;

      delayedMouse.current = {
         x: lerp(x, mouse.current.x, 0.8),
         y: lerp(y, mouse.current.y, 0.8),
      };

      moveCircle(delayedMouse.current.x, delayedMouse.current.y);

      rafId.current = window.requestAnimationFrame(animate);
   };

   const moveCircle = (x, y) => {
      gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
   };

   useEffect(() => {
      animate();
      window.addEventListener("mousemove", manageMouseMove);
      return () => {
         window.removeEventListener("mousemove", manageMouseMove);
         window.cancelAnimationFrame(rafId.current);
      };
   }, []);

   return (
      <div
         style={{
            backgroundColor: "#BCE4F2",
            width: size,
            height: size,
            // transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
         }}
         className="top-0 left-0 fixed rounded-full mix-blend-difference pointer-events-none z-50"
         ref={circle}
      />
   );
};

export default CustomCursor;
