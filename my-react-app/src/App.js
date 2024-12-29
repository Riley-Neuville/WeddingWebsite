import React from "react";
import ReactDOM from "react-dom/client";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/homePage";
import GalleryPage from "./pages/galleryPage";
import PartyPage from "./pages/partyPage";
import FaqPage from "./pages/faqPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/party" element={<PartyPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        {/* Redirect unknown paths to the home page */}
        <Route path="*" element={<Navigate to="/#/" />} />
      </Routes>
    </Router>
  );
}

export default App;
