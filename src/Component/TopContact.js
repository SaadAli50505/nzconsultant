import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./TopContact.css"; // Import the CSS file
import { Helmet } from "react-helmet";
const TopContact = () => {
  return (
    <div className="top-contact">
      <Helmet>
        <title>NZ Education Consultants</title>
        <meta
          name="description"
          content="NZ Education Consultants. Explore world-class education opportunities in Australia "
        />
      </Helmet>
      <div className="contact-item">
        <FaPhoneAlt />
        <div className="contact-text">Call Us: +61 451 935 923</div>
      </div>
      <div className="contact-item">
        <FaWhatsapp />
        <div className="contact-text">WhatsApp: +61 451 935 923</div>
      </div>
      <div className="contact-item">
        <FaEnvelope />
        <div className="contact-text">Info@nzconsultants.com.au</div>
      </div>
    </div>
  );
};

export default TopContact;
