import React from "react";
import ContactForm from "./components/ContactForm";

const Contact = () => {
   return (
      <div>
         <div className="min-h-screen flex flex-col justify-center bg-[#282828] text-[#FFF0E3]">
            <div>Connect</div>
            <div>
               <p>
                  I believe that good design can make a real difference in the
                  world — It can help businesses attract new customers, build
                  stronger relationships, and create a more positive brand
                  image.
               </p>
            </div>
            <div></div>
         </div>

         <ContactForm />
      </div>
   );
};

export default Contact;
