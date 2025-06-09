import React from "react";
import { Link } from "react-router-dom";
import ausFlag from "./img/flags/austrailia.png";
import canadaFlag from "./img/flags/canada.png";
import cyprusFlag from "./img/flags/cyprus.png";
import georgiaFlag from "./img/flags/georgia.png";
import germanyFlag from "./img/flags/germany.png";
import lithuaniaFlag from "./img/flags/lithuania.png";
import nzFlag from "./img/flags/newzealand.png";
import ukFlag from "./img/flags/uk.png";
import usaFlag from "./img/flags/usa.png";
import "./ContactBarFlags.css";

const countries = [
  { name: "Australia", flag: ausFlag, href: "/australia" },
  { name: "UK", flag: ukFlag, href: "/uk" },
  { name: "Canada", flag: canadaFlag, href: "/canada" },
  { name: "Cyprus", flag: cyprusFlag, href: "/cyprus" },
  { name: "Georgia", flag: georgiaFlag, href: "/georgia" },
  { name: "Germany", flag: germanyFlag, href: "/germany" },
  { name: "Lithuania", flag: lithuaniaFlag, href: "/lithuania" },
  { name: "New Zealand", flag: nzFlag, href: "/newzealand" },
  { name: "USA", flag: usaFlag, href: "/usa" },
];

const ContactBarFlags = () => (
  <div className="contact-bar-flags">
    {countries.map((country) => (
      <Link
        key={country.name}
        to={country.href}
        className="contact-bar-flag-link"
        title={country.name}
      >
        <img
          src={country.flag}
          alt={country.name + " Flag"}
          className="contact-bar-flag-img"
        />
      </Link>
    ))}
  </div>
);

export default ContactBarFlags;
