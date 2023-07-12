import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);
const CoinChart = ({
  coinData,
  coinChange,
  width,
  height,
  pointR,
  tTip,
  yAxis,
}) => {
  const gradientFill = (context) => {
    const chartArea = context.chart.chartArea;
    if (chartArea) {
      const { top, bottom } = chartArea;
      const gradient = context.chart.ctx.createLinearGradient(
        0,
        top,
        0,
        bottom
      );

      if (parseFloat(coinChange) < 0) {
        gradient.addColorStop(0, "rgba(255, 0, 0, 0.4)");
        gradient.addColorStop(1, "rgba(255, 0, 0, 0)");
      } else {
        gradient.addColorStop(0, "rgba(0, 255, 0, 0.4)");
        gradient.addColorStop(1, "rgba(0, 255, 0, 0)");
      }

      return gradient;
    }
    return null;
  };
  const numericData = coinData.map((value) => parseFloat(value));
  const labels = Array(24).fill("");

  const [data, setData] = useState({
    labels: labels,
    datasets: [
      {
        label: "",
        data: numericData,
        backgroundColor: gradientFill,
        borderColor: coinChange > 0 ? "green" : "red",
        tension: 0.4,
        fill: true,
        showLine: true,
        pointRadius: pointR,
        borderWidth: 1,
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false, // Hide the x-axis grid lines
          },
        },
        y: {
          display: yAxis,
          grid: {
            display: false, // Hide the y-axis grid lines
          },
        },
      },
      plugins: {
        legend: {
          display: false, // Hide the legend box
        },
        tooltip: {
          enabled: tTip, // Disable tooltips
        },
      },
    },
  });

  return (
    <div className="App " style={{ width: width, height: height }}>
      <Line data={data} options={data.options}>
        Hello
      </Line>
    </div>
  );
};

export default CoinChart;
