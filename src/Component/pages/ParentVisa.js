import React from 'react';
import parentVisaImg from '../img/parent-visa.jpg';
import { Helmet } from 'react-helmet';
const ParentVisa = () => {
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
        backgroundImage: `url(${parentVisaImg})`,
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
          <h1 style={{ fontSize: '2rem', margin: '0' }}>Parent Visa</h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px', textAlign: 'justify' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>About Parent Visa</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Parent visas are designed to allow parents of Australian citizens, permanent residents, or eligible New Zealand citizens to live in Australia. 
          Our team at NZ Consultants is here to help you understand the application process, meet the eligibility criteria, and submit a successful application. 
          We offer personalized guidance and support every step of the way, ensuring a smooth and stress-free experience.
        </p>
      </div>
    </div>
  );
};

export default ParentVisa;
