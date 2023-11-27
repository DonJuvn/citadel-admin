import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

function DashboardCard01() {
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/monthly_reports/monthly_reports/');
        const data = await response.json();
        console.log('Monthly Data:', data);
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
        label: 'Deal Volume',
        data: monthlyData.map(item => item.deal_volume),
        borderColor: 'rgba(75,192,192,1)',
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
                text: 'Deal Volume',
              },
            },
          },
        }}
        width={1000}
        height={500}
      />
    </div>
  );
}

export default DashboardCard01;
