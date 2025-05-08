import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import DesignProcess from "./pages/DesignProcess";
import DesignConsultation from "./pages/DesignConsultation";
import Kitchens from "./pages/Kitchens";
import Bathrooms from "./pages/Bathrooms";
import DRendering from "./pages/DRendering";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Furniture from "./pages/Furniture";
import Lightning from "./pages/Lightning";
import Automation from "./pages/Automation";
import Style from "./pages/Style";
import DVisualisation from "./pages/DVisualisation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/design-process" element={<DesignProcess />} />
        <Route path="/design-consultation" element={<DesignConsultation />} />
        <Route path="/kitchens" element={<Kitchens />} />
        <Route path="/bathrooms" element={<Bathrooms />} />
        <Route path="/d-rendering" element={<DRendering />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/lightning" element={<Lightning />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/style" element={<Style />} />
        <Route path="/d-visualisation" element={<DVisualisation />} />
      </Route>
    </Routes>
  );
};

export default App;
