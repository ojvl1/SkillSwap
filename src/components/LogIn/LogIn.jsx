import React from "react";
import SkillSwapLogo from "../../assets/SkillSwap-Logo.png"
import "./LogIn.css";

function LogIn() {
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <div className="logo-container">
            <img src={SkillSwapLogo} alt="SkillSwap Logo" />
          </div>
          <div>
            <h1 className="title">Log In</h1>
          </div>
          <div className="form-inputs">
            <label htmlFor="email">Enter your email</label>
            <input type="email" name="email" className="email" />
            <label htmlFor="password">Enter your password</label>
            <input type="password" name="password" className="password" />
            <button className="login-button">Enter</button>
            <div className="signup-link">
              <p>You don't have an account? <a href="./components/SignIn/SignIn.jsx">Sign In</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;