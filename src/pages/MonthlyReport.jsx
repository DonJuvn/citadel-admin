import React from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';

function MonthlyReport() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <h1>Monthly Report Page</h1>
            {/* Add temporary content for the monthly report */}
          </div>
        </main>
        <Banner />
      </div>
    </div>
  );
}

export default MonthlyReport;
