import React, { useRef } from "react";
import Gallery from "../components/Gallery.js";
import NavigationMenu from "../components/NavigationMenu.js";
import "../css/Gallery.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function GalleryPage() {
  return (
    <div className="App">
      <NavigationMenu />
      <Gallery />
    </div>
  );
}

export default GalleryPage;
