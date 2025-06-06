import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";
import { Helmet } from "react-helmet";
const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <Helmet>
          <title>NZ Education Consultants</title>
          <meta
            name="description"
            content="NZ Education Consultants. Explore world-class education opportunities in Australia "
          />
        </Helmet>
        <h1 style={{ fontSize: "2.5rem", fontFamily: "sans-serif" }}>
          Contact Us
        </h1>
        <footer className="footer">
          {/* Head Office */}
          <div className="footer-section">
            <FaMapMarkerAlt className="footer-icon" />
            <h3>Head Office</h3>
            <p>26 Montacute Rd, Hectorville SA 5073</p>
            <div className="footer-phone-line">
              <FaPhoneAlt className="footer-icon-sm" />
              <span>+61 451 935 923</span>
            </div>
          </div>
          {/* Sub Office 1 */}
          <div className="footer-section">
            <FaMapMarkerAlt className="footer-icon" />
            <h3>Office Branch #1</h3>
            <p>
              Madrianwala Chowk, Opposite, Al - Haadi Resturent, Sargodha Road
              Hafizabad, Punjab Pakistan
            </p>
            <div className="footer-phone-line">
              <FaPhoneAlt className="footer-icon-sm" />
              <span>+92 312 8880804</span>
            </div>
            <div className="footer-phone-line">
              <FaPhoneAlt className="footer-icon-sm" />
              <span>+92 328 5987998</span>
            </div>
          </div>
          {/* Sub Office 2 */}
          <div className="footer-section">
            <FaMapMarkerAlt className="footer-icon" />
            <h3>Office Branch #2</h3>
            <p>College Road, U Bank Basemen, Sheikhupura, Punjab Pakistan</p>
            <div className="footer-phone-line">
              <FaPhoneAlt className="footer-icon-sm" />
              <span>+92 300 4238712</span>
            </div>
          </div>
          {/* WhatsApp, Email */}
          <div className="footer-section">
            <FaWhatsapp className="footer-icon" />
            <h3>Chat via WhatsApp</h3>
            <p>Australia: +61 451 935 923</p>
          </div>
          <div className="footer-section">
            <FaEnvelope className="footer-icon" />
            <h3>Email Us</h3>
            <p>Info@nzconsultants.com.au</p>
          </div>
        </footer>

        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} NZ Education Consultants. All rights
          reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
