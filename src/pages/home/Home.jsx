import React, { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import { useScroll } from "framer-motion";
import MagneticSVGLine from "../../components/ui/MagneticSVGLine";
import TextMarquee from "./components/TextMarquee";
import ContactSection from "../../components/ContactSection";

const Home = () => {
   const container = useRef();

   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end end"],
   });

   return (
      <div className="">
         {/* ================ Hero & About Section ================ */}
         <div ref={container} className="relative w-full h-[200vh]">
            <Hero scrollYProgress={scrollYProgress} />
            <AboutSection scrollYProgress={scrollYProgress} />
         </div>
         {/* ================ Experience Section ================ */}
         <ExperienceSection />
         {/* ================ HR Line ================ */}
         <div className="py-12">
            <MagneticSVGLine />
         </div>
         {/* ================ Portfolio Section ================ */}
         <PortfolioSection />
         {/* ================ HR Line ================ */}
         <div className="py-12">
            <MagneticSVGLine />
         </div>
         {/* ================ Clients Section ================ */}
         {/* <TextMarquee /> */}
         <ContactSection />
      </div>
   );
};

export default Home;
