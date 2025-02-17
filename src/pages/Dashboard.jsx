import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
// import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';
import SwitchButtons from '../partials/swithcers';
import MonthlyReportChart from '../partials/dashboard/MonthlyReportChart';
import DailyReportChart from '../partials/dashboard/DailyReportChart';
import WeeklyReportChart from '../partials/dashboard/WeeklyReportChart';
import QuarterlyReportChart from '../partials/dashboard/QuarterlyReportChart';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            
            {/* <WelcomeBanner /> */}

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Avatars */}
              {/* Replace DashboardAvatars with navigation links */}
              <SwitchButtons/>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-8 gap-4">
              {/* Other DashboardCard components */}
              {/* ... */}
              <MonthlyReportChart />
              <DailyReportChart />
              <WeeklyReportChart />
              <QuarterlyReportChart />
              <DashboardCard02 />
              <DashboardCard03 />
              {/* ... */}
              <DashboardCard04 />
              {/* ... */}
              <DashboardCard06 />
              {/* ... */}
              <DashboardCard07 />
              {/* ... */}
              <DashboardCard08 />
              {/* ... */}
              <DashboardCard09 />
              {/* ... */}
              <DashboardCard10 />
              {/* ... */}
              <DashboardCard11 />
              {/* ... */}
              <DashboardCard12 />
              {/* ... */}
              <DashboardCard13 />
            </div>
          </div>
        </main>

        <Banner />
      </div>
    </div>
  );
}

export default Dashboard;
