import React, { useState } from "react";
import MenuButton from "../components/MenuButton";
import { motion } from "framer-motion";
import Nav from "../components/Nav";

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
      <div className="header w-full fixed flex justify-between px-8 py-4 z-10">
         <div>Logo</div>
         <div className="menu_cnt relative">
            <motion.div
               className="menu"
               variants={variants}
               animate={isActive ? "open" : "closed"}
               initial="closed"
            >
               {isActive && <Nav />}
            </motion.div>
            <MenuButton isActive={isActive} setIsActive={setIsActive} />
         </div>
      </div>
   );
};

export default Header;
