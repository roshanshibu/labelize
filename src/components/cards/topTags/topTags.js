import "../dashCard.css";
import "./topTags.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// a card that contains a bar graph showing some information regarding the most tagged labels by the user

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: false,
      reverse: true,
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const TopTagsCard = (props) => {
  return (
    <div className="dashCard">
      <div className="topTagsContainer">
        <p className="title">Top Tags</p>
        <Bar options={options} data={props.data} />
      </div>
    </div>
  );
};

export default TopTagsCard;
