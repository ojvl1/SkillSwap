import React from "react";
import DragDrop from "./DragAndDrop/dragAndDrop";
import Logo from "../../assets/SkillSwap-Logo.png"
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
      </div>
      <button>Next</button>
    </div>
    </>
  )
}

export default Background;