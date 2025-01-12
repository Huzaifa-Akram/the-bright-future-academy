import React, { useState } from "react";
import "./achievements.css";
import { useNavigate } from "react-router-dom";

import ach1 from "../assets/ach1.png";
import ach2 from "../assets/ach2.png";
import ach3 from "../assets/ach3.png";
import ach4 from "../assets/ach4.png";
import ach5 from "../assets/ach5.png";
import ach6 from "../assets/ach6.png";
import ach7 from "../assets/ach7.png";
import ach8 from "../assets/ach8.png";
import ach9 from "../assets/ach9.png";
import back from "../assets/back.svg";

function Achievements() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const openLightbox = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const images = [ach1, ach2, ach3, ach4, ach5, ach6, ach7, ach8, ach9];

  return (
    <div className="Achievements">
      {/* Gallery */}
      {images.map((image, index) => (
        <div key={index} className={`Achievement${index + 1}`}>
          <img
            src={image}
            alt={`Achievement ${index + 1}`}
            onClick={() => openLightbox(image)}
            style={{ cursor: "pointer" }}
          />
        </div>
      ))}

      {/* Back Button */}
      <div className="back">
        <img
          src={back}
          alt="Back Image"
          onClick={goBack}
          style={{ cursor: "pointer" }}
        />
      </div>

      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>
            ✖
          </span>
          <div className="lightbox-img">
            <img src={currentImage} alt="Focused" className="lightbox-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Achievements;
