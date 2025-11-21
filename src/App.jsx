import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import HrServices from "./pages/HrServices";
import SoftwareServices from "./pages/SoftwareServices";
import SupplyChain from "./pages/SupplyChain";
import SaaSProducts from "./pages/SaaSProducts";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hr-services" element={<HrServices />} />
        <Route path="/software-services" element={<SoftwareServices />} />
        <Route path="/supply-chain" element={<SupplyChain />} />
        <Route path="/saas-products" element={<SaaSProducts />} />
      </Routes>
    </>
  );
}
