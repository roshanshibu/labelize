import "./bellIcon.css";
import { ReactComponent as BellSVG } from "assets/bellIcon.svg";
// imported as reactComponent because color has to be changed based on device

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
