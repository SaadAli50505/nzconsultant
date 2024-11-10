import React from 'react';
import studentVisaImg from '../img/student-visa.jpg';
import { Helmet } from 'react-helmet';
const StudentVisa = () => {
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
        backgroundImage: `url(${studentVisaImg})`,
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
          <h1 style={{ fontSize: '2rem', margin: '0' }}>Student Visa</h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px', textAlign: 'justify' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>About Student Visa</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Applying for a student visa to study in Australia is a straightforward process with the right guidance. 
          Our experienced team at NZ Consultants can assist you through every step, ensuring you meet all the requirements 
          and submit a strong application. Studying in Australia offers numerous opportunities for personal and professional growth, 
          and we are here to help you achieve your educational goals.
        </p>
      </div>
    </div>
  );
};

export default StudentVisa;
