import { motion, useTransform } from "framer-motion";
import React from "react";

const AboutSection = ({ scrollYProgress }) => {
   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
   const rotate = useTransform(scrollYProgress, [0, 1], [8, 0]);

   return (
      <motion.div
         style={{ scale, rotate }}
         className="relative h-[100vh] bg-blue-200"
      >
         <div>AboutSection</div>
      </motion.div>
   );
};

export default AboutSection;
