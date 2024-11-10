import React from "react";
import "./StepsTowardPr.css";
import {
  FaBookOpen,
  FaGraduationCap,
  FaBriefcase,
  FaPlane,
} from "react-icons/fa";
import { Helmet } from "react-helmet";

const StepsTowardPr = () => {
  const steps = [
    {
      number: "1",
      title: "Enrol in a course",
      description:
        "Gain access to a course which is medium and long term strategic skills list (MLTSSL)",
      icon: <FaBookOpen className="step-icon" />,
    },
    {
      number: "2",
      title: "Apply for 485 Visa",
      description:
        "After completing the course, the next step is to apply for temporary Graduate visa 485",
      icon: <FaGraduationCap className="step-icon" />,
    },
    {
      number: "3",
      title: "Complete Your Job",
      description:
        "JRP includes 1 year of paid experience from a registered employer and skills leading to migration",
      icon: <FaBriefcase className="step-icon" />,
    },
    {
      number: "4",
      title: "Apply for Migration",
      description:
        "You may be eligible for skilled migration visas as a result of a positive skill assessment",
      icon: <FaPlane className="step-icon" />,
    },
  ];

  return (
    <div className="pr-steps-container">
      <Helmet>
        <title>NZ Education Consultants</title>
        <meta
          name="description"
          content="NZ Education Consultants. Explore world-class education opportunities in Australia "
        />
      </Helmet>
      <div className="pr-steps-content">
        <h1>STEPS TO GET PERMANENT RESIDENT</h1>
        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div key={index} className={`step-box step-box${index + 1}`}>
              {/* <div className="circle">{step.number}</div> */}
              <div>
                <div className="step-box-logo-head">
                  {step.icon}
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      color: "black",
                    }}
                  >
                    {step.title}
                  </div>
                </div>
                <div style={{ color: "black" , fontWeight:"600" }}>{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsTowardPr;
