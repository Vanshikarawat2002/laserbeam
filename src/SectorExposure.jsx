import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

const labels = [
  "INDEX",
  "TECHNOLOGY",
  "MATERIALS",
  "INDUSTRIALS",
  "METALS",
  "HEALTH CARE",
  "COMMUNICATIONS",
  "CASH",
];

const values = [-15, 2, 3, 4, 5, 8, 20, 65];

const data = {
  labels,
  datasets: [
    {
      label: "Sector Exposure",
      data: values,
      backgroundColor: values.map((v) => (v < 0 ? "red" : "lightgrey")),
    },
  ],
};

const options = {
  indexAxis: "y",
     maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (context) => `${context.raw}%`,
      },
    },
  },
  scales: {
    x: {
      min: -20,
      max: 100,
      ticks: {
        callback: (value) => value + "%",
      },
    },
  },
};

const SectorExposure = () => {
  return <Bar data={data} options={options} />;
};

export default SectorExposure;
