import React, { useRef, useEffect } from "react";
import DragDrop from "./DragAndDrop/dragAndDrop";
import Logo from "../../assets/SkillSwap-Logo.png"
import "./Background.css"

function Background() {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  const handleClick = () => {
    console.log('Button clicked!', buttonRef.current);
  };

  return(
    <>
    <div className="Icon">
      <img src={Logo} alt="Skill Swap Icon" />
    </div>
    <div className="main">
      <div className="title">
        <h1>Your Background</h1>
      </div>
      <div className="info">
        <div className="inputs">
          <input placeholder="Name" type="text" />
          <input placeholder="Last Name" type="text" />
          <input placeholder="Age" type="number" name="Age" />
        </div>
        <div className="dragdrop">
          <DragDrop />
        </div>
        <button ref={buttonRef} onClick={handleClick} >Next</button>
      </div>
    </div>
    </>
  )
}

export default Background;