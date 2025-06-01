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
import OurPartner from "./Component/OurPartner";
import EnroleNow from "./Component/EnroleNow";

// Country Pages
import Australia from "./Component/countries/Australia";
import UK from "./Component/countries/UK";
import NewZealand from "./Component/countries/NewZealand";
import Germany from "./Component/countries/Germany";
import Cyprus from "./Component/countries/Cyprus";
import Canada from "./Component/countries/Canada";
import USA from "./Component/countries/USA";
import Georgia from "./Component/countries/Georgia";
import Lithuania from "./Component/countries/Lithuania";

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
                <div id="our-partner">
                  <OurPartner />
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
                  <title>
                    Student Dependent Visa - NZ Education Consultants
                  </title>
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
                <OtherServices />
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
                  <title>
                    Job Ready Program (JRP) - NZ Education Consultants
                  </title>
                  <meta
                    name="description"
                    content="Details about the Job Ready Program for international students in Australia."
                  />
                </Helmet>
                <JRP />
              </>
            }
          />
          {/* Country Routes */}
          <Route
            path="/australia"
            element={
              <>
                <Helmet>
                  <title>Study in Australia - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Explore world-class education opportunities in Australia with NZ Education Consultants."
                  />
                </Helmet>
                <Australia />
              </>
            }
          />
          <Route
            path="/uk"
            element={
              <>
                <Helmet>
                  <title>Study in UK - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Explore world-class education opportunities in the United Kingdom with NZ Education Consultants."
                  />
                </Helmet>
                <UK />
              </>
            }
          />
          <Route
            path="/newzealand"
            element={
              <>
                <Helmet>
                  <title>Study in New Zealand - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Explore world-class education opportunities in New Zealand with NZ Education Consultants."
                  />
                </Helmet>
                <NewZealand />
              </>
            }
          />
          <Route
            path="/germany"
            element={
              <>
                <Helmet>
                  <title>Study in Germany - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Explore world-class education opportunities in Germany with NZ Education Consultants."
                  />
                </Helmet>
                <Germany />
              </>
            }
          />
          <Route
            path="/cyprus"
            element={
              <>
                <Helmet>
                  <title>Study in Cyprus - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Explore world-class education opportunities in Cyprus with NZ Education Consultants."
                  />
                </Helmet>
                <Cyprus />
              </>
            }
          />
          <Route
            path="/canada"
            element={
              <>
                <Helmet>
                  <title>Study in Canada - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Explore world-class education opportunities in Canada with NZ Education Consultants."
                  />
                </Helmet>
                <Canada />
              </>
            }
          />
          <Route
            path="/usa"
            element={
              <>
                <Helmet>
                  <title>Study in USA - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Explore world-class education opportunities in the United States with NZ Education Consultants."
                  />
                </Helmet>
                <USA />
              </>
            }
          />
          <Route
            path="/georgia"
            element={
              <>
                <Helmet>
                  <title>Study in Georgia - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Explore world-class education opportunities in Georgia with NZ Education Consultants."
                  />
                </Helmet>
                <Georgia />
              </>
            }
          />
          <Route
            path="/lithuania"
            element={
              <>
                <Helmet>
                  <title>Study in Lithuania - NZ Education Consultants</title>
                  <meta
                    name="description"
                    content="Explore world-class education opportunities in Lithuania with NZ Education Consultants."
                  />
                </Helmet>
                <Lithuania />
              </>
            }
          />
        </Routes>
        <div id="enroll-now">
          <EnroleNow />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
