import React, { useState } from 'react';
import PortfolioListItem from './PortfolioListItem';

const PortfolioList = ({ portfolios, loading, error, fetchPortfolios }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-4 py-3" scope="col">
              Date
            </th>
            <th className="px-4 py-3" scope="col">
              Title
            </th>
            <th className="px-4 py-3" scope="col">
              Description
            </th>
            <th className="px-4 py-3" scope="col">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan="100%" className="text-center">
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mr-2"></div>
                  Loading...
                </div>
              </td>
            </tr>
          )}

          {!loading && error && (
            <tr>
              <td colSpan="100%" className="text-center text-danger">
                {error}
              </td>
            </tr>
          )}

          {!loading && error === null && portfolios.length === 0 && (
            <tr>
              <td colSpan="100%" className="text-center">
                No data found
              </td>
            </tr>
          )}

          {portfolios.map((portfolio) => (
            <PortfolioListItem
              portfolio={portfolio}
              key={portfolio.id}
              fetchPortfolios={fetchPortfolios}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioList;
