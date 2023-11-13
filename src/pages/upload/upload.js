import "./upload.css";
import React, { useState } from "react";
import uploadIcon from "assets/upload.png";
import TextFeature from "components/features/textFeature/textFeature";
import RadioButtonFeature from "components/features/radioButtonFeature/radioButtonFeature";
import DateFeature from "components/features/dateFeature/dateFeature";
import { useNavigate } from "react-router-dom";
import Loading from "assets/loading.svg";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  function loadFile(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileName(e.target.files[0]["name"]);
    console.log(e.target.files[0]);
  }

  // for feature with radio button options
  const emotionOptions = ["Happy", "Indifferent", "Sad"];
  const [selectedEmotion, setSelectedEmotion] = useState(emotionOptions[0]);
  const handleEmotionOptionChange = (option) => {
    setSelectedEmotion(option);
  };

  const ageOptions = ["Infant", "Teenager", "Youth", "Middle Aged", "Elderly"];
  const [selectedAge, setSelectedAge] = useState(ageOptions[0]);
  const handleAgeOptionChange = (option) => {
    setSelectedAge(option);
  };

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleUpload = (e) => {
    e.preventDefault(); //don't refresh
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFile(null);
    }, 2000);
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
                options={emotionOptions}
                selectedOption={selectedEmotion}
                onOptionChange={handleEmotionOptionChange}
              />
              <DateFeature
                title="Age or Time Period"
                description="Select the most accurate date relevant to the image to the best of your understanding."
              />
              <TextFeature
                title="Prominent Object"
                description="The largest, most important or most meaningful object within the context of this scene. Limit answer to one word."
              />
              <RadioButtonFeature
                title="Age Group Analysis"
                description="Select the most appropriate age group for the subject(s) in the scene."
                options={ageOptions}
                selectedOption={selectedAge}
                onOptionChange={handleAgeOptionChange}
              />
              <TextFeature
                title="Short Image Description"
                description="In one short precise sentence, explain the context of the scene."
              />
            </div>
            <button class="blueButton finalUploadButton" onClick={handleUpload}>
              {isLoading ? (
                <img src={Loading} alt="Loading" className="loadingIcon" />
              ) : (
                <p>Submit</p>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
