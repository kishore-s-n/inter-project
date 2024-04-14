import React from 'react';
import { Line } from 'react-chartjs-2';

const CalorieGraph = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Calories Burned',
        data: data.caloriesBurned,
      },
    ],
  };


  return <Line data={chartData} height={400} width={600} />; 
};

export default CalorieGraph;
