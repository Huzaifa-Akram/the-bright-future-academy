import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import menu from "../assets/menu.png";
import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ activesection, setActivesection }) => {
  const [showNav, setShowNav] = useState(false);

  const navigate = useNavigate();

  const toggleNavItems = () => {
    setShowNav(!showNav);
  };

  const scrollToSection = (sectionId, path = "/") => {
    navigate(path);
    setActivesection(sectionId);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
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
              <button
                onClick={() => scrollToSection("main", "/")}
                className={activesection === "main" ? "active" : ""}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about-us", "/")}
                className={activesection === "about-us" ? "active" : ""}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("courses", "/")}
                className={activesection === "courses" ? "active" : ""}
              >
                Courses
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("test-booking", "/")}
                className={activesection === "test-booking" ? "active" : ""}
              >
                Test Booking
              </button>
            </li>
            <li>
              <NavLink
                to="/achievements"
                onClick={() => {
                  toggleNavItems();
                  setActivesection("achievements");
                }}
              >
                Achievements
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
