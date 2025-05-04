import React from "react";
import DragDrop from "./Drag and Dro/dragAndDrop.jsx"
import Icon from "../../assets/SkillSwap-icon.png"
import "./Background.css"

function Background() {
  return(
    <>
    <div className="Icon">
      <img src={Icon} alt="Skill Swap Icon" />
    </div>
      <h1>Your Background</h1>
      <input placeholder="Name" type="text" />
      <input placeholder="Lastname" type="text" />
      <DragDrop />
    </>
  )
}

export default Background;