import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./dragAndDrop"

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    if (file) {
      setFile(file);
    }
  };

  const handleTypeError = (err) => {
      console.log(err);
      alert("Wrong File Type! Only acceped PDF");
    };

  const removeFile = () => {
    setFile(null);
  };

  return(
    <div className="dragdrop">
      <FileUploader
        key={file ? "uploaded" : "not_uploaded"}
        maxSize={5}
        handleChange={handleChange}
        name="File"
        types={["PDF"]}
        label={file ? "Successfully Uploaded" : "Upload your CV"}
        onTypeError={handleTypeError}
      />
      {file && <p>File name: {file.name}</p>}
      {file && <button onClick={removeFile}>Remove File</button>}
    </div>
  );
}

export default DragDrop