import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

function DashboardCard01() {
  const [monthlyData, setMonthlyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/monthly_reports/monthly_reports/');
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
        borderColor: '#2368d6',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Общая сумма',
        data: monthlyData.map(item => item.total_amount_kzt),
        borderColor: 'rgb(45, 147, 204, 60%)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Объем в кВ',
        data: monthlyData.map(item => item.volume_kWh),
        borderColor: 'rgb(45, 147, 204, 60%)',
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
