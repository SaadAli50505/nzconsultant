import React from "react";
import "./style.css";
import { Helmet } from "react-helmet";
import carpentory from "../img/trade/skill-carpentory.jpg";
import BoatBuilding from "../img/trade/skill-boatbuilding.jpg";
import AutomotiveMechanic from "../img/trade/skill-automotive.jpg";
import commercialCookery from "../img/trade/skill-cookery.jpg"
import heavyDesel from "../img/trade/skill-heavy-desel.jpg"
import SolidPlastering from "../img/trade/skill-solid-plastering.jpg"
import Bricklaying from "../img/trade/skill-bricklaying.jpg"
import WallFloorTiling from "../img/trade/skill-wall-floor-tilling.jpg"
import ElectricalInstrumentation from "../img/trade/skill-electrical-instumentation.jpg"
import AutomotiveBodyRepair from "../img/trade/skill-automotive-body-repair.jpg"
import AutomotiveElectrician from "../img/trade/skill-automotive-electrition.jpg"
import EngineeringFabrication from "../img/trade/skill-engeenring-fabrication.jpg"
import Joinery from "../img/trade/skill-joinery.jpg"
import CabinetMaking from "../img/trade/skill-cabinet-making.jpg"
import PaintingDecorating from "../img/trade/skill-painting-decorating.jpg"

const TradeCourses = () => {
  const courses = [
    { id: 1, title: "Carpentry", image: carpentory },
    { id: 2, title: "Boat Building", image: BoatBuilding },
    { id: 3, title: "Automotive Mechanic", image: AutomotiveMechanic },
    { id: 4, title: "Commercial Cookery", image: commercialCookery },
    { id: 5, title: "Heavy Desel Mechanic", image: heavyDesel },
    { id: 6, title: "Solid Plastering", image: SolidPlastering },
    { id: 7, title: "Bricklaying", image: Bricklaying },
    { id: 8, title: "Wall & Floor Tiling", image: WallFloorTiling },
    { id: 9, title: "Electrical Instrumentation", image: ElectricalInstrumentation },
    { id: 10, title: "Automotive Body Repair", image: AutomotiveBodyRepair },
    { id: 11, title: "Automotive Electrician", image: AutomotiveElectrician },
    { id: 12, title: "Engineering Fabrication", image: EngineeringFabrication },
    { id: 13, title: "Joinery", image: Joinery },
    { id: 14, title: "Cabinet Making", image: CabinetMaking },
    { id: 15, title: "Painting and Decorating", image: PaintingDecorating },

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
      <h1 className="heading">Find a Course</h1>
      <p className="paragraph">
        Australian study that can meet the 2-year course requirements for
        positions on the medium- and long-term strategic skills list. Some of
        them are as below:
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

export default TradeCourses;
