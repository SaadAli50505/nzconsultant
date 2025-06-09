import React from "react";
import skillsAssessmentImg from "../img/skill-assesment.jpg";
import { Helmet } from "react-helmet";

const SkillAssessment = () => {
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
          backgroundImage: `url(${skillsAssessmentImg})`,
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
          <h1 style={{ fontSize: "2rem", margin: "0" }}>Skills Assessment</h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px", textAlign: "justify" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          About Skills Assessment
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          Skills assessment is a crucial step in the migration process for many
          visa categories in Australia. It involves evaluating your
          qualifications, work experience, and skills against Australian
          standards. Our team at NZ Consultants provides expert guidance
          throughout the skills assessment process, helping you:
        </p>

        <ul style={{ fontSize: "1rem", lineHeight: "1.6", marginLeft: "20px" }}>
          <li>
            Identify the appropriate assessing authority for your occupation
          </li>
          <li>Prepare and submit required documentation</li>
          <li>Navigate the assessment process efficiently</li>
          <li>Address any issues that may arise during assessment</li>
        </ul>

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
          We offer comprehensive support for skills assessment across various
          occupations and industries. Our experienced consultants will work
          closely with you to ensure your application meets all requirements and
          has the best chance of success. Contact us today to discuss your
          skills assessment needs and how we can help.
        </p>
      </div>
    </div>
  );
};

export default SkillAssessment;
