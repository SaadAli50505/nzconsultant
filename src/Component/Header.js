import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-scroll";
import "./Header.css";
import { Helmet } from "react-helmet";

import img1 from "./img/h1.jpg";
// import img2 from "./img/h2.jpg";
import img3 from "./img/h3.jpg";
import img4 from "./img/h4.avif";
// import img5 from "./img/h5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <header className="header">
      <Helmet>
        <title>NZ Education Consultants</title>
        <meta
          name="description"
          content="NZ Education Consultants. Explore world-class education opportunities in Australia "
        />
      </Helmet>
      <Slider {...settings}>
        <div className="slide">
          <img src={img1} alt="NZ Education Consultants" />
          <div className="slide-content">
            <h2>STUDY IN AUSTRALIA</h2>
            <p>
              Explore world-class education opportunities in Australia. <br />
              From top universities to diverse cultural experiences, start your{" "}
              <br />
              journey with our expert guidance.
            </p>
            <Link to="footer" smooth={true} duration={500}>
              <button>Get Free Consultation</button>
            </Link>
          </div>
        </div>
        {/* <div className="slide">
          <img src={img2} alt="NZ Education Consultants" />
          <div className="slide-content">
            <h2>PARTNER VISA</h2>
            <p>
              Join your partner in Australia with ease. Our team will help
              <br /> you navigate the partner visa process, ensuring you and
              <br />
              your loved one can reunite quickly and smoothly.
            </p>
            <Link to="footer" smooth={true} duration={500}>
              <button>Get Free Consultation</button>
            </Link>
          </div>
        </div> */}
        <div className="slide">
          <img src={img3} alt="NZ Education Consultants" />
          <div className="slide-content">
            <h2>Book Free Consultation</h2>
            <p>
              Have questions about your visa options? Book a free
              <br />
              consultation with our experts to discuss your needs and <br />
              find the best pathway for your situation.
            </p>
            <Link to="footer" smooth={true} duration={500}>
              <button>Get Free Consultation</button>
            </Link>
          </div>
        </div>
        <div className="slide">
          <img src={img4} alt="NZ Education Consultants" />
          <div className="slide-content">
            <h2>We are one call away</h2>
            <p>
              Need assistance or have any questions? Our team is just <br />
              a phone call away to provide you with the support and <br />
              guidance you need.
            </p>
            <Link to="footer" smooth={true} duration={500}>
              <button>Get Free Consultation</button>
            </Link>
          </div>
        </div>
        {/* <div className="slide">
          <img src={img5} alt="Migration update" />
          <div className="slide-content">
            <h2>Migration update</h2>
            <p>
              Stay updated with the latest migration news and policies. <br />
              Our experts provide insights and updates to keep you <br />
              informed about any changes.
            </p>
            <Link to="footer" smooth={true} duration={500}>
              <button>Get Free Consultation</button>
            </Link>
          </div>
        </div> */}
        <div className="slide">
          <img src={img6} alt="NZ Education Consultants" />
          <div className="slide-content">
            <h2>Regional study</h2>
            <p>
              Discover the benefits of studying in regional areas of <br />
              Australia. Experience unique opportunities and gain <br />
              valuable skills while enjoying a high-quality education.
            </p>
            <Link to="footer" smooth={true} duration={500}>
              <button>Get Free Consultation</button>
            </Link>
          </div>
        </div>
        <div className="slide">
          <img src={img7} alt="NZ Education Consultants" />
          <div className="slide-content">
            <h2>Skill assessment</h2>
            <p>
              Understand the skill assessment process and ensure <br />
              your qualifications meet the Australian standards. Our <br />
              experts can guide you through each step.
            </p>
            <Link to="footer" smooth={true} duration={500}>
              <button>Get Free Consultation</button>
            </Link>
          </div>
        </div>
      </Slider>
    </header>
  );
};

export default Header;
