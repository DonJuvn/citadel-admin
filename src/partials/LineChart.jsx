import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

function LineChartOptions() {

return(
  <Line 
  options={{
    scales: {
      x: {
        time: {
          unit: 'month',
          displayFormats: {
            month: 'MMMM YYYY',
          },
          font:{
            size: 12,
            family: "'Gilroy', sans-serif",
            weight: 700,
          }
        },
        title: {
          display: true,
          // text: 'Month',
          color: '#000',
          font:{
            size: 16,
            family: "'Gilroy', sans-serif",
            weight: 700,
          }
        },
        grid: {
          display: false, // Set to false to remove background gray lines
        },
        ticks: {
          // color: '#EABE5C', // Set text color for the x-axis labels
          font:{
            family:"'Gilroy', sans-serif",
            size: 11,
          }
        },
      },
      y: {
        beginAtZero: false,
        title: {
          display: true,
          // text: 'Объем сделок',
          // color: '#2368d6'
        },
        grid: {
          display: false, // Set to false to remove background gray lines
        },
        ticks: {
          color: '#2368d6', // Set text color for the x-axis labels
          font:{
            family:"'Gilroy', sans-serif",
            size: 11,
          },
          stepSize: 250,
        },
        
      },
      
    },
  }}
/>
)
}

export default LineChartOptions;