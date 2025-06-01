import React, { useRef, useEffect } from "react";
import "./OurPartner.css";

const partnerLogos = [
  require("./img/flags/germany.png"),
  require("./img/flags/germany.png"),
  require("./img/flags/germany.png"),
  require("./img/flags/germany.png"),
  require("./img/flags/germany.png"),
  require("./img/flags/germany.png"),
  require("./img/flags/germany.png"),
  require("./img/flags/germany.png"),
  require("./img/flags/germany.png"),
  require("./img/flags/germany.png"),
  require("./img/flags/germany.png"),
  require("./img/flags/germany.png"),
  require("./img/flags/germany.png"),
];

const OurPartner = () => {
  const carouselRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = setInterval(() => {
      if (carousel) {
        carousel.scrollLeft += scrollStep;
        scrollAmount += scrollStep;
        // Loop back to start
        if (
          carousel.scrollLeft + carousel.offsetWidth >=
          carousel.scrollWidth
        ) {
          carousel.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    }, 20);
    return () => clearInterval(scrollInterval);
  }, []);

  // Manual scroll (arrows)
  const scroll = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const scrollBy = carousel.offsetWidth / 2;
    carousel.scrollBy({
      left: direction === "left" ? -scrollBy : scrollBy,
      behavior: "smooth",
    });
  };

  return (
    <div className="partner-section">
      <h2 className="partner-title">Our Partners</h2>
      <div className="partner-carousel-wrapper">
        <button className="partner-arrow left" onClick={() => scroll("left")}>
          &#8592;
        </button>
        <div className="partner-carousel" ref={carouselRef}>
          {partnerLogos.map((logo, idx) => (
            <div className="partner-logo-card" key={idx}>
              <img
                src={logo}
                alt={`Partner ${idx + 1}`}
                className="partner-logo-img"
              />
            </div>
          ))}
        </div>
        <button className="partner-arrow right" onClick={() => scroll("right")}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default OurPartner;
