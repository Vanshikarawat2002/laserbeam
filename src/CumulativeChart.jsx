import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const CumulativeChart = () => {
  const data = {
    labels: ["Jun 25", "Jul 25", "Aug 25", "Sep 25"],
    datasets: [
      {
        label: "Cumulative Performance",
        data: [0, 4.5, 7, 7], 
        fill: false,
        borderColor: "#007bff",
        tension: 0.3,
        pointBackgroundColor: "#007bff",
      },
    ],
  };

  const options = {
    responsive: true,
     maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.data[context.dataIndex] + "%";
          },
        },
      },
      legend: {
        display: false, 
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 8,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
    },
  };

  return    <div style={{ width: "100%", height: "140px" }}>
      <Line data={data} options={options} />
    </div>
};

export default CumulativeChart
