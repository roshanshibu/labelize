import "../dashCard.css";
import "./count.css";

// Info card that shows the number of images annotated by the user today

const CountCard = (props) => {
  return (
    <div className="dashCard">
      <div className="cardContainer">
        <div className="countText">
          {props.count}
          <span style={{ paddingBottom: "15px" }}>⭐</span>
        </div>
        <p className="subtitle1">images annotated</p>
        <p className="subtitle2">
          You are in the top <span>{props.percent} percentile</span> of
          contributors
        </p>
      </div>
    </div>
  );
};

export default CountCard;
