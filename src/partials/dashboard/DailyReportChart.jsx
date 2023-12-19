import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

function DailyReportChart() {
  const [monthlyData, setMonthlyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/daily_reports/daily_reports/');
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
    labels: monthlyData.map(item => item.date),
    datasets: [
      {
        label: 'Объем сделок',
        data: monthlyData.map(item => item.demand_volume),
        borderColor: '#2368d6',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Общая сумма',
        data: monthlyData.map(item => item.seller_offer),
        borderColor: 'rgb(45, 147, 204, 60%)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Объем в кВ',
        data: monthlyData.map(item => item.unsatisfied_demand),
        borderColor: 'rgb(45, 147, 204, 60%)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <div className=''>
      <Line
        data={chartData}
        options={{
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
                displayFormats: {
                  day: 'DD MMM',
                },
              },
              title: {
                display: true,
                text: 'Day',
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: '',
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

export default DailyReportChart;