import React from "react";
import "./Countries.css";
import { Helmet } from "react-helmet";
import usaFlag from "../img/flags/usa.png";
import {
  FaUniversity,
  FaGlobe,
  FaBook,
  FaUserGraduate,
  FaHandshake,
  FaMapMarkedAlt,
  FaChalkboardTeacher,
  FaBriefcase,
} from "react-icons/fa";

const USA = () => {
  return (
    <div className="study-country">
      <Helmet>
        <title>NZ Education Consultants - Study in USA</title>
        <meta
          name="description"
          content="NZ Education Consultants. Explore world-class education opportunities in the United States"
        />
      </Helmet>
      <div
        style={{
          position: "relative",
          borderRadius: "8px",
          overflow: "hidden",
          marginBottom: "24px",
          height: "300px",
        }}
      >
        <img
          src={usaFlag}
          alt="USA Flag"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "fill",
            opacity: 1,
            zIndex: 0,
          }}
        />
        {/* Black overlay for dark effect */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.55)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <h1
          className="study-country-title"
          style={{
            position: "relative",
            color: "#fff",
            padding: "125px 0",
            borderRadius: "8px",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            zIndex: 2,
            margin: 0,
            background: "transparent",
          }}
        >
          STUDY IN UNITED STATES
        </h1>
      </div>
      <p className="study-country-description">
        NZ Education Consultants are experts in guiding students through their
        educational journey in the United States. Our experienced team provides
        comprehensive support for university admissions, visa applications, and
        post-study opportunities. We understand that each student's goals are
        unique, and we tailor our services to meet your specific needs. From
        selecting the right course and university to securing your student visa
        and planning your future career, we're here to support you every step of
        the way.
      </p>

      {/* Why Study in USA Section */}
      <section className="why-australia-section">
        <h2 className="section-title">Why Study in the USA?</h2>
        <div className="why-australia-grid">
          <div className="why-australia-card">
            <FaUniversity className="why-australia-icon" />
            <span>Top-Ranked Universities</span>
          </div>
          <div className="why-australia-card">
            <FaGlobe className="why-australia-icon" />
            <span>Global Career Opportunities</span>
          </div>
          <div className="why-australia-card">
            <FaBook className="why-australia-icon" />
            <span>Cutting-Edge Research</span>
          </div>
          <div className="why-australia-card">
            <FaUserGraduate className="why-australia-icon" />
            <span>Flexible Study Options</span>
          </div>
          <div className="why-australia-card">
            <FaHandshake className="why-australia-icon" />
            <span>Vibrant Campus Life</span>
          </div>
          <div className="why-australia-card">
            <FaMapMarkedAlt className="why-australia-icon" />
            <span>Diverse Culture & Locations</span>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="popular-courses-section">
        <h2 className="section-title">Popular Courses in the USA</h2>
        <ul className="popular-courses-list">
          <li>
            <FaChalkboardTeacher className="course-icon" /> Business &
            Management
          </li>
          <li>
            <FaBook className="course-icon" /> Computer Science
          </li>
          <li>
            <FaUserGraduate className="course-icon" /> Engineering
          </li>
          <li>
            <FaBriefcase className="course-icon" /> Health Sciences
          </li>
          <li>
            <FaGlobe className="course-icon" /> Social Sciences
          </li>
          <li>
            <FaUniversity className="course-icon" /> Arts & Humanities
          </li>
        </ul>
      </section>

      {/* How We Help Section */}
      <section className="how-we-help-section">
        <h2 className="section-title">How NZ Education Consultants Help You</h2>
        <div className="how-we-help-grid">
          <div className="how-we-help-card">
            <span className="help-step">1</span>
            <div>
              <strong>Personalized Counseling</strong>
              <p>
                We assess your profile and guide you to the best course and
                university for your goals.
              </p>
            </div>
          </div>
          <div className="how-we-help-card">
            <span className="help-step">2</span>
            <div>
              <strong>Application & Admission</strong>
              <p>
                We help you prepare and submit your application, ensuring all
                documents are in order.
              </p>
            </div>
          </div>
          <div className="how-we-help-card">
            <span className="help-step">3</span>
            <div>
              <strong>Visa Guidance</strong>
              <p>
                Our experts assist you in preparing and lodging your student
                visa application.
              </p>
            </div>
          </div>
          <div className="how-we-help-card">
            <span className="help-step">4</span>
            <div>
              <strong>Pre-Departure & Post-Arrival</strong>
              <p>
                We provide orientation and ongoing support to help you settle in
                the USA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default USA;
