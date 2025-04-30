import React from "react";
import "./CareerList.css";

function CareerList() {
  const list = [
    "Programming",
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
      <div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CareerList;