import React from "react";
import "./Dashboard.css"

function Dashboard() {
  const career_list = [
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
      <div className="find-careers-box">
        <div className="list-box">
          <ul>
            <li className="list">
              {career_list}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;