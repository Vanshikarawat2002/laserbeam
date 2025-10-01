import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useExposureQuery } from "./services/api";
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

const options = {
  indexAxis: "y",
     maintainAspectRatio:false,
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
   
      ticks: {
        callback: (value) => value + "%",
      },
    },
  },
};

const SectorExposure = () => {

  const {data:sectorData,error,isLoading} = useExposureQuery();

const labels= sectorData?.sectorExposure?.map(i=>i.name);
const values=sectorData?.sectorExposure?.map(i=>i.value);

  const data = sectorData?.sectorExposure && {
  labels:labels,
  datasets: [
    {
      label: "Sector Exposure",
      data: values,
      backgroundColor: values.map((v) => (v < 0 ? "red" : "lightgrey")),
    },
  ],
};
  
  
  if(isLoading)
    return <div>Loading ...</div>

 if(error)
  return <div>Failed ...</div>

  return <div style={{ height: `${sectorData?.sectorExposure?.length * 50}px`, minHeight: "100px" }}>
  <Bar data={data} options={options} />
</div>

};

export default SectorExposure;
