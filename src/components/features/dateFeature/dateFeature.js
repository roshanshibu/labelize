import BaseFeature from "../base/base";
import "./dateFeature.css";

// An annotation feature that takes a date as input

const DateFeature = (props) => {
  return (
    <div>
      <BaseFeature title={props.title} description={props.description} />
      <input type="date" className="featureTextInput" />
    </div>
  );
};

export default DateFeature;
