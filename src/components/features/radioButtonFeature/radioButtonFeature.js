import BaseFeature from "../base/base";
import "./radioButtonFeature.css";

// An annotation feature that takes custom radio buttons as input
// radio buttons and handler has to be passed as props

const RadioButtonFeature = (props) => {
  return (
    <div>
      <BaseFeature title={props.title} description={props.description} />
      <div className="radioButtonsContainer">
        {props.options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={props.selectedOption === option}
              onChange={() => props.onOptionChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonFeature;
