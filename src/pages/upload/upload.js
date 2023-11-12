import "./upload.css";
import React, { useState } from "react";
import uploadIcon from "assets/upload.png";

const Upload = () => {
  const [file, setFile] = useState(null);

  function loadFile(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files[0]);
  }

  return (
    <div className="uploadContainer">
      {file === null ? (
        <div className="uploadPromptContainer">
          <img src={uploadIcon} alt="uploadImage Icon" className="uploadIcon" />
          <p className="uploadPromptText">Upload an image to annotate</p>
          <label for="file-upload" class="uploadButton">
            Upload
          </label>
          <input id="file-upload" type="file" onChange={loadFile} />
        </div>
      ) : (
        <div>
          <img src={file} />
        </div>
      )}
    </div>
  );
};

export default Upload;
