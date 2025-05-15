import React from "react";
import SkillSwapLogo from "../../assets/SkillSwap-Logo.png";
import "./SignIn.css";

function SignIn() {
  return (
    <>
      <div className="signin-container">
        <div className="signin-form">
          <div className="logo-container">
            <img src={SkillSwapLogo} alt="SkillSwap Logo" />
          </div>
          <div>
            <h1>Create an Account</h1>
          </div>
          <div className="form-inputs">
            <label htmlFor="email">Enter a email</label>
            <input type="email" name="email" className="email" />
            <label htmlFor="password">Enter a password</label>
            <input type="password" name="password" className="password" />
            <label htmlFor="confirmPassword">Confirm password</label>
            <input type="password" name="confirmPassword" className="password" />
            <button className="signin-button">Enter</button>
            <div className="login-link">
              <p>Have an account? <a href="./components/LogIn/LogIn.jsx">Log In</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;