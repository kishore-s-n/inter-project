
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { AiOutlineWarning } from 'react-icons/ai';

const CalorieGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    let myChart;

    if (myChart) {
      myChart.destroy();
    }

    const data = {
      labels: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00', '01:10', '01:20', '01:30', '01:40', '01:50', '02:00', '02:10', '02:20', '02:30', '02:40', '02:50', '03:00', '03:10', '03:20', '03:30', '03:40', '03:50', '04:00', '04:10', '04:20', '04:30', '04:40', '04:50', '05:00', '05:10', '05:20', '05:30', '05:40', '05:50', '06:00'],
      datasets: [
        {
          label: 'Calories Burned',
          data: [
            0, 0, 0, 0, 4, 50, 130, 640, 150, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 2, 32, 190, 520, 900, 420, 130, 40, 0, 0, 0, 0, 0, 50
          ],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderWidth: 1,
        },
      ],
    };
    

    myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return (
    <div className="calorie-graph mx-5">
      <h2>Calories Burned by Time</h2>
      <canvas ref={chartRef} />
      <div className="flex p-2 gap-5  top-[287.31px] bg-gradient-to-r from-[#819DFF] to-white  rounded-[10px]">
        <AiOutlineWarning color="blue" size={50} />
        <p className='text-sm'>You've burned fewer calories than yesterday. Time to get moving! </p>
      </div>
    </div>
  );
};

export default CalorieGraph;
