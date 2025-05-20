import React from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

function Settings() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login")
  }
  return(
    <>
      <div className="button-box">
        <button onClick={logout}>
          Log Out
        </button>
      </div>
    </>
  )
}

export default Settings;