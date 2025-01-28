import React from "react";
import Gallery from "../components/Gallery.js";
import NavigationMenu from "../components/NavigationMenu.js";
import "../css/Gallery.css";

function GalleryPage() {
  return (
    <div className="App">
      <NavigationMenu />
      <Gallery />
    </div>
  );
}

export default GalleryPage;
