import React, { useRef } from "react";
import Gallery from "../components/Gallery.js";
import Navbar from "../components/Navbar.js";
import "../Gallery.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function GalleryPage() {
  return (
    <div className="App">
      <Navbar />
      <Gallery />
    </div>
  );
}

export default GalleryPage;
