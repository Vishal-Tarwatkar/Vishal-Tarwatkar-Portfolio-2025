import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactSection = () => {
   const container = useRef();
   const paths = useRef([]);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end end"],
   });

   useEffect(() => {
      scrollYProgress.on("change", (e) => {
         paths.current.forEach((path, i) => {
            path.setAttribute("startOffset", -160 + i * 45 + e * 160 + "%");
         });
      });
   }, []);

   return (
      <div className="min-h-screen relative flex flex-col items-center' bg-[#282828]">
         <div className="w-full mt-96 flex flex-col items-center text-white text-center">
            <div className="text-[7rem] font-semibold leading-none">
               Let's
               <span className="px-8">
                  <div
                     className="w-[11rem] h-[5rem] inline-block bg-cover bg-center rounded-full"
                     style={{
                        backgroundImage: "url(https://i.ibb.co/b5MZSFXw/1.jpg)",
                     }}
                  ></div>
               </span>
               Talk
            </div>
            <p className="w-1/3">
               Good design can make a real difference in the world. I love the
               challenge of taking someone's vision and turning it into a
               reality
            </p>
            <Link to="/contact">
               <button>Connect</button>
            </Link>
         </div>

         <svg className="w-full absolute" viewBox="0 0 250 90">
            <path
               fill="none"
               id="curve"
               d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
            />
            <text className="text-[6px] uppercase" style={{ fill: "white" }}>
               {[...Array(3)].map((_, i) => {
                  return (
                     <textPath
                        key={i}
                        ref={(ref) => (paths.current[i] = ref)}
                        startOffset={i * 40 + "%"}
                        href="#curve"
                        className="font-garamond font-semibold"
                     >
                        I know You wanna conect with me
                     </textPath>
                  );
               })}
            </text>
         </svg>
      </div>
   );
};

export default ContactSection;
