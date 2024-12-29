import "./App.css";
import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/homePage";
import GalleryPage from "./pages/galleryPage";
import PartyPage from "./pages/partyPage";
import FaqPage from "./pages/faqPage";

function App() {
  const ref = useRef();

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/party" element={<PartyPage />} />
        <Route exact path="/faq" element={<FaqPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
