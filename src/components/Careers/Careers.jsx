import React from "react";
import rightArrow from "../../assets/Right Arrow Icon.svg"
import Logo from "../../assets/SkillSwap-icon.png"
import downArrow from "../../assets/Arrow Down Icon.svg"
import "./Careers.css"

function Careers() {

  let careers = [
    "Programmer",
    "Sign Laguage",
    "Language",
    "Agriculture",
    "Computer Repair",
    "Handy Man",
    "Instruments",
    "Sing",
    "Cars Mechanic",
    "Electronics"
  ];

  return(
    <>
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="title">
        <h1>What is your career?</h1>
      </div>
      <div className="list">
        <button>Choose your career <img src={downArrow} alt="down arrow" /></button>
        <ul>
          <li>{careers}</li>
        </ul>
      </div>
      <div className="button">
        <button>
          Next <img src={rightArrow} alt="right Arrow" />
        </button>
      </div>
    </>
  );
}

export default Careers