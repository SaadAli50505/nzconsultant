import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./img/logo/Screenshot 2024-09-22 102007.png";
import { Helmet } from "react-helmet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    services: false,
    consultancy: false,
    pathway: false,
    tradeCourses: false, // State for the third-level dropdown
  });

  const dropdownRefs = {
    services: useRef(null),
    consultancy: useRef(null),
    pathway: useRef(null),
    tradeCourses: useRef(null), // Ref for the third-level dropdown
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (dropdown) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  const closeDropdown = (dropdown, e) => {
    if (
      dropdownRefs[dropdown].current &&
      !dropdownRefs[dropdown].current.contains(e.target)
    ) {
      setIsDropdownOpen((prevState) => ({
        ...prevState,
        [dropdown]: false,
      }));
    }
  };

  useEffect(() => {
    document.addEventListener("click", (e) => closeDropdown("services", e));
    document.addEventListener("click", (e) => closeDropdown("consultancy", e));
    document.addEventListener("click", (e) => closeDropdown("pathway", e));
    document.addEventListener("click", (e) => closeDropdown("tradeCourses", e)); // Add event listener for the third-level dropdown
    return () => {
      document.removeEventListener("click", (e) =>
        closeDropdown("services", e)
      );
      document.removeEventListener("click", (e) =>
        closeDropdown("consultancy", e)
      );
      document.removeEventListener("click", (e) => closeDropdown("pathway", e));
      document.removeEventListener("click", (e) =>
        closeDropdown("tradeCourses", e)
      ); // Remove event listener for the third-level dropdown
    };
  }, []);

  return (
    <nav className="navbar">
      <Helmet>
        <title>NZ Education Consultants</title>
        <meta
          name="description"
          content="NZ Education Consultants. Explore world-class education opportunities in Australia "
        />
      </Helmet>
      <div className="navbar-logo">
        <img className="logo" src={logo} alt="NZ Education Consultants" />
      </div>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li className="navbar-item">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li className="navbar-item dropdown" ref={dropdownRefs.consultancy}>
          <div onClick={() => toggleDropdown("consultancy")}>
            Consultancy Services &#x25BC;
          </div>
          {isDropdownOpen.consultancy && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/find-the-course" onClick={() => setIsOpen(false)}>
                  Find A Course
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/regional-areas" onClick={() => setIsOpen(false)}>
                  Regional Areas
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="navbar-item dropdown" ref={dropdownRefs.pathway}>
          <div onClick={() => toggleDropdown("pathway")}>Pathway Programs &#x25BC;</div>
          {isDropdownOpen.pathway && (
            <ul className="dropdown-menu">
              <li
                className="dropdown-item dropdown"
                ref={dropdownRefs.tradeCourses}
              >
                <div onClick={() => toggleDropdown("tradeCourses")}>
                  Trade Courses &#x25BC;
                </div>
                {isDropdownOpen.tradeCourses && (
                  <ul className="dropdown-menu-sub">
                    <li className="dropdown-item">
                      <Link
                        to="/trade-courses"
                        onClick={() => setIsOpen(false)}
                      >
                        Automotive
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link
                        to="/trade-courses"
                        onClick={() => setIsOpen(false)}
                      >
                        Carpentry
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link
                        to="/trade-courses"
                        onClick={() => setIsOpen(false)}
                      >
                        Bricklaying
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link
                        to="/trade-courses"
                        onClick={() => setIsOpen(false)}
                      >
                        Commercial Cookery
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link
                        to="/trade-courses"
                        onClick={() => setIsOpen(false)}
                      >
                        Painting and Decorating
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link
                        to="/trade-courses"
                        onClick={() => setIsOpen(false)}
                      >
                        Solid Plastering
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link
                        to="/trade-courses"
                        onClick={() => setIsOpen(false)}
                      >
                        Wall & Floor Tiling
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link
                        to="/trade-courses"
                        onClick={() => setIsOpen(false)}
                      >
                        All Trade Courses
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="dropdown-item">
                <Link to="/non-trade-courses" onClick={() => setIsOpen(false)}>
                  Non Trade Courses
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/jrp" onClick={() => setIsOpen(false)}>
                  JRP
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="navbar-item dropdown" ref={dropdownRefs.services}>
          <div onClick={() => toggleDropdown("services")}>Services &#x25BC;</div>
          {isDropdownOpen.services && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/student-visa" onClick={() => setIsOpen(false)}>
                  Student Visa
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/student-dependent" onClick={() => setIsOpen(false)}>
                  Student Dependent
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/graduate-visa" onClick={() => setIsOpen(false)}>
                  Graduate Visa
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/parent-visa" onClick={() => setIsOpen(false)}>
                  Parent Visa
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/partner-visa" onClick={() => setIsOpen(false)}>
                  Partner Visa
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/other-services" onClick={() => setIsOpen(false)}>
                  Other Services
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="navbar-item">
          <Link
            to="pr"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Permanent Resident
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="footer"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            <button className="contact-button">Contact Us</button>
          </Link>
        </li>
      </ul>
      <div className="hamburger-menu" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
