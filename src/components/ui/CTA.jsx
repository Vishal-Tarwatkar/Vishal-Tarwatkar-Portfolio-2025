import React from "react";
import { Link } from "react-router-dom";

const CTA = ({ children, href }) => {
   return (
      <Link to={href}>
         <div>
            <button className="flex justify-center items-center gap-2 border-2 border-black rounded-full text-sm py-3 px-4">
               {children}
            </button>
         </div>
      </Link>
   );
};

export default CTA;
