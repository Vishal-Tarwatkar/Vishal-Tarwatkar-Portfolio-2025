import React from "react";
import CTA from "../../../components/ui/CTA";
import { portfolioData } from "../PortfolioData";
import { PiArrowBendUpRightFill } from "react-icons/pi";
import { motion } from "framer-motion";
import ParallaxScrollSection from "./ParallaxScrollSection";
import AnimatedPortfolioCol from "./AnimatedPortfolioCol";

const PortfolioSection = () => {
   const data = portfolioData;

   return (
      <div className="w-full min-h-screen flex flex-col gap-12 justify-center items-center px-12">
         {/* project content */}
         <div className="w-1/3 flex flex-col gap-3 justify-center items-center text-center pt-6">
            <h4 className="text-sm">Projects</h4>
            <h2 className="text-4xl">
               Helping brands achieve sustainable results
            </h2>
            <p className="">
               There are many variations of passages of Lorem Ipsum available,
               but the majority have suffered in some form, by injected humour
            </p>
         </div>

         {/* project cards */}
         <div className="flex flex-col gap-12 pb-40">
            <AnimatedPortfolioCol data={[data[0], data[1]]} />
            <AnimatedPortfolioCol data={[data[2], data[3]]} reversed={true} />
         </div>

         {/* Parallax Scroll Section */}
         <ParallaxScrollSection />

         {/* project cta */}
         <div className="z-[2]">
            <CTA href="/portfolio">
               All Case Studies <PiArrowBendUpRightFill />
            </CTA>
         </div>
      </div>
   );
};

export default PortfolioSection;
