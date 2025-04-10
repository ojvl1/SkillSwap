import React from "react";
import LogIn from "../LogIn/LogIn";
import SkillSwapLogo from "../../assets/SkillSwap-Logo.png"

function SignIn() {
  return(
    <>
      <div>
        <div>
          <img src={SkillSwapLogo} alt="Skill Swap Logo" />
        </div>
        <div>
          <div>
            <p>Create an Account</p>
          </div>
          <div>
            <label htmlFor="Email">Enter a email</label>
            <input type="email" name="email" />
            <label htmlFor="password">Enter a password</label>
            <input type="password" name="password" />
            <label htmlFor="confirm password">Confirm password\</label>
            <input type="password" name="confirm password" />
            <button>Enter</button>
            <p>Have an account? <a href={LogIn}>LogIn</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn;