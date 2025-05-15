import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SignIn from "./components/SignIn/SignIn.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";
import Careers from "./components/Careers/Careers.jsx";
import Background from "./components/Background/Background.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import "./App.css";

function App() {
  return(
    <>
      <SignIn />
    </>
  )
}

export default App;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
)