import { motion, useTransform } from "framer-motion";
import React from "react";

const Hero = ({ scrollYProgress }) => {
   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
   const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

   return (
      <motion.div
         style={{ scale, rotate }}
         className="sticky top-0 h-[100vh] bg-green-200"
      >
         <div>Hero</div>
      </motion.div>
   );
};

export default Hero;
