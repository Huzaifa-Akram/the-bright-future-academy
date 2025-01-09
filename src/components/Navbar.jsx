import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import menu from "../assets/menu.png";
import "./navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNavItems = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu-icon" onClick={toggleNavItems}>
          <img src={menu} />
        </div>
        <div className={`nav-elements ${showNav && "active"}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={toggleNavItems}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About-Us" onClick={toggleNavItems}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/Courses" onClick={toggleNavItems}>
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/Test-Booking" onClick={toggleNavItems}>
                Test Booking
              </NavLink>
            </li>
            <li>
              <NavLink to="/Achievements" onClick={toggleNavItems}>
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
