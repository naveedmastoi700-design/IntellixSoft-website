import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import OurTeam from "./Pages/Ourteam";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import Youtube from "./Pages/Youtube";
import Client from "./Components/Client";
import Shopify from "./Pages/Shopify";
import Footer from "./Components/Footer";
import DataAutomation from "./Pages/Data-Automation";
import WebAppDevelopment from "./Pages/WebAppDevelopment";
import MobileAppDevelopment from "./Pages/MobileAppDevelopment";
import PythonMachineLearning from "./Pages/PythonMachineLearning";
import GraphicDesigner from "./Pages/GraphicDesigner";
import DigitalMarketing from "./Pages/DigitalMarketing";
import BusinessDevelopment from "./Pages/BusinessDevelopment";
import BackendWebDevelopmentwithPython from "./Pages/BackendWebDevelopmentwithPython";
import DataScienceAndAutomationWithPython from "./Pages/DataScienceAndAutomationWithPython";
import SEO from "./Pages/SEO";
import Computer from "./Pages/Computer";
import "./App.css";
import { FaRegMoneyBillAlt } from "react-icons/fa";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/WebAppDevelopment" element={<WebAppDevelopment />} />
        <Route path="/MobileAppDevelopment" element={<MobileAppDevelopment />} />
        <Route path="/PythonMachineLearning" element={<PythonMachineLearning />} />
        <Route
          path="/courses/data-automation"
          element={<DataAutomation />}
        />
        <Route
          path="/courses/shopify"
          element={<Shopify />}
        />
        <Route
          path="/courses/Youtube"
          element={<Youtube />}
        />
        <Route
          path="/courses/seo"
          element={<SEO />}
        />
        <Route
          path="/courses/Computer"
          element={<Computer />}
        />
        <Route path="/GraphicDesigner" element={<GraphicDesigner />} />
        <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
        <Route path="/BusinessDevelopment" element={<BusinessDevelopment />} />
        <Route path="/BackendWebDevelopmentwithPython" element={<BackendWebDevelopmentwithPython />} />
        <Route path="/DataScienceAndAutomationWithPython" element={<DataScienceAndAutomationWithPython />} />

        <Route path="/courses/web-app-development" element={<WebAppDevelopment />} />
        <Route path="/courses/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/courses/python-machine-learning" element={<PythonMachineLearning />} />

        <Route path="/courses/graphic-designer" element={<GraphicDesigner />} />
        <Route path="/courses/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/courses/business-development" element={<BusinessDevelopment />} />
        <Route path="/courses/Backend-Development-with-Python" element={<BackendWebDevelopmentwithPython />} />
        <Route path="/courses/Data-Science-and-Automation-with-Python" element={<DataScienceAndAutomationWithPython />} />
      </Routes>
    </Router>
  );
}

export default App;
