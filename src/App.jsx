import React, { useEffect, useState } from "react";
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
import PM from "./pages/PM";
import ContactModal from "./components/ContactModal";
import StyleContent from "./pages/StyleContent";
import Portfolio1 from "./pages/Portfolio1";
import Portfolio2 from "./pages/Portfolio2";
import Portfolio3 from "./pages/Portfolio3";
import Portfolio4 from "./pages/Portfolio4";
import Portfolio5 from "./pages/Portfolio5";
import Portfolio6 from "./pages/Portfolio6";
import Portfolio7 from "./pages/Portfolio7";
import Portfolio8 from "./pages/Portfolio8";
import Portfolio9 from "./pages/Portfolio9";
import Portfolio10 from "./pages/Portfolio10";
import Portfolio11 from "./pages/Portfolio11";
import Portfolio12 from "./pages/Portfolio12";
import Portfolio13 from "./pages/Portfolio13";
import Portfolio14 from "./pages/Portfolio14";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowPopup(true);
      // localStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <>
      {showPopup && <ContactModal />}
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
          <Route path="/style/:id" element={<StyleContent />} />
          <Route path="/d-visualisation" element={<DVisualisation />} />
          <Route path="/project-management" element={<PM />} />
          <Route path="/p1-kingston-upon-thames" element={<Portfolio1 />} />
          <Route
            path="/p2-biophilic-oasis-conservatory"
            element={<Portfolio2 />}
          />
          <Route path="/p3-collaborative-hub" element={<Portfolio3 />} />
          <Route path="/p4-gilded-elegance-passage" element={<Portfolio4 />} />
          <Route path="/p5-bespoke-joinery-projects" element={<Portfolio5 />} />
          <Route path="/p6-kitchens" element={<Portfolio6 />} />
          <Route path="/p7-garden-design-kingston" element={<Portfolio7 />} />
          <Route path="/p8-twickenham" element={<Portfolio8 />} />
          <Route path="/p9-chessingtion-kingston" element={<Portfolio9 />} />
          <Route path="/p10-reception-central" element={<Portfolio10 />} />
          <Route path="/p11-seven-bed" element={<Portfolio11 />} />
          <Route path="/p12-kingston-project" element={<Portfolio12 />} />
          <Route path="/p13-surbiton-project" element={<Portfolio13 />} />
          <Route path="/p14-air-mitcham" element={<Portfolio14 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
