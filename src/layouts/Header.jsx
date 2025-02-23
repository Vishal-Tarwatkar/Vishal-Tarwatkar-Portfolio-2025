import React, { useState } from "react";
import MenuButton from "../components/MenuButton";
import { motion } from "framer-motion";

const variants = {
   open: {
      width: "25rem",
      height: "30rem",
      top: "-1rem",
      left: "1rem",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
   },
   closed: {
      width: "5rem",
      height: "2rem",
      top: "0rem",
      left: "0rem",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
   },
};

const Header = () => {
   const [isActive, setIsActive] = useState(false);

   return (
      <div className="header flex justify-between">
         <motion.div
            className="menu"
            variants={variants}
            animate={isActive ? "open" : "closed"}
            initial="closed"
         ></motion.div>
         <MenuButton isActive={isActive} setIsActive={setIsActive} />
      </div>
   );
};

export default Header;
