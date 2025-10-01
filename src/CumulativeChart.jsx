import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { usePerformanceQuery } from "./services/api";
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

  const {data:lineChartData, isLoading ,error }= usePerformanceQuery();
  const dataSet = lineChartData?.lineChart?.map(i=>i.CumulativeReturn);
  const dates=lineChartData?.lineChart?.map(i=>{
    const date= new Date(""+i.Month);
    const options ={
      month:'short',
      year:'2-digit'
    }
    console.log("dates ",date.toLocaleDateString('en-US',options))
     return date.toLocaleDateString('en-US',options);
 
  });

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Cumulative Performance",
        data:dataSet, 
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
