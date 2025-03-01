import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import PortfolioSingle from "./pages/portfolio/PortfolioSingle";
import Blog from "./pages/blog/Blog";
import BlogSingle from "./pages/blog/BlogSingle";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/error/NotFound";

const App = () => {
   return (
      <Routes>
         <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />}>
               <Route path=":id" element={<PortfolioSingle />} />
            </Route>
            <Route path="/blog" element={<Blog />}>
               <Route path=":id" element={<BlogSingle />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
         </Route>
      </Routes>
   );
};

export default App;
