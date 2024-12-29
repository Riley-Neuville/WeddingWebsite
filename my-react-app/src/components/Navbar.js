import React, { useState } from "react";
import "../Navbar.css";

function Navbar() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <a href="/" className="anchor1">
          R+A
        </a>
        <a
          href="https://withjoy.com/alexis-and-riley-jun-25/rsvp"
          target="_blank"
          className="anchor3"
        >
          RSVP
        </a>
        <a href="/gallery" className="anchor2">
          Gallery
        </a>
        <a href="/faq" className="anchor4">
          FAQs
        </a>
        <a href="/party" className="anchor5">
          Party
        </a>
      </div>
    </>
  );
}
export default Navbar;
