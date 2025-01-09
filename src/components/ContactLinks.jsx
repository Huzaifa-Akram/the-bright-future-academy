import "./contactLinks.css";
import whatsapp from "../assets/whatsapp.svg";
import facebook from "../assets/fb.svg";
import instagram from "../assets/insta.svg";
import tiktok from "../assets/tiktok.svg";
import gmail from "../assets/gmail.svg";

function ContactLinks() {
  return (
    <div className="contact-container">
      <div className="contact-links">
        <div className="img-container">
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="whatsapp" />
          </a>
        </div>
        <div className="img-container">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
        <div className="img-container">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <div className="img-container">
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
            <img src={tiktok} alt="tiktok" />
          </a>
        </div>
        <div className="img-container">
          <a href="mailto: " target="_blank" rel="noreferrer">
            <img src={gmail} alt="gmail" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLinks;
