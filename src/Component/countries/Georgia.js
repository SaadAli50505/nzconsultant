import React from "react";
import "./Countries.css";
import {
  FaUserGraduate,
  FaUserFriends,
  FaBriefcase,
  FaUserTie,
  FaGlobe,
  FaHeart,
  FaUniversity,
  FaBook,
  FaHandshake,
  FaMapMarkedAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import georgiaFlag from "../img/flags/georgia.png";

const Georgia = () => {
  return (
    <div className="study-country">
      <Helmet>
        <title>NZ Education Consultants - Study in Georgia</title>
        <meta
          name="description"
          content="NZ Education Consultants. Explore world-class education opportunities in Georgia"
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
          src={georgiaFlag}
          alt="Georgia Flag"
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
          STUDY IN GEORGIA
        </h1>
      </div>
      <p className="study-country-description">
        NZ Education Consultants are experts in guiding students through their
        educational journey in Georgia. Our experienced team provides
        comprehensive support for university admissions, visa applications, and
        post-study opportunities. We understand that each student's goals are
        unique, and we tailor our services to meet your specific needs. From
        selecting the right course and university to securing your student visa
        and planning your future career, we're here to support you every step of
        the way.
      </p>
      <section className="why-australia-section">
        <h2 className="section-title">Why Study in Georgia?</h2>
        <div className="why-australia-grid">
          <div className="why-australia-card">
            <FaUniversity className="why-australia-icon" />
            <span>Affordable Tuition Fees</span>
          </div>
          <div className="why-australia-card">
            <FaGlobe className="why-australia-icon" />
            <span>Internationally Recognized Degrees</span>
          </div>
          <div className="why-australia-card">
            <FaBook className="why-australia-icon" />
            <span>English-Taught Programs</span>
          </div>
          <div className="why-australia-card">
            <FaUserGraduate className="why-australia-icon" />
            <span>Growing International Student Community</span>
          </div>
          <div className="why-australia-card">
            <FaHandshake className="why-australia-icon" />
            <span>Safe & Friendly Environment</span>
          </div>
          <div className="why-australia-card">
            <FaMapMarkedAlt className="why-australia-icon" />
            <span>Rich History & Culture</span>
          </div>
        </div>
      </section>
      <section className="popular-courses-section">
        <h2 className="section-title">Popular Courses in Georgia</h2>
        <ul className="popular-courses-list">
          <li>
            <FaChalkboardTeacher className="course-icon" /> Medicine
          </li>
          <li>
            <FaBook className="course-icon" /> Business & Management
          </li>
          <li>
            <FaUserGraduate className="course-icon" /> Engineering
          </li>
          <li>
            <FaBriefcase className="course-icon" /> Computer Science
          </li>
          <li>
            <FaGlobe className="course-icon" /> Tourism & Hospitality
          </li>
          <li>
            <FaUniversity className="course-icon" /> Social Sciences
          </li>
        </ul>
      </section>
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
                Georgia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Georgia;
