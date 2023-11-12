import "./bellIcon.css";
import { ReactComponent as BellSVG } from "assets/bellIcon.svg";

const BellIcon = (props) => {
  return (
    <div
      className={`bellContainer ${props.hideMobile ? "hide-mobile" : ""}`}
      onClick={props.onClick}
    >
      <div className="numberCircle">{props.count}</div>
      <BellSVG className="bellIcon" />
    </div>
  );
};

export default BellIcon;
