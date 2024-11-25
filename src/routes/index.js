import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ListingsPage from "../pages/ListingsPage";
import ListingDetailPage from "../pages/ListingDetailPage";
import ContactPage from "../pages/ContactPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/listings" element={<ListingsPage />} />
    <Route path="/listings/:id" element={<ListingDetailPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
);

export default AppRoutes;
