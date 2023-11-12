import BaseFeature from "../base/base";
import "./textFeature.css";
const TextFeature = (props) => {
  return (
    <div>
      <BaseFeature title={props.title} description={props.description} />
      <input type="text" className="featureTextInput" />
    </div>
  );
};

export default TextFeature;
