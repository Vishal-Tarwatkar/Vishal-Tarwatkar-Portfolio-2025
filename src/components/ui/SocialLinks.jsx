import React from "react";
import { Link } from "react-router-dom";

const SocialLinks = () => {
   return (
      <div className="flex gap-4 text-xs">
         {LinkItems.map((link, i) => (
            <div key={i} className="rounded-full border border-[#fff0e3] px-3 py-0.5">
               <Link to={link.href}>{link.title}</Link>
            </div>
         ))}
      </div>
   );
};

export default SocialLinks;

const LinkItems = [
   { title: "Github", href: "/" },
   { title: "LinkedIn", href: "/" },
   { title: "Dribbble", href: "/" },
   { title: "Behance", href: "/" },
];
