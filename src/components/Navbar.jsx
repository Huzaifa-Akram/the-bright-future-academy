import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import menu from "../assets/menu.png";
import "./navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleNavItems = () => {
    setShowNav(!showNav);
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink(sectionId);
    toggleNavItems();
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu-icon">
          <img src={menu} onClick={toggleNavItems} />
        </div>
        <div className={`nav-elements ${showNav && "active"}`}>
          <ul>
            <li>
              <a
                href="#home"
                className={activeLink === "home" ? "active" : ""}
                onClick={(e) => scrollToSection(e, "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className={activeLink === "about-us" ? "active" : ""}
                onClick={(e) => scrollToSection(e, "about-us")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className={activeLink === "courses" ? "active" : ""}
                onClick={(e) => scrollToSection(e, "courses")}
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#test-booking"
                className={activeLink === "test-booking" ? "active" : ""}
                onClick={(e) => scrollToSection(e, "test-booking")}
              >
                Test Booking
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className={activeLink === "achievements" ? "active" : ""}
                onClick={(e) => scrollToSection(e, "achievements")}
              >
                Achievements
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
