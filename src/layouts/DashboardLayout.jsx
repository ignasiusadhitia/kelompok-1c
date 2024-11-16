import React from 'react';

import { Outlet } from 'react-router-dom';

import Navbar from 'components/Shared/Navbar';
import Sidebar from 'components/Shared/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Sidebar />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
