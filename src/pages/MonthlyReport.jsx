import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';

import MonthlyReportChart from '../partials/dashboard/MonthlyReportChart';

function MonthlyReport() {
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
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Navigation Link for Daily Report */}
                <Link to="/daily-reports" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <span className="hidden xs:block ml-2">Daily Report</span>
                </Link>

                {/* Navigation Link for Weekly Report */}
                <Link to="/weekly-reports" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <span className="hidden xs:block ml-2">Weekly Report</span>
                </Link>

                {/* Navigation Link for Monthly Report */}
                <Link to="/monthly-reports" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <span className="hidden xs:block ml-2">Monthly Report</span>
                </Link>

                {/* Navigation Link for Quarterly Report */}
                <Link to="/quarterly-reports" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <span className="hidden xs:block ml-2">Quarterly Report</span>
                </Link>
              </div>
            </div>
            <h1>Monthly Report Page</h1>
            {/* Add temporary content for the monthly report */}
            <MonthlyReportChart/>
          </div>
        </main>
        <Banner />
      </div>
    </div>
  );
}

export default MonthlyReport;
