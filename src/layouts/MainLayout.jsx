import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Lenis from "lenis";

const MainLayout = () => {
   useEffect(() => {
      const lenis = new Lenis();

      function raf(time) {
         lenis.raf(time);
         requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
   }, []);

   return (
      <>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </>
   );
};

export default MainLayout;
