import React, { useState } from "react";
import "./style.css";
import { FaUserGraduate, FaPlaneDeparture, FaBookOpen  , FaAccusoft} from 'react-icons/fa';
import { Helmet } from "react-helmet";
const JRP = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const tabContent = [
    {
      title: "Provisional Skills",
      content1:
        "This skills exam verifies that you studied in Australia and received a trade qualification, that you have an IELTS score of at least 6 in all areas of English, and that you have completed at least 360 hours of work experience or a vocational placement in Australia. Most educational institutions in Australia make sure that you complete a work placement as part of the course if you decide to pursue a trade certification there.",
      content2:
        "Successful candidates might additionally need to demonstrate that they have the necessary experience to carry out the duties of their specific position.",
    },
    {
      title: "Employment",
      content1:
        "For people who want to apply for permanent migration to Australia, the Job Ready Program's following section (Job Ready Employment) is helpful. In order to participate in the Job Ready Program, candidates must secure paid employment in their desired field and submit documentation to TRA. Due to the greater number of career alternatives, many candidates opt to finish their employment in regional Australia.",
      content2:
        "The candidate can start working for the requisite 12 months (1725 hours) when TRA confirms the employment is suitable.",
    },
    {
      title: "Workplace Assessment",
      content1:
        "An candidate is qualified to proceed to the workplace assessment, the third phase in their Job Ready Program, after they have completed half of the necessary 1725 hours of needed employment over a minimum of 6 months. This evaluation happens at the applicant's place of employment. Therefore, if the candidate is a mechanic, the workplace evaluation happens at the shop where he works.",
      content2:
        "The assessor determines during this evaluation if the candidate has the necessary skills for the position in Australia. An applicant may continue to work for the employer and take another workplace assessment at a later time if they are unable to demonstrate to the Assessor that they can perform at the necessary skill level.",
    },
    {
      title: "Final Assessment",
      content1:
        "Only once the candidate has worked for pay for at least 1725 hours across a minimum of 12 months may the final evaluation take place. Applicants must provide proof of employment, such as paystubs, group certificates, statements of employment, and bank statements that demonstrate money entering the account, in order to be considered for this.",
      content2:
        "The candidate can then submit an independent skilled migration visa application after having completed the Department of Immigration and Border Protection's need for a skills evaluation based on the 1725 hours of documented paid employment.",
    },
    // {
    //   title: "JRP COST",
    //   content1:
    //     "JRP payable fees Assessment of Provisional Skills: $200 Verification of Employment - $400 A workplace assessment - $2540 Final Evaluation- $65",
    //   content2:
    //     "Other fees DIBP Visa Application Fee for Graduate Temporary Visa (485) - $1755.22* The cost shown above is up to date as of September  2022, but is liable to change. If using a credit card, add the credit card processing charge.",
    // },
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
        Job Ready Program
      </h1>
      <p
        style={{ textAlign: "left", marginLeft: "40px", marginRight: "40px" }}
        className="paragraph"
      >
        The JRP is a four-stairs employment based skills assessment for
        international university graduates seeking skills assessment for
        migration purposes. It is commonly used for those unable to pass their
        competency assessment for general skilled migration purposes, for those
        notifying against applying permanently in Australia. The JRP allows
        applicants to demonstrate their skills and willingness to work in an
        Australian workplace before applying to migrate to Australia. JRP allows
        applicants to demonstrate their skills and job readiness in an
        Australian workplace, before they apply for migration to Australia.
      </p>
      <h1
        className="heading"
        style={{ textAlign: "left", marginLeft: "40px", marginRight: "40px" }}
      >
        Eligibility for the Job Ready Program
      </h1>
      <p
        style={{ textAlign: "left", marginLeft: "40px", marginRight: "40px" }}
        className="paragraph"
      >
        completed studies for a trade qualification in Australia <br />
        1. studied for an occupation on the Skilled Occupation List <br /> 2.
        TRA is the profession's skills assessor <br /> 3. completed at least 360
        hours of employment or training in your sector in Australia <br /> 4.
        eligible to apply for a temporary graduate visa (subclass 485) <br />{" "}
        Achieve a minimum overall IELTS score of 6.
      </p>

      <div className="tab-container">
        <div className="tabs">
          {tabContent.map((tab, index) => (
            <button
              key={index}
              className={`tab ${activeTab === index + 1 ? "active" : ""}`}
              onClick={() => handleTabClick(index + 1)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tab-content">{tabContent[activeTab - 1].content1}</div>
        <div className="tab-content">{tabContent[activeTab - 1].content2}</div>
        <div className="tab-content">{tabContent[activeTab - 1].content3}</div>
      </div>
      <div className="services-cards">
        <div className="services-card">
          <FaUserGraduate className="services-icon" />
          <h2>General Skilled Migration</h2>
          <p>General Skilled Migration Visas are permanent visas to Australia that do not require you to have an employer to sponsor your visa. These visas include – Skilled Independent (Subclass 189), State Nominated (Subclass 190) or Skilled Regional (Subclass 491)</p>
        </div>
        <div className="services-card">
          <FaPlaneDeparture className="services-icon" />
          <h2>Graduate Visa</h2>
          <p>The Graduate Visa (Subclass 485) allows recent university graduates and some vocational graduates to remain in Australia and work after their studies have finished. At any stage throughout the temporary Graduate Visa, visa holders can apply for another permanent visa.</p>
        </div>
        <div className="services-card">
          <FaBookOpen className="services-icon" />
          <h2>Check Eligibility</h2>
          <p>To apply for general skilled migration visas, you must first pass a skills assessment and eligibility test. The eligibility test measures how desirable you are to the Australian Government by measuring such things as your age, education, work experience and English ability</p>
        </div>
        <div className="services-card">
          <FaAccusoft className="services-icon" />
          <h2>Skill Assessment</h2>
          <p>Before submitting an application for a General Skilled Migration Visa (Skilled Independent and State Sponsored), applicants must get a favorable skills evaluation. Since the aforementioned programs have earned accreditation from the skill assessor, no prior job experience is necessary..</p>
        </div>
      </div>
    </div>
  );
};

export default JRP;
