import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../assets/SkillSwap-icon.png";
import { FileUpload } from "primereact/fileupload";
import { updateUserBackground } from "../../utils/auth.js";
import "./Background.css";

function Background() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [resume, setResume] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !age || !resume) {
      return setError("Please fill all fields and upload your resume");
    }

    updateUserBackground(firstName, lastName, age, resume.name);
    navigate("/dashboard");
  };
  return (
  <form onSubmit={handleSubmit}>
      <div className="background-container">
      <div className="logo-container">
        <img src={Icon} alt="SkillSwap Logo" />
      </div>
      
      <div className="main-content">
        <h1>Your Background</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        
        <div className="background-form">
          <div className="personal-inputs">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
              <label>Name</label>
              <input value={firstName} onChange={e => setFirstName(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input value={lastName} onChange={e => setLastName(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Age</label>
              <input type="number" value={age} onChange={e => setAge(e.target.value)} />
            </div>
            </form>
          </div>
          <div className="resume-upload">
            <h2>Upload your Resume</h2>
            <FileUpload
              name="resume"
              accept="application/pdf"
              maxFileSize={5000000}
              customUpload
              uploadHandler={(e) => setResume(e.files[0])}
              chooseOptions={{ 
                label: 'Choose File', 
                icon: 'pi pi-plus', 
                className: 'upload-btn choose-btn' 
              }}
              uploadOptions={{ 
                label: 'Upload', 
                icon: 'pi pi-upload', 
                className: 'upload-btn upload-btn' 
              }}
              cancelOptions={{ 
                label: 'Cancel', 
                icon: 'pi pi-times', 
                className: 'upload-btn cancel-btn' 
              }}
              emptyTemplate={() => (
                <div className="upload-placeholder">
                  <i className="pi pi-cloud-upload upload-icon"></i>
                  <p>Drag and drop your CV here</p>
                </div>
              )}
            />
          </div>
          <div className="button-container">
            <button className="next-button" type="submit">Next</button>
          </div>
        </div>
      </div>
    </div>
  </form>
  );
}

export default Background;