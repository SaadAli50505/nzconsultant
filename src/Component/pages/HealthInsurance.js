import React from "react";
import healthInsuranceImg from "../img/health-inssurance.jpg";
import bupa from "../img/health-insurance/bupa_logo.jpg";
import nib from "../img/health-insurance/nib-logo.png";
import bualliazepa from "../img/health-insurance/alliaze.webp";
import { Helmet } from "react-helmet";

const HealthInsurance = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Helmet>
        <title>NZ Education Consultants</title>
        <meta
          name="description"
          content="NZ Education Consultants. Explore world-class education opportunities in Australia"
        />
      </Helmet>
      {/* Header Image */}
      <div
        style={{
          backgroundImage: `url(${healthInsuranceImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
            borderRadius: "10px",
            color: "#fff",
          }}
        >
          <h1 style={{ fontSize: "2rem", margin: "0" }}>Health Insurance</h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px", textAlign: "justify" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          About Health Insurance
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          Health insurance is a mandatory requirement for international students
          and visa holders in Australia. It ensures you have access to necessary
          medical services during your stay. At NZ Consultants, we help you:
        </p>

        <ul style={{ fontSize: "1rem", lineHeight: "1.6", marginLeft: "20px" }}>
          <li>Understand different health insurance options</li>
          <li>Choose the right coverage for your needs</li>
          <li>Compare policies and providers</li>
          <li>Complete the application process</li>
          <li>Maintain compliance with visa requirements</li>
        </ul>

        <h2
          style={{
            fontSize: "1.5rem",
            marginTop: "30px",
            marginBottom: "10px",
          }}
        >
          Our Insurance Partners
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              src={bupa}
              alt="BUPA Insurance"
              style={{
                width: "200px",
                height: "100px",
                objectFit: "contain",
              }}
            />
            <h3 style={{ marginTop: "10px" }}>BUPA</h3>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src={nib}
              alt="NIB Insurance"
              style={{
                width: "200px",
                height: "100px",
                objectFit: "contain",
              }}
            />
            <h3 style={{ marginTop: "10px" }}>NIB</h3>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src={bualliazepa}
              alt="Allianz Insurance"
              style={{
                width: "200px",
                height: "100px",
                objectFit: "contain",
              }}
            />
            <h3 style={{ marginTop: "10px" }}>Allianz</h3>
          </div>
        </div>

        <h2
          style={{
            fontSize: "1.5rem",
            marginTop: "30px",
            marginBottom: "10px",
          }}
        >
          Our Services
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          We provide comprehensive support for health insurance needs, including
          Overseas Student Health Cover (OSHC) and Overseas Visitor Health Cover
          (OVHC). Our experienced consultants will guide you through the process
          of selecting and obtaining the appropriate health insurance coverage
          for your stay in Australia. Contact us today to discuss your health
          insurance requirements.
        </p>
      </div>
    </div>
  );
};

export default HealthInsurance;
