import "../dashCard.css";
import "./accuracy.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: false,
  plugins: {
    legend: {
      display: true,
    },
  },
};

export const data = {
  labels: ["Incorrect", "Correct"],
  datasets: [
    {
      label: "# of Images",
      data: [12, 92],
      backgroundColor: ["#F03B3B", "#70DD49"],
      borderWidth: 0,
    },
  ],
};

const AnnotationAccuracy = (props) => {
  return (
    <div className="dashCard">
      <div className="imagesByDayContainer">
        <p className="title">Annotation Accuracy</p>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default AnnotationAccuracy;
