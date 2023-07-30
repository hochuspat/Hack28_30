import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import Chart from 'chart.js/auto';
import { Bar, Line } from 'react-chartjs-2';
const backgroundColor = 'rgba(12, 7, 243, 0.23)';

const InteractiveCharts = () => {
  const barData = {
    labels: ['15.07', '16.07', '17.07', '20.07', '24.07'],
    datasets: [
      {
        label: 'Средний балл',
        backgroundColor,
        data: [120, 190, 230, 250, 200],
      },
    ],
  };

  const lineData = {
    labels: ['15.07', '16.07', '17.07', '20.07', '24.07'],
    datasets: [
      {
        label: 'Кол-во поданных заявлений',
        fill: true,
        lineTension: 0.5,
        backgroundColor,
        borderColor: 'blue',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  
  return (
    <div >
      <h1 style={{ textAlign: 'center', marginTop: '20px',frontFamily:'ABeeZe' }}>Моя траектория</h1>
      <div style={{ position: 'absolute', top: '76px', left: '66%', transform: 'translateX(-50%)', width: '68%' }}>
        <div style={{ width: '33%', display: 'inline-block', margin: '10px' }}>
          <h2>Средний балл на Инноватику</h2>
          <div style={{ width: '100%', height: '300px' }}>
            <Bar data={barData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        <div style={{ width: '33%', display: 'inline-block', margin: '10px' }}>
          <h2>Кол-во поданных заявлений нна Инноватику</h2>
          <div style={{ width: '100%', height: '300px' }}>
            <Line data={lineData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default InteractiveCharts;




