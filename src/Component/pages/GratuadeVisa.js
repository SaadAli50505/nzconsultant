import React from 'react';
import graduateVisaImg from '../img/gratuade-visa.jpg';
import { Helmet } from 'react-helmet';
const GratuadeVisa = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header Image */}
      <Helmet>
        <title>NZ Education Consultants</title>
        <meta
          name="description"
          content="NZ Education Consultants. Explore world-class education opportunities in Australia "
        />
      </Helmet>
      <div style={{
        backgroundImage: `url(${graduateVisaImg})`,
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
          <h1 style={{ fontSize: '2rem', margin: '0' }}>Graduate Visa</h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px', textAlign: 'justify' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>About Graduate Visa</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          The Graduate Visa allows recent graduates to live, study, and work in Australia temporarily after they have finished their studies. 
          This visa offers a great opportunity to gain valuable work experience in Australia. Our team at NZ Consultants can assist you with the application process, 
          ensuring you meet the eligibility criteria and submit a strong application. We provide personalized support to help you achieve your goals and take the next step in your career.
        </p>
      </div>
    </div>
  );
};

export default GratuadeVisa;
