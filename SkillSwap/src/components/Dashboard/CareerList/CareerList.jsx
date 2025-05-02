import React from "react";
import avatar from "../../../assets/avatar.png"
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
      <div className="box">
        <div className="profile">
          <div className="avatar">
            <img height="100" width="100" src={avatar} alt="" /> 
          </div>
          <div>
            <p>Profile</p>
          </div>
        </div>
        <div className="list">
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#ffffff"></path></g></svg>
                {item}
                </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CareerList;