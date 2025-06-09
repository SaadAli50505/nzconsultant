import React from "react";
import "./EnroleNow.css";
import isana from "./img/affiliations/ISANA-Logo-final.jpg";
import brithish from "./img/affiliations/images.png";
import qeacLogo from "./img/affiliations/qeac-logo.jpg";

const EnroleNow = () => {
  return (
    <div className="enroll-banner">
      <div className="enroll-banner-content enroll-banner-column">
        <h2 className="accreditation-heading">Accreditation & Affiliations</h2>
        <div className="accreditation-logos">
          <img src={isana} alt="MARA Logo" className="accreditation-logo" />
          <img src={brithish} alt="PIERE Logo" className="accreditation-logo" />
          <img src={qeacLogo} alt="QEAC Logo" className="accreditation-logo" />
        </div>
        {/* <div className="enroll-banner-btn-wrapper">
          <a
            className="enroll-banner-btn"
            href="https://wa.me/61451935923"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            ENQUIRE NOW
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default EnroleNow;
