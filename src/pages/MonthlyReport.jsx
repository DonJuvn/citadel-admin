import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';

import MonthlyReportChart from '../partials/dashboard/MonthlyReportChart';
import SwitchButtons from '../partials/swithcers';
import DailyReportChart from '../partials/dashboard/DailyReportChart';

function MonthlyReport() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* <Sidebar /> */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* <Header /> */}
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <SwitchButtons/>
              </div>
            </div>
            <h1>Monthly Report Page</h1>
            {/* Add temporary content for the monthly report */}
            <MonthlyReportChart/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MonthlyReport;
