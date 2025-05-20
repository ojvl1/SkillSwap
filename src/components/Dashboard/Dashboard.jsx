import React from "react";
import CareerList from "./CareerList/CareerList";
import setting from "../../assets/Settings Gear Icon.png";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"

function Dashboard() {
  const navigate = useNavigate();

  const toSettings = () => {
    navigate("/settings");
  }
  return(
    <>
    {/* Start Careers Side */}
      <CareerList />
      {/* Finish Career Side */}
      {/* ---------------------------------------------------- */}
      {/* Start Settings */}
      <div className="settings">
        <div className="setting-text">
          <button className="settings-btn" aria-label="Settings" onClick={toSettings}>
            <img height="30" width="30" src={setting} alt="Settings icon" />
          </button>
        </div>
      </div>
      {/* Finish Settings */}
      {/* ---------------------------------------------------- */}
      {/* Start Notification */}
      <main className="notifications-box">
        <div className="noti-h1">
          <h1>Notifications</h1>
        </div>
        <div className="boxes">
          <div className="box-1"></div>
          <div className="box-2"></div>
          <div className="box-3"></div>
        </div>
      </main>
      {/* Notification Finish */}
    </>
  );
}

export default Dashboard;