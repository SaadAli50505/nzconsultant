import React from "react";
import "./style.css";
import { Helmet } from "react-helmet";
import civilEng from "../img/non-trade/non-civil-engeenring.jpg";
import eleEng from "../img/non-trade/non-electric-eneenering.jpg";
import constEco from "../img/non-trade/non-construction.jpg";
import nursing from "../img/non-trade/non-nursing.jpg";
import socialWork from "../img/non-trade/non-social-work.jpg";
import teaching from "../img/non-trade/non-teaching.jpg";

const NonTradeCourses = () => {
  const courses = [
    { id: 1, title: "Civil Engineering Draftsperson", image: civilEng },
    {
      id: 2,
      title: "Electrical Engineering Draftsperson",
      image: eleEng,
    },
    { id: 3, title: "Construction Economics", image: constEco },
    { id: 4, title: "Nursing", image: nursing },
    { id: 5, title: "Social Work", image: socialWork },
    { id: 6, title: "Teaching", image: teaching },
  ];

  return (
    <div className="container">
      <Helmet>
        <title>NZ Education Consultants</title>
        <meta
          name="description"
          content="NZ Education Consultants. Explore world-class education opportunities in Australia "
        />
      </Helmet>
      <h1
        className="heading"
        style={{ textAlign: "left", marginLeft: "40px", marginRight: "40px" }}
      >
        What is an Accredited Course?
      </h1>
      <p
        style={{ textAlign: "left", marginLeft: "40px", marginRight: "40px" }}
        className="paragraph"
      >
        A course that has been assessed by a skills assessment body and found to
        have the proper material and structure to pass a skills assessment is
        known as an accredited course. In general, there is no need to provide
        additional evidence pertaining to past schooling or employment. Due to
        this, the process of evaluating your talents may be quick and easy. You
        cannot be certain that a course will satisfy the criteria necessary to
        pass the skills exam if it has not been accredited by the skills
        assessment body. Regarding your training and employment history, you
        might need to provide more supporting paperwork. The precise
        requirements of the skills assessor may not be met if your course is not
        certified.
      </p>
      <h1 className="heading">
        Medium and Long-Term Strategic Skills Courses List
      </h1>
      <p className="paragraph">
        Pathways to study that might satisfy the 2-year course requirement for
        jobs on the Medium and Long-Term Strategic Skills List Civil Engineering
        Draftsperson Electrical Engineering Draftsperson
      </p>
      <div className="grid">
        {courses.map((course) => (
          <div
            key={course.id}
            className="card"
            style={{
              backgroundImage: `url(${course.image})`,
            }}
          >
            <div className="overlay" />
            <span className="text">{course.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NonTradeCourses;
