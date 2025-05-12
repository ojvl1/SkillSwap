import React from "react";
import { Link } from "react-router-dom"
import Logo from "../../assets/SkillSwap-Logo.png"
import Dashboard from "../Dashboard/Dashboard.jsx"
import "./Background.css"

function Background() {
  return(
    <>
    <div className="Icon">
      <img src={Logo} alt="Skill Swap Icon" />
    </div>
    <div className="main">
      <h1>Your Background</h1>
      <div className="info">
        <div className="inputs">
          <input placeholder="Name" type="text" />
          <input placeholder="Last Name" type="text" />
          <input placeholder="Age" type="number" name="Age" />
        </div>
        <div className="dragdrop">
          <DragDrop />
        </div>
          <Link to={Dashboard}>Next</Link>
      </div>
    </div>
    </>
  )
}

export default Background;