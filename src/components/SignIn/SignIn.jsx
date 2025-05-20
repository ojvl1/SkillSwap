import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Icon from "../../assets/SkillSwap-icon.png"
import { getUsers, saveUsers, saveCurrentUser } from "../../utils/auth";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    if (!email || !password || !confirm) {
      return setError("All fields are required");
    }

    if (password !== confirm) {
      return setError("Passwords do not match");
    }

    const users = getUsers();

    const userExists = users.find(u => u.email === email);
    if (userExists) {
      return setError("Email is already registered");
    }

    const newUser = {
      email,
      password,
      career: "",
      firstName: "",
      lastName: "",
      resume: ""
    };

    users.push(newUser);
    saveUsers(users);
    saveCurrentUser(newUser);
    navigate("/login");
  };

  return (
    <>
      <div className="signin-container">
        <div className="signin-form">
          <div className="logo-container">
            <img src={Icon} alt="SkillSwap Logo" />
          </div>
            <h1>Create an Account</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit} className="form-inputs">
              <label>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
              <label>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
              <label>Confirm Password</label>
              <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} />
              <button className="signin-button" type="submit">Sign In</button>
            </form>
            <div className="login-link">
              <p>Have an account? <Link to="/login">Log In</Link></p>
            </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;