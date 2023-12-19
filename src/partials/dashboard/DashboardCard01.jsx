import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard01() {
  const [monthlyData, setMonthlyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/monthly_reports/monthly_reports/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMonthlyData(data);
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

  if (monthlyData.length === 0) {
    return <div>No data available</div>; // Handle the case when there is no data
  }

  const chartData = {
    labels: monthlyData.map(item => item.month),
    datasets: [
      {
        label: 'Объем сделок',
        data: monthlyData.map(item => item.deal_volume),
        // borderColor: '#2368d6',
        // borderWidth: 2,
        // fill: false,
        // borderRadius: 10, // Set border radius for this dataset

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
        data: monthlyData.map(item => item.total_amount_kzt),
        // borderColor: 'rgb(45, 147, 204, 60%)',
        // borderWidth: 2,
        // fill: false,
        // borderRadius: 10, // Set border radius for this dataset

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
        data: monthlyData.map(item => item.volume_kWh),
        // borderColor: 'rgb(45, 147, 204, 60%)',
        // borderWidth: 2,
        // fill: false,
        // borderRadius: 10, // Set border radius for this dataset

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
        options={{
          scales: {
            x: {
              // type: 'time',
              time: {
                unit: 'month',
                displayFormats: {
                  month: 'MMM YYYY',
                },
                font:{
                  size: 12,
                  family: "'Gilroy', sans-serif",
                  weight: 700,
                }
              },
              title: {
                display: true,
                text: 'Month',
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
              beginAtZero: true,
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
                }
              },
              
            },
            
          },
        }}
        // width={1000}
        // height={800}
      />
    </div>
  );
}

export default DashboardCard01;
