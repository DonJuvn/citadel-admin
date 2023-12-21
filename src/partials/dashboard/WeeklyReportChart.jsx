import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import moment from 'moment';
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function WeeklyReportChart() {
  const [weeklyData, setWeeklyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/weekly-reports/weekly-reports/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setWeeklyData(data);
      } catch (error) {
        setError(error.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading indicator component
  }

  if (error) {
    return <div>Error: {error}</div>; // Render an error message if fetching data fails
  }

  if (weeklyData.length === 0) {
    return <div>No data available</div>; // Handle the case when there is no data
  }

  const chartData = {
    // labels: weeklyData.map(item => item.start_date),
    labels: weeklyData.map(item => moment(item.start_date).format('DD MMM YYYY')),
    datasets: [
      {
        label: 'Объем сделок',
        data: weeklyData.map(item => item.total_volume_miners),
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,          
        clip: 20,
      },
      {
        label: 'Общая сумма',
        data: weeklyData.map(item => item.total_volume_energy_producers),
        borderColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
      {
        label: 'Объем в кВ',
        data: weeklyData.map(item => item.min_miners),
        borderColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
      {
        label: 'Объем в кВ',
        data: weeklyData.map(item => item.max_miners),
        borderColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
      {
        label: 'Объем в кВ',
        data: weeklyData.map(item => item.min_energy_producers),
        borderColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
      {
        label: 'Объем в кВ',
        data: weeklyData.map(item => item.max_energy_producers),
        borderColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 px-5 pt-5">
      <Line 
        data={chartData}
        width={500} // Adjust the width as needed
        height={200} // Adjust the height as needed
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
    </div>
  );
}

export default WeeklyReportChart;