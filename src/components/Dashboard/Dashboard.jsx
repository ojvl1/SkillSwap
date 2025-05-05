import React from "react";
import CareerList from "./CareerList/CareerList";
import setting from "../../assets/Settings Gear Icon.png"
import "./Dashboard.css"

function Dashboard() {
  return(
    <>
    {/* Start Careers Side */}
      <CareerList />
      {/* Finish Career Side */}
      {/* ---------------------------------------------------- */}
      {/* Start Settings */}
      <div className="settings">
        <div setting-p>
          <p >Settings</p>
        </div>
        <div setting-img>
          <img height="50" width="50" src={setting} alt="setting logo" />
        </div>
      </div>
      {/* Finish Settings */}
      {/* ---------------------------------------------------- */}
      {/* Start Notification */}
      <main className="notifications-box">
        <div>
          <h1>Notifications</h1>
        </div>
        <div>
          <div>

          </div>
          <div></div>
          <div></div>
        </div>
      </main>
      {/* Notification Finish */}
    </>
  );
}

export default Dashboard;