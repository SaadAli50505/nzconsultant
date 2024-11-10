import React from 'react';
import studentDependentImg from '../img/student-dependent.jpg';
import { Helmet } from 'react-helmet';
const StudentDependent = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Helmet>
        <title>NZ Education Consultants</title>
        <meta
          name="description"
          content="NZ Education Consultants. Explore world-class education opportunities in Australia "
        />
      </Helmet>
      {/* Header Image */}
      <div style={{
        backgroundImage: `url(${studentDependentImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
          borderRadius: '10px',
          color: '#fff'
        }}>
          <h1 style={{ fontSize: '2rem', margin: '0' }}>Student Dependents</h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px', textAlign: 'justify' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>About Student Dependents</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Visa options for dependents of students in Australia are available to ensure families can stay together while pursuing their educational goals. 
          Our team at NZ Consultants is here to help you navigate the application process, understand the requirements, and ensure a smooth and successful submission. 
          We provide personalized assistance tailored to your specific needs, making the process as easy and stress-free as possible.
        </p>
      </div>
    </div>
  );
};

export default StudentDependent;
