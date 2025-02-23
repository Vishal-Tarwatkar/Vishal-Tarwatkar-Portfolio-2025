import { motion } from "framer-motion";
import React, { useState } from "react";

const Header = () => {
   const [isActive, setIsActive] = useState(false);
   return (
      <div className="flex justify-between px-40 py-40">
         <div>logo</div>
         <div
            onClick={() => setIsActive(!isActive)}
            className="menu_btn h-8 w-20"
         >
            {/* Sliding Animation */}
            <motion.div
               className="slider"
               animate={{ top: isActive ? "-100%" : "0%" }}
               transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
               <div className="el">
                  <PerspectiveText label={"menu"} />
               </div>
               <div className="el">
                  <PerspectiveText label={"close"} />
               </div>
            </motion.div>
         </div>
      </div>
   );
};

export default Header;

function PerspectiveText({ label }) {
   return (
      <div className="perspective_text">
         <p>{label}</p>
         <p>{label}</p>
      </div>
   );
}
