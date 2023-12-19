import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
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

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            {/* <WelcomeBanner /> */}

            {/* Dashboard actions */}
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

            {/* Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Other DashboardCard components */}
              {/* ... */}
              <DashboardCard01 />
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
