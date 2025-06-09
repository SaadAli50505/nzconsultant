import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./OurPartner.css";

const partnerData = [
  //Austrailia
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/Southern Cross/building.jpeg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/Southern Cross/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/Alphacrucis College/building.jpeg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/Alphacrucis College/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/Nova Anglia/building.jpeg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/Nova Anglia/logo.jpeg"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/UBSS/building.jpg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/UBSS/logo.png"),
  },
  //UK
  {
    buildingImage: require("./img/UNIVERSITIES/UK/de montfort uni/building.jpg"),
    logo: require("./img/UNIVERSITIES/UK/de montfort uni/logo.webp"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/UK/Bloomsbury/building.jpg"),
    logo: require("./img/UNIVERSITIES/UK/Bloomsbury/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/UK/uclan/building.jpeg"),
    logo: require("./img/UNIVERSITIES/UK/uclan/logo.avif"),
  },
  //Cyprus
  {
    buildingImage: require("./img/UNIVERSITIES/cyprus/neapolis uni pafos/building.jpeg"),
    logo: require("./img/UNIVERSITIES/cyprus/neapolis uni pafos/logo.jpeg"),
  },
  //Austrailia
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/AHMI/building.jpeg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/AHMI/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/AIBT/building.webp"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/AIBT/logo.jpg"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/IVORY institute/building.jpeg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/IVORY institute/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/OBAN college/building.jpg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/OBAN college/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/OCEANIA/building.avif"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/OCEANIA/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/REEACH/building.jpg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/REEACH/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/SITS/building.jpeg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/SITS/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/VIC/building.webp"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/VIC/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/austrailian college of skills and education/building.jpg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/austrailian college of skills and education/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/bentley college/building.jpg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/bentley college/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/britts college/building.png"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/britts college/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/central australian college/building.png"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/central australian college/logo.jpeg"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/datum college/building.jpg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/datum college/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/hospitality training academy/building.jpg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/hospitality training academy/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/laurus/building.jpg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/laurus/logo.avif"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/macallan college/building.jpeg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/macallan college/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/new england college/building.png"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/new england college/logo.jpeg"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/nortwest/building.jpg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/nortwest/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/novus/building.jpg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/novus/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/oceania polytecnic institute of education/bulding.jpg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/oceania polytecnic institute of education/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/spencer/building.jpg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/spencer/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/strathfeild college austrailia/building.webp"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/strathfeild college austrailia/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/unity school of education/building.webp"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/unity school of education/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/AUSTRAILIA/woodstock/building.jpeg"),
    logo: require("./img/UNIVERSITIES/AUSTRAILIA/woodstock/logo.png"),
  },
  //Cyprus
  {
    buildingImage: require("./img/UNIVERSITIES/cyprus/CDA/building.jpg"),
    logo: require("./img/UNIVERSITIES/cyprus/CDA/logo.jpg"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/cyprus/EMU cyprus/building.jpg"),
    logo: require("./img/UNIVERSITIES/cyprus/EMU cyprus/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/cyprus/american college/building.webp"),
    logo: require("./img/UNIVERSITIES/cyprus/american college/logo.jpeg"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/cyprus/inter napa college/building.jpeg"),
    logo: require("./img/UNIVERSITIES/cyprus/inter napa college/logo.png"),
  },
  {
    buildingImage: require("./img/UNIVERSITIES/cyprus/mesoyios college/building.jpg"),
    logo: require("./img/UNIVERSITIES/cyprus/mesoyios college/logo.jpeg"),
  },
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
            delay: 1500,
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
