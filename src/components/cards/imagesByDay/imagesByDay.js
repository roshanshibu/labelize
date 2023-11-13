import "../dashCard.css";
import "./imagesByDay.css";

// Shows a line graph displaying how many images were annotated by the user throughout the week

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      display: false,
    },
  },
};

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export const data = {
  labels,
  datasets: [
    {
      label: "Images annotated",
      data: [98, 102, 115, 122, 125],
      borderColor: "#8BFF62",
      backgroundColor: "#8BFF62",
    },
  ],
};

const ImagesByDayCard = (props) => {
  return (
    <div className="dashCard">
      <div className="imagesByDayContainer">
        <p className="title">Images by day</p>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default ImagesByDayCard;
