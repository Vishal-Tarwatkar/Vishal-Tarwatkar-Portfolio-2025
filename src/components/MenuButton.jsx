import React, { useState } from "react";
import { motion } from "framer-motion";

const MenuButton = ({ isActive, setIsActive }) => {
   return (
      <div onClick={() => setIsActive(!isActive)} className="menu_btn">
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
   );
};

export default MenuButton;

function PerspectiveText({ label }) {
   return (
      <div className="perspective_text">
         <p>{label}</p>
         <p>{label}</p>
      </div>
   );
}
