import React, { useEffect, useRef } from "react";

const MagneticSVGLine = () => {
   const path = useRef(null); // svg line
   let progress = 0;
   let x = 0.5;
   let time = Math.PI / 2;
   let requestId = null;

   useEffect(() => {
      setPath(progress);
   }, []);

   const setPath = (progress) => {
      const { innerWidth } = window;
      const width = innerWidth * 1;
      path.current.setAttributeNS(
         null,
         "d",
         `M0 50 Q${width * x} ${50 + progress}, ${width} 50`
      );
   };

   const lerp = (x, y, a) => x * (1 - a) + y * a;

   const manageMouseEnter = () => {
      if (requestId) {
         window.cancelAnimationFrame(requestId);
         resetAnimation();
      }
   };

   const manageMouseMove = (e) => {
      const { movementY, clientX } = e;
      const pathBound = path.current.getBoundingClientRect();
      x = (clientX - pathBound.left) / pathBound.width;
      progress += movementY;
      setPath(progress);
   };

   const manageMouseLeave = () => {
      animateOut();
   };

   const animateOut = () => {
      const newProgress = progress * Math.sin(time);
      progress = lerp(progress, 0, 0.025);
      time += 0.2;
      setPath(newProgress);

      if (Math.abs(progress) > 0.75) {
         requestId = requestAnimationFrame(animateOut);
      } else {
         resetAnimation();
      }
   };

   const resetAnimation = () => {
      time = Math.PI / 2;
      progress = 0;
   };

   return (
      <div className="relative">
         <div className="line">
            <div
               onMouseEnter={manageMouseEnter}
               onMouseMove={manageMouseMove}
               onMouseLeave={manageMouseLeave}
               className="box "
            ></div>
            <svg className="">
               <path className="" ref={path}></path>
            </svg>
         </div>
      </div>
   );
};

export default MagneticSVGLine;
