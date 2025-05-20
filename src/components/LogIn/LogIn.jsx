import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Icon from "../../assets/SkillSwap-icon.png";
import { loginUser } from "../../utils/auth";
import "./LogIn.css";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return setError("Both fields are required");
    }

    const result = loginUser(email, password);
    if (!result.success) {
      return setError(result.message);
    }

    navigate("/dashboard");
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <div className="logo-container">
            <img src={Icon} alt="SkillSwap Logo" />
          </div>
          <h1>Log In</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSubmit} className="form-inputs">
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="signin-button" type="submit">Log In</button>
          </form>
          <div className="login-link">
            <p>You don't have an account? <Link to="/">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;