import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import StudyInAustralia from "./Component/StudyInAustralia";
import StepsTowardPr from "./Component/StepsTowardPr";
import ClientTrust from "./Component/ClientTrust";
import Footer from "./Component/Footer";
import TopContact from "./Component/TopContact";

// Pages
import StudentVisa from "./Component/pages/StudentVisa";
import StudentDependent from "./Component/pages/StudentDependent";
import GraduateVisa from "./Component/pages/GratuadeVisa";
import ParentVisa from "./Component/pages/ParentVisa";
import PartnerVisa from "./Component/pages/PartnerVisa";
import FindTheCourse from "./Component/pages/FindTheCourse";
import RegionalArea from "./Component/pages/RegionalArea";
import TradeCourses from "./Component/pages/TradeCourses";
import NonTradeCourses from "./Component/pages/NonTradeCourses";
import JRP from "./Component/pages/JRP";
import OtherServices from "./Component/pages/OtherServices";

function App() {
  return (
    <Router>
      <div>
        <TopContact />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>NZ Education Consultants - Home</title>
                  <meta
                    name="description"
                    content="Welcome to NZ Education Consultants. We provide expert advice on studying and migrating to Australia."
                  />
                  <meta
                    name="keywords"
                    content="NZ Education Consultants, study in Australia, migration, education, visa"
                  />
                </Helmet>
                <div id="header">
                  <Header />
                </div>
                <div id="study-in-australia">
                  <StudyInAustralia />
                </div>
                <div id="pr">
                  <StepsTowardPr />
                </div>
                <div id="client">
                  <ClientTrust />
                </div>
              </>
            }
          />
          <Route
            path="/student-visa"
            element={
              <>
                <Helmet>
                  <title>Student Visa - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Information and assistance on obtaining a student visa for Australia."
                  />
                </Helmet>
                <StudentVisa />
              </>
            }
          />
          <Route
            path="/student-dependent"
            element={
              <>
                <Helmet>
                  <title>Student Dependent Visa - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Guidance on getting a dependent visa for students in Australia."
                  />
                </Helmet>
                <StudentDependent />
              </>
            }
          />
          <Route
            path="/graduate-visa"
            element={
              <>
                <Helmet>
                  <title>Graduate Visa - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Advice on applying for a graduate visa in Australia."
                  />
                </Helmet>
                <GraduateVisa />
              </>
            }
          />
          <Route
            path="/parent-visa"
            element={
              <>
                <Helmet>
                  <title>Parent Visa - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Help with parent visa applications for Australia."
                  />
                </Helmet>
                <ParentVisa />
              </>
            }
          />
          <Route
            path="/partner-visa"
            element={
              <>
                <Helmet>
                  <title>Partner Visa - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Support and information on partner visa applications for Australia."
                  />
                </Helmet>
                <PartnerVisa />
              </>
            }
          />
          <Route
            path="/find-the-course"
            element={
              <>
                <Helmet>
                  <title>Find the Course - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Find the right course for your studies in Australia with our assistance."
                  />
                </Helmet>
                <FindTheCourse />
              </>
            }
          />
          <Route
            path="/other-services"
            element={
              <>
                <Helmet>
                  <title>Find the Course - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Find the right course for your studies in Australia with our assistance."
                  />
                </Helmet>
                < OtherServices/>
              </>
            }
          />
          <Route
            path="/pr"
            element={
              <>
                <Helmet>
                  <title>Steps Toward PR - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Learn about the steps towards obtaining permanent residency in Australia."
                  />
                </Helmet>
                <StepsTowardPr />
              </>
            }
          />
          <Route
            path="/regional-areas"
            element={
              <>
                <Helmet>
                  <title>Regional Areas - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Explore regional areas in Australia for study and migration opportunities."
                  />
                </Helmet>
                <RegionalArea />
              </>
            }
          />
          <Route
            path="/trade-courses"
            element={
              <>
                <Helmet>
                  <title>Trade Courses - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Find information about trade courses available in Australia."
                  />
                </Helmet>
                <TradeCourses />
              </>
            }
          />
          <Route
            path="/non-trade-courses"
            element={
              <>
                <Helmet>
                  <title>Non-Trade Courses - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Information on non-trade courses for students in Australia."
                  />
                </Helmet>
                <NonTradeCourses />
              </>
            }
          />
          <Route
            path="/jrp"
            element={
              <>
                <Helmet>
                  <title>Job Ready Program (JRP) - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Details about the Job Ready Program for international students in Australia."
                  />
                </Helmet>
                <JRP />
              </>
            }
          />
        </Routes>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
