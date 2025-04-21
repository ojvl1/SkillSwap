import React from "react";
import SkillSwapLogo from "../../assets/SkillSwap-Logo.png"

function LogIn() {
    return (
      <>
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
              <p>Your don't have an account? <a href="./components/SignIn/SignIn.jsx">Sing In</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default LogIn;