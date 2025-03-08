import React from "react";
import CTA from "../../../components/ui/CTA";
import { portfolioData } from "../PortfolioData";
import { PiArrowBendUpRightFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
import ParallaxScrollSection from "./ParallaxScrollSection";

const PortfolioSection = () => {
   const portfolioSectionData = portfolioData.slice(0, 4);

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
         <div className="w-full flex gap-12 uppercase text-[#212121]">
            <div className="w-full min-h-screen grid grid-cols-2 gap-12">
               {portfolioSectionData.map((dets, i) => (
                  <div key={i} className="flex flex-col gap-4 ">
                     <div className="flex items-center gap-2 text-sm">
                        <GoDotFill /> {dets.portfolioTitle}
                     </div>
                     <div className="flex-1 rounded-xl overflow-hidden">
                        <motion.div
                           whileHover={{ scale: 0.94 }}
                           transition={{ ease: "easeInOut" }}
                           className="w-full h-full"
                        >
                           <motion.img
                              className="w-full h-full object-cover rounded-xl"
                              src={dets.imgUrl}
                              alt=""
                           />
                        </motion.div>
                     </div>
                     <div className="flex flex-wrap gap-3 items-center">
                        {dets.tags.map((tags, i) => (
                           <div
                              key={i}
                              className="border border-[#212121] rounded-full py-1 px-4"
                           >
                              {tags}
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>

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
