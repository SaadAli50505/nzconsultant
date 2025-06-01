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
          <div className="footer-section">
            <FaPhoneAlt className="footer-icon" />
            <h3>Call Us</h3>
            <p>Australia: +61 451 935 923</p>
          </div>
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
          <div className="footer-section">
            <FaMapMarkerAlt className="footer-icon" />
            <h3>Office Location</h3>
            <p>26 Montacute Rd, Hectorville SA 5073</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
