import React from "react";
import "./Countries.css";
import { Helmet } from "react-helmet";
import ausFlag from "../img/h4.avif";
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

const Australia = () => {
  return (
    <div className="study-country">
      <Helmet>
        <title>NZ Education Consultants - Study in Australia</title>
        <meta
          name="description"
          content="NZ Education Consultants. Explore world-class education opportunities in Australia"
        />
      </Helmet>
      <div
        style={{
          position: "relative",
          borderRadius: "8px",
          overflow: "hidden",
          marginBottom: "24px",
          height: "500px",
        }}
      >
        <img
          src={ausFlag}
          alt="Australia Flag"
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
      </div>
      <h1 className="study-country-title">STUDY IN AUSTRALIA</h1>
      <p className="study-country-description">
        NZ Education Consultants have expertise in education and migration for
        students and the working class in Australia. Our trained and experienced
        staff can help you join your dream course. Our consultancy's successful
        journey of admissions, Temporary Residences, and PRs is proof in itself.
        We work according to your personalized needs since we understand that
        each client's requirement is different. Starting from the admissions
        process, getting your temporary visa, and helping you with your
        Permanent Visa application, NZ Education Consultants are happy to be a
        part of every step you take.
      </p>

      {/* Why Study in Australia Section */}
      <section className="why-australia-section">
        <h2 className="section-title">Why Study in Australia?</h2>
        <div className="why-australia-grid">
          <div className="why-australia-card">
            <FaUniversity className="why-australia-icon" />
            <span>World-class Universities</span>
          </div>
          <div className="why-australia-card">
            <FaGlobe className="why-australia-icon" />
            <span>Diverse & Inclusive Culture</span>
          </div>
          <div className="why-australia-card">
            <FaBook className="why-australia-icon" />
            <span>Wide Range of Courses</span>
          </div>
          <div className="why-australia-card">
            <FaUserGraduate className="why-australia-icon" />
            <span>Post-Study Work Opportunities</span>
          </div>
          <div className="why-australia-card">
            <FaHandshake className="why-australia-icon" />
            <span>Student Support Services</span>
          </div>
          <div className="why-australia-card">
            <FaMapMarkedAlt className="why-australia-icon" />
            <span>Beautiful Cities & Nature</span>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="popular-courses-section">
        <h2 className="section-title">Popular Courses in Australia</h2>
        <ul className="popular-courses-list">
          <li>
            <FaChalkboardTeacher className="course-icon" /> Business &
            Management
          </li>
          <li>
            <FaBook className="course-icon" /> Information Technology
          </li>
          <li>
            <FaUserGraduate className="course-icon" /> Engineering
          </li>
          <li>
            <FaBriefcase className="course-icon" /> Health & Nursing
          </li>
          <li>
            <FaGlobe className="course-icon" /> Hospitality & Tourism
          </li>
          <li>
            <FaUniversity className="course-icon" /> Education & Teaching
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
                Australia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Australia;
