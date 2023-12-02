import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

function DashboardCard01() {
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/monthly_reports/monthly_reports/');
        const data = await response.json();
        // console.log('Monthly Data:', data);
        setMonthlyData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (monthlyData.length === 0) {
    return null; // or render a loading indicator
  }

  const chartData = {
    labels: monthlyData.map(item => item.month),
    datasets: [
      {
        label: 'Объем сделок',
        data: monthlyData.map(item => item.deal_volume),
        borderColor: '#2368d6',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Общая сумма',
        data: monthlyData.map(item => item.total_amount_kzt), // replace with the actual data property
        borderColor: 'rgb(45, 147, 204, 60%)', // gray color
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Объем в кВ',
        data: monthlyData.map(item => item.volume_kWh), // replace with the actual data property
        borderColor: 'rgb(45, 147, 204, 60%)', // gray color
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <div>
      <Line
        data={chartData}
        options={{
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'month',
                displayFormats: {
                  month: 'MMM YYYY',
                },
              },
              title: {
                display: true,
                text: 'Month',
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Объем сделок',
              },
            },
          },
        }}
        width={1000}
        height={800}
      />
    </div>
  );
}

export default DashboardCard01;
