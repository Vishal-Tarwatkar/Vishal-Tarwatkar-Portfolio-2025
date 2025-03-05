import React, { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import { useScroll } from "framer-motion";
import MagneticSVGLine from "../../components/ui/MagneticSVGLine";

const Home = () => {
   const container = useRef();

   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end end"],
   });

   return (
      <div className="">
         <div ref={container} className="relative w-full h-[200vh]">
            <Hero scrollYProgress={scrollYProgress} />
            <AboutSection scrollYProgress={scrollYProgress} />
         </div>
         <ExperienceSection />
         <div className="px-10 py-5">
            <MagneticSVGLine />
         </div>
         <PortfolioSection />
      </div>
   );
};

export default Home;
