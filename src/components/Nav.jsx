import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

const containerVariants = {
   enter: {
      opacity: 1,
      transition: {
         delayChildren: 0.2, // Wait 0.5s before starting staggered animations
         staggerChildren: 0.2, // Each child animates 0.2s apart
      },
   },
   exit: { opacity: 0 },
};

const linkVariants = {
   initial: { opacity: 0, y: 20 },
   enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
   },
   exit: { opacity: 0, y: -20 },
};

const Nav = () => {
   return (
      <motion.div
         className="nav"
         initial="initial"
         animate="enter"
         exit="exit"
         variants={containerVariants} // Parent controls delay & stagger
      >
         <div className="nav_body flex flex-col gap-6 text-4xl font-medium tracking-wide">
            {NavLinks.map((link, i) => (
               <motion.div key={i} variants={linkVariants}>
                  <NavLink to={link.href}>{link.title}</NavLink>
               </motion.div>
            ))}
         </div>
      </motion.div>
   );
};

export default Nav;

const NavLinks = [
   { title: "Home", href: "/" },
   { title: "About", href: "/about" },
   { title: "Work", href: "/work" },
   { title: "Blog", href: "/blog" },
   { title: "Contact", href: "/contact" },
];
