import React, { useRef } from "react";
import Hero from "./components/Hero";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import { useScroll } from "framer-motion";

const Home = () => {
   const container = useRef();
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end end"],
   });

   return (
      <>
         <div ref={container} className="relative w-full h-[200vh] font-inter">
            <Hero scrollYProgress={scrollYProgress} />
            <AboutSection scrollYProgress={scrollYProgress} />
         </div>
         <div className="h-screen"></div>
         <PortfolioSection />
      </>
   );
};

export default Home;
