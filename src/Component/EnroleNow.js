import React from "react";
import "./EnroleNow.css";

const EnroleNow = () => {
  return (
    <div className="enroll-banner">
      <div className="enroll-banner-left">
        <div className="enroll-banner-content">
          <div className="enroll-banner-text">
            Entrust us for a complete Education and migration consulting
            services.
            <br />
            <span className="enroll-banner-bold">
              More Details{" "}
              <span className="enroll-banner-call">PLEASE CALL</span> +61 451
              935 923
            </span>
          </div>
        </div>
      </div>
      <div className="enroll-banner-right">
        <a
          className="enroll-banner-btn"
          href="https://wa.me/61451935923"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "inline-block" }}
        >
          ENQUIRE NOW
        </a>
      </div>
    </div>
  );
};

export default EnroleNow;
