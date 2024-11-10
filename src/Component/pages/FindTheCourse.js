import React from 'react';
import findTheCourseImg from '../img/find-the-course.jpg';
import { Helmet } from 'react-helmet';
const FindTheCourse = () => {
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
        backgroundImage: `url(${findTheCourseImg})`,
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
          <h1 style={{ fontSize: '2rem', margin: '0' }}>Find the Course</h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px', textAlign: 'justify' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Find the Perfect Course</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Discover a variety of courses that can help you advance your career and achieve your educational goals. 
          Whether you are looking to pursue higher education or enhance your skills, we can guide you through the process 
          of finding the perfect course in Australia. Our consultants provide personalized advice to match your interests and 
          career aspirations with the right educational program. Start your journey towards a brighter future today.
        </p>
      </div>
    </div>
  );
};

export default FindTheCourse;
