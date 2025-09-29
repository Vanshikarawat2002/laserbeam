import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [">$10b", "$1b-$10b", "<$300m", "$500m-$1b", "$300m-$500m"],
  datasets: [
    {
      label: "Market Cap Exposure",
      data: [84, 11, 5, 0, 0],
      backgroundColor: ["grey", "#dbdee0ff", "#6c757d", "#ffc107", "#dc3545"],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
     maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.label}: ${context.raw}%`,
      },
    },
  },
};

const MarketCapExposure = () => {
  return <Doughnut data={data} options={options} />;
};

export default MarketCapExposure;
