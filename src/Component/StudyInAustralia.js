import React from "react";
import "./StudyInAustralia.css";
import {
  FaUserGraduate,
  FaUserFriends,
  FaBriefcase,
  FaUserTie,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const StudyInAustralia = () => {
  return (
    <div className="study">
      <Helmet>
        <title>NZ Education Consultants</title>
        <meta
          name="description"
          content="NZ Education Consultants. Explore world-class education opportunities in Australia "
        />
      </Helmet>
      <h1 className="study-title">ABOUT US</h1>
      <p className="study-description">
        NZ Education Consultants have expertise in education and migration for
        students and the working class in Australia. Our trained and experienced
        staff can help you join your dream course. Our consultancy’s successful
        journey of admissions, Temporary Residences, and PRs is proof in itself.
        We work according to your personalized needs since we understand that
        each client’s requirement is different. Starting from the admissions
        process, getting your temporary visa, and helping you with your
        Permanent Visa application, NZ Education Consultants are happy to be a part of
        every step you take. We work towards making your process for the
        Australian journey as comfortable as possible.
      </p>
      <div className="study-cards">
        <div className="study-card study-card1">
          <FaUserGraduate className="study-icon" />
          <h2>Student Visa</h2>
          <p>Apply for a student visa to study in Australia.</p>

          <Link to="/student-visa" className="button">
            Student Visa
          </Link>
        </div>
        <div className="study-card study-card2">
          <FaUserFriends className="study-icon" />
          <h2>Student Dependents</h2>
          <p>Visa options for dependents of students in Australia.</p>
          <Link to="/student-dependent" className="button">
            Student Dependents
          </Link>
        </div>
        <div className="study-card study-card3">
          <FaBriefcase className="study-icon" />
          <h2>Graduate Visa</h2>
          <p>Transition from study to work with a graduate visa.</p>
          <Link to="/graduate-visa" className="button">
            Graduate Visa
          </Link>
        </div>
      </div>
      <div style={{ marginTop: "20px" }} className="study-cards">
        <div className="study-card study-card4">
          <FaUserTie className="study-icon" />
          <h2>Parent Visa</h2>
          <p>Visa options for parents of students in Australia.</p>
          <Link to="/parent-visa" className="button">
            Parent Visa
          </Link>
        </div>
        <div className="study-card study-card5">
          <FaHeart className="study-icon" />
          <h2>Partner Visa</h2>
          <p>Visa options for partners of students in Australia.</p>
          <Link to="/partner-visa" className="button">
            Partner Visa
          </Link>
        </div>
        <div className="study-card study-card6">
          <FaGlobe className="study-icon" />
          <h2>Find the Course</h2>
          <p>
            Find the perfect course for your career growth and educational
            advancement.
          </p>
          <Link to="/find-the-course" className="button">
            Find the Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudyInAustralia;
