import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const TextMarquee = () => {
   const firstText = useRef(null);
   const secondText = useRef(null);
   const slider = useRef(null);
   let xPercent = 0;
   let direction = -1;

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Scroll-triggered animation
      ScrollTrigger.create({
         trigger: document.documentElement,
         scrub: 0.25,
         start: "top top",
         end: window.innerHeight,
         onUpdate: (e) => (direction = e.direction * -1),
      });

      // Function to animate the text
      const animate = () => {
         if (xPercent < -100) {
            xPercent = 0;
         } else if (xPercent > 0) {
            xPercent = -100;
         }
         gsap.set(firstText.current, { xPercent });
         gsap.set(secondText.current, { xPercent });

         xPercent += 0.1 * direction;
         requestAnimationFrame(animate);
      };

      animate(); // Start animation
   }, []);

   return (
      <main className="client_main pb-12">
         <div className="client_sliderContainer">
            <div ref={slider} className="client_slider">
               <div ref={firstText}>Freelance Developer -</div>
               <div ref={secondText}>Freelance Developer -</div>
            </div>
         </div>
      </main>
   );
};

export default TextMarquee;
