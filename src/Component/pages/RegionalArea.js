import React from 'react';
import regionalAreaImg from '../img/regional-area.jpg';
import { Helmet } from 'react-helmet';
const RegionalArea = () => {
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
        backgroundImage: `url(${regionalAreaImg})`,
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
          <h1 style={{ fontSize: '2rem', margin: '0' }}>Regional Area</h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px', textAlign: 'justify' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Living and Studying in Regional Areas</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Discover the unique opportunities available in regional areas of Australia. These regions offer a diverse range of educational institutions, 
          a high quality of life, and a welcoming community environment. Studying in a regional area can provide a more relaxed lifestyle 
          and access to unique cultural and natural experiences. Additionally, there are often specific visa pathways and incentives for students 
          who choose to live and study in these areas. Explore your options and consider the benefits of a regional education experience in Australia.
        </p>
      </div>
    </div>
  );
};

export default RegionalArea;
