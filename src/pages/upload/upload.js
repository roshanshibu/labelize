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
  const featureOptions = ["Happy", "Indifferent", "Sad"];
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
          <label htmlFor="file-upload" class="blueButton">
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
                title="Contextual Information"
                description="This includes relationships between objects, spatial arrangement, and the overall scene context."
              />
              <RadioButtonFeature
                title="Emotions or Sentiments"
                description="Select the emotions or sentiments portrayed by human faces or expressions in an image."
                options={featureOptions}
                selectedOption={selectedOption}
                onOptionChange={handleFeatureOptionChange}
              />
              <DateFeature
                title="Age or Time Period"
                description="Select the most accurate date relevant to the image to the best of your understanding"
              />
            </div>
            <p class="blueButton">Submit</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
