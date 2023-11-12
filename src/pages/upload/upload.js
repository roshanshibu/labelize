import "./upload.css";
import React, { useState } from "react";
import uploadIcon from "assets/upload.png";
import TextFeature from "components/features/textFeature/textFeature";
import RadioButtonFeature from "components/features/radioButtonFeature/radioButtonFeature";
import DateFeature from "components/features/dateFeature/dateFeature";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  function loadFile(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileName(e.target.files[0]["name"]);
    console.log(e.target.files[0]);
  }

  // for feature with radio button options
  const featureOptions = ["Option 1", "Option 2", "Option 3"];
  const [selectedOption, setSelectedOption] = useState(featureOptions[0]);
  const handleFeatureOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="uploadContainer">
      {file === null ? (
        <div className="uploadPromptContainer card">
          <img src={uploadIcon} alt="uploadImage Icon" className="uploadIcon" />
          <p className="uploadPromptText">Upload an image to annotate</p>
          <label htmlFor="file-upload" class="uploadButton">
            Upload
          </label>
          <input id="file-upload" type="file" onChange={loadFile} />
        </div>
      ) : (
        <div className="previewAnnotationsContainer">
          <div className="previewContainer card">
            <img src={file} className="uploadPreview" />
            <p className="filename">{fileName}</p>
          </div>
          <div className="annotationsContainer card">
            <p className="annotationsTitle">Feature Annotations</p>
            <div className="featuresContainer">
              <TextFeature
                title="Feature 1"
                description="Small description about feature1 hereSmall description about feature1 hereSmall description about feature1 here"
              />
              <RadioButtonFeature
                title="Feature2"
                description="small desc here"
                options={featureOptions}
                selectedOption={selectedOption}
                onOptionChange={handleFeatureOptionChange}
              />
              <DateFeature
                title="Feature 3"
                description="Small description about feature1 hereSmall description about feature1 hereSmall description about feature1 here"
              />
            </div>
            <p class="uploadButton">Submit</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
