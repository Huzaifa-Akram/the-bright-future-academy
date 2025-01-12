import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

import Logo from "../assets/Logo.svg";
import Aboutus from "./Aboutus";

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Logo} alt="Company Logo" />
      </div>
      <div className="footer-links">
        <h3>Company</h3>
        <button
          onClick={() => {
            scrollToSection("about-us");
          }}
        >
          About
        </button>
        <button
          onClick={() => {
            scrollToSection("courses");
          }}
        >
          Courses
        </button>
        <button
          onClick={() => {
            scrollToSection("test-booking");
          }}
        >
          Test Booking
        </button>
        <button
          onClick={() => {
            scrollToSection("home");
          }}
        >
          Home
        </button>
      </div>
      <div className="footer-social-media">
        <h3>Social Media</h3>
        <a
          href="https://www.facebook.com/share/19pt25wcKg/?mibextid=wwXIfr"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.tiktok.com/@ieltsandlifewithshahzaib?fbclid=IwY2xjawHuQ5BleHRuA2FlbQIxMAABHVlERIhj1TNiezCfdi1kDwnViEea_NCdUCGlxK6Onh-E8UosbpVP8L8Tdw_aem_BUtSERxabERu-DtwhhFekg"
          target="_blank"
          rel="noreferrer"
        >
          TikTok
        </a>
        <a
          href="https://www.instagram.com/the_bright_future_ielts_acd?fbclid=IwY2xjawHuQwJleHRuA2FlbQIxMAABHSkCeXf52CZhFj0otmPxdvalJM8-bhYAUy1tcABsWSuM06tyI14f_CRL5g_aem_djfegB7T6G5lejY7RsRqiQ"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
      <div className="company-address">
        <h3>Company Address</h3>
        <p className="gmail">thebrightfutureieltsacademy@gmail.com</p>
        <p className="phone">0333-8505850</p>
        <p className="address">
          Railway Road no.2 ,Lalamusa, Dist. Gujrat, Punjab, Pakistan
        </p>
      </div>

      <div className="developer-credit">
        <p>
          Website Developed by:{" "}
          <a href="https://www.linkedin.com/in/huzaifa-akram-68b223326/">
            Huzaifa Adil Akram
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
