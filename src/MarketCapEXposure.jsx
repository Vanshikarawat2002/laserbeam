import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useExposureQuery } from "./services/api";
import { useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);


const options = {
  responsive: true,
     maintainAspectRatio:false,
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

  const {data:marketData, error, isLoading} = useExposureQuery();
  const labels=marketData?.marketCapExposure?.map(i=>i.name);
  const percentage=marketData?.marketCapExposure?.map(i=>i.value)

  const data = {
  labels,
  datasets: [
    {
      label: "Market Cap Exposure",
      data:percentage,
      backgroundColor: ["grey", "#dbdee0ff", "#6c757d", "#ffc107", "#dc3545"],
      borderWidth: 1,
    },
  ],
};


if(isLoading)
  return <div>Loading...</div>

if(error)
  return <div>Failed...</div>


  return <Doughnut data={data} options={options} />;
};

export default MarketCapExposure;
