import React from "react";
import Logo from "../../assets/SkillSwap-Logo.png"
import Dashboard from "../Dashboard/Dashboard.jsx"
import { FileUpload } from "primereact/fileupload";
import "./Background.css"

function Background() {
  return(
    <>
    <div className="Icon">
      <img src={Logo} alt="Skill Swap Icon" />
    </div>
    <div className="main">
      <h1>Your Background</h1>
      <div className="info">
        <div className="inputs">
          <input placeholder="Name" type="text" />
          <input placeholder="Last Name" type="text" />
          <input placeholder="Age" type="number" name="Age" />
        </div>
        <div className="upload">
          <FileUpload
          name="demo[]"
          url={'/api/upload'}
          accept="pdf/*"
          maxFileSize={1000000}
          chooseOptions={{ label: 'Choose', icon: 'pi pi-plus', className: 'custom-choose-btn' }}
          uploadOptions={{ label: 'Upload', icon: 'pi pi-upload', className: 'custom-upload-btn' }}
          cancelOptions={{ label: 'Cancel', icon: 'pi pi-times', className: 'custom-cancel-btn' }}
          headerTemplate={() => (
          <div className="custom-header">
            <p className="m-0">Drag and drop files to here to upload.</p>
          <div className="custom-buttons">
            <span className="p-button p-fileupload-choose custom-choose-btn">Choose</span>
            <span className="p-button p-fileupload-upload custom-upload-btn">Upload</span>
            <span className="p-button p-fileupload-cancel custom-cancel-btn">Cancel</span>
          </div>
        </div>
          )} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Background;