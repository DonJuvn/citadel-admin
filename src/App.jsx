import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './css/style.css';
import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import DailyReport from './pages/DailyReport'; // Import the DailyReport page
import WeeklyReport from './pages/WeeklyReport'; // Import the WeeklyReport page
import MonthlyReport from './pages/MonthlyReport'; // Import the MonthlyReport page
import QuarterlyReport from './pages/QuarterlyReport'; // Import the QuarterlyReport page

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/daily-reports" element={<DailyReport />} /> {/* Route for DailyReport */}
        <Route path="/weekly-reports" element={<WeeklyReport />} /> {/* Route for WeeklyReport */}
        <Route path="/monthly-reports" element={<MonthlyReport />} /> {/* Route for MonthlyReport */}
        <Route path="/quarterly-reports" element={<QuarterlyReport />} /> {/* Route for QuarterlyReport */}
      </Routes>
    </>
  );
}

export default App;
