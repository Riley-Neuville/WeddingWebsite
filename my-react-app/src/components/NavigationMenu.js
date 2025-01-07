import React, { useState, useRef, useEffect } from "react";
import "../NavigationMenu.css";

const NavigationMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
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
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
            >
              Registry
            </a>
          </li>
        </ul>
      ) : (
        <div className="menu-icon">☰</div>
      )}
    </div>
  );
};

export default NavigationMenu;
