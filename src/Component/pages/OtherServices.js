import React from "react";
import findTheServicesImg from "../img/find-the-course.jpg";
import { Helmet } from "react-helmet";
const OtherServices = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header Image */}
      <Helmet>
        <title>NZ Education Consultants</title>
        <meta
          name="description"
          content="NZ Education Consultants. Explore world-class education opportunities in Australia "
        />
      </Helmet>
      <div
        style={{
          backgroundImage: `url(${findTheServicesImg})`,
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
          <h1 style={{ fontSize: "2rem", margin: "0" }}>Other Services</h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px", textAlign: "justify" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          Find the Perfect Services
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          Discover a variety of Services that can help you advance your career
          and achieve your educational goals. Whether you are looking to pursue
          higher education or enhance your skills, we can guide you through the
          process of finding the perfect Services in Australia. Our consultants
          provide personalized advice to match your interests and career
          aspirations with the right educational program. Start your journey
          towards a brighter future today.
        </p>
        {/* Partner Visa Section */}
        <h2
          style={{
            fontSize: "1.5rem",
            marginTop: "30px",
            marginBottom: "10px",
          }}
        >
          Partner Visa
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          Partner visas are designed to allow partners of Australian citizens,
          permanent residents, or eligible New Zealand citizens to live in
          Australia. Our team at NZ Consultants is here to help you understand
          the application process, meet the eligibility criteria, and submit a
          successful application. We offer personalized guidance and support
          every step of the way, ensuring a smooth and stress-free experience.
        </p>
        {/* Parent Visa Section */}
        <h2
          style={{
            fontSize: "1.5rem",
            marginTop: "30px",
            marginBottom: "10px",
          }}
        >
          Parent Visa
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          Parent visas are designed to allow parents of Australian citizens,
          permanent residents, or eligible New Zealand citizens to live in
          Australia. Our team at NZ Consultants is here to help you understand
          the application process, meet the eligibility criteria, and submit a
          successful application. We offer personalized guidance and support
          every step of the way, ensuring a smooth and stress-free experience.
        </p>
      </div>
    </div>
  );
};

export default OtherServices;
