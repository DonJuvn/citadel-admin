import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';
import QuarterlyReportChart from '../partials/dashboard/QuarterlyReportChart';
import SwitchButtons from '../partials/swithcers';

function QuarterlyReport() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* <Sidebar /> */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* <Header /> */}
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Avatars */}
              {/* Replace DashboardAvatars with navigation links */}
              <SwitchButtons/>
            </div>
            <h1>Quarterly Report Page</h1>
            {/* Add temporary content for the quarterly report */}
            <QuarterlyReportChart/>
          </div>
        </main>
        <Banner />
      </div>
    </div>
  );
}

export default QuarterlyReport;
