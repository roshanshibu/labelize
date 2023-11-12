import CountCard from "components/cards/count/count";
import "./dash.css";
import Branding from "assets/Branding.svg";

const Dash = () => {
  return (
    <div className="dashContainer">
      <img src={Branding} className="hide-desktop" />
      <div className="cardsContainer">
        <CountCard count={125} percent={12} />
      </div>
    </div>
  );
};

export default Dash;
