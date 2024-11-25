import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import ListingsPage from "./pages/ListingsPage";
import ContactPage from "./pages/ContactPage";
import ListingDetailPage from "./pages/ListingDetailPage";

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/listings/:id" element={<ListingDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
