import BaseFeature from "../base/base";
import "./dateFeature.css";
const DateFeature = (props) => {
  return (
    <div>
      <BaseFeature title={props.title} description={props.description} />
      <input type="date" className="featureTextInput" />
    </div>
  );
};

export default DateFeature;
