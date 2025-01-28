import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  ScrollRestoration,
} from "react-router-dom";
import HomePage from "./pages/homePage";
import GalleryPage from "./pages/galleryPage";
import PartyPage from "./pages/partyPage";
import FaqPage from "./pages/faqPage";
import QuizPage from "./pages/quizPage";
import ScrollToTop from "./components/ScrollToTop";
import TtdPage from "./pages/ttdPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/party" element={<PartyPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/trivia" element={<QuizPage />} />
        <Route path="/ttd" element={<TtdPage />} />
        {/* Redirect unknown paths to the home page */}
        <Route path="*" element={<Navigate to="/#/" />} />
      </Routes>
    </Router>
  );
}

export default App;
