import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./OurPartner.css";

const partnerData = [
  {
    buildingImage: require("./img/flags/austrailia.png"),
    logo: require("./img/flags/austrailia.png"),
  },
  {
    buildingImage: require("./img/flags/austrailia.png"),
    logo: require("./img/flags/austrailia.png"),
  },
  {
    buildingImage: require("./img/flags/austrailia.png"),
    logo: require("./img/flags/austrailia.png"),
  },
  {
    buildingImage: require("./img/flags/austrailia.png"),
    logo: require("./img/flags/austrailia.png"),
  },
  {
    buildingImage: require("./img/flags/austrailia.png"),
    logo: require("./img/flags/austrailia.png"),
  },
  {
    buildingImage: require("./img/flags/austrailia.png"),
    logo: require("./img/flags/austrailia.png"),
  },
  {
    buildingImage: require("./img/flags/austrailia.png"),
    logo: require("./img/flags/austrailia.png"),
  },
  // ...add more partners
];

const SinglePartner = ({ partner }) => {
  return (
    <div className="partner-card-bg">
      <div
        className="partner-building-bg"
        style={{ backgroundImage: `url(${partner.buildingImage})` }}
      >
        <div className="partner-logo-overlay">
          <img
            src={partner.logo}
            alt="Partner Logo"
            className="partner-logo-img"
          />
        </div>
      </div>
    </div>
  );
};

const OurPartner = () => {
  return (
    <div className="partner-section">
      <h2 className="partner-title">Our Partners</h2>
      <div className="partner-carousel-wrapper">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView="auto"
          centeredSlides={true}
          loop={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          className="partner-swiper"
        >
          {partnerData.map((partner, idx) => (
            <SwiperSlide key={idx} className="partner-slide">
              <SinglePartner partner={partner} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default OurPartner;
