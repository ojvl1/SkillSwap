import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PDF", "DOCX"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    if (file) {
      setFile(file);
    }
    
  };

  return(
    <div>
      <FileUploader maxSize="1" handleChange={handleChange} name="File" types={fileTypes} />
      {file && <p>File name: {file.name}</p>}
    </div>
  );
}

export default DragDrop