import React from "react";
import SingIn from "../SignIn/SignIn"
import SkillSwapLogo from "../../assets/SkillSwap-Logo.png"
import SignIn from "../SignIn/SignIn";

function LogIn() {
  <>
    return (
      <div>
        <div>
          <img src={SkillSwapLogo} alt="SkillSwap Logo" />
        </div>
        <div>
          <div>
            <h1>Log In</h1>
          </div>
          <div>
            <label htmlFor="email">Enter your email</label>
            <input type="email" name="email" className="email" />
            <label htmlFor="pasword">Enter your pasword</label>
            <input type="password" name="password" className="password" />
            <button>Enter</button>
            <div>
              <p>Your don't have an account? <a href={SignIn}>Sing In</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  </>
}

export default LogIn;