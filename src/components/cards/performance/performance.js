import "../dashCard.css";
import "./performance.css";
import upArrow from "assets/upArrow.svg";
const PerformanceCard = (props) => {
  return (
    <div className="dashCard">
      <div className="performanceCardContainer">
        <p className="title">Performance</p>
        <div className="performanceStat">
          <img src={upArrow} />
          <p>24%</p>
        </div>
        <p className="performanceStat2">151 images this week</p>
        <p className="performanceStat3">
          Data compared to 122 images last week
        </p>
      </div>
    </div>
  );
};

export default PerformanceCard;
