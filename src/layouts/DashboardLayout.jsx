import React from 'react';

import PropTypes from 'prop-types';

import Navbar from 'components/Shared/Navbar';
import Sidebar from 'components/Shared/Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Sidebar />
      <main className="p-4 md:ml-64 h-auto pt-20">{children}</main>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
