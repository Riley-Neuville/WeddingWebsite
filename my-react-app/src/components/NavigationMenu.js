import React, { useState } from "react";
import "../NavigationMenu.css";

const NavigationMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={`nav-bubble ${isExpanded ? "expanded" : ""}`}
      onClick={toggleMenu}
    >
      {isExpanded ? (
        <ul className="menu-list">
          <li>
            <a href="/#/">Home</a>
          </li>
          <li>
            <a
              href="https://withjoy.com/alexis-and-riley-jun-25/rsvp"
              target="_blank"
            >
              RSVP
            </a>
          </li>
          <li>
            <a href="/#/gallery">Gallery</a>
          </li>
          <li>
            <a href="/#/faq">FAQs</a>
          </li>
          <li>
            <a href="/#/party">Wedding Party</a>
          </li>
          <li>
            <a
              href="https://withjoy.com/alexis-and-riley-jun-25/registry"
              target="_blank"
            >
              Registry
            </a>
          </li>
        </ul>
      ) : (
        <div className="menu-icon">☰</div> // Replace with an icon if desired
      )}
    </div>
  );
};

export default NavigationMenu;
