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
          <a
            href="https://wa.me/+923338505850"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="whatsapp" />
          </a>
        </div>
        <div className="img-container">
          <a
            href="https://www.facebook.com/share/19pt25wcKg/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
        </div>
        <div className="img-container">
          <a
            href="https://www.instagram.com/the_bright_future_ielts_acd?fbclid=IwY2xjawHuQwJleHRuA2FlbQIxMAABHSkCeXf52CZhFj0otmPxdvalJM8-bhYAUy1tcABsWSuM06tyI14f_CRL5g_aem_djfegB7T6G5lejY7RsRqiQ"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <div className="img-container">
          <a
            href="https://www.tiktok.com/@ieltsandlifewithshahzaib?fbclid=IwY2xjawHuQ5BleHRuA2FlbQIxMAABHVlERIhj1TNiezCfdi1kDwnViEea_NCdUCGlxK6Onh-E8UosbpVP8L8Tdw_aem_BUtSERxabERu-DtwhhFekg"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tiktok} alt="tiktok" />
          </a>
        </div>
        <div className="img-container">
          <a
            href="mailto:thebrightfutureieltsacademy@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmail} alt="gmail" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLinks;
