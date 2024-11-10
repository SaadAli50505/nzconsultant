import React from 'react';
import './Services.css';
import { FaUserGraduate, FaPlaneDeparture, FaBookOpen } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
const Services = () => {
  return (
    <div className="services">
      <Helmet>
        <title>NZ Education Consultants</title>
        <meta
          name="description"
          content="NZ Education Consultants. Explore world-class education opportunities in Australia "
        />
      </Helmet>
      <h1 className="services-title">Our Services</h1>
      <div className="services-cards">
        <div className="services-card">
          <FaUserGraduate className="services-icon" />
          <h2>Student Visa</h2>
          <p>Get assistance with your student visa application to study abroad.</p>
        </div>
        <div className="services-card">
          <FaPlaneDeparture className="services-icon" />
          <h2>Migrate to Australia</h2>
          <p>Explore opportunities and get help with the migration process to Australia.</p>
        </div>
        <div className="services-card">
          <FaBookOpen className="services-icon" />
          <h2>Find the Course</h2>
          <p>Find the perfect course for your career growth and educational advancement.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
