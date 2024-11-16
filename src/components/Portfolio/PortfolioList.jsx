import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PortfolioListItem from './PortfolioListItem';

const PortfolioList = ({ portfolios, loading, error, fetchPortfolios }) => {

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                Portofolio List
              </h1>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <Link
                to="/portfolio/add-data"
                className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                <svg
                  aria-hidden="true"
                  className="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    fillRule="evenodd"
                  />
                </svg>
                Add portfolio
              </Link>
            </div>
          </div>
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
                  <PortfolioListItem portfolio={portfolio} key={portfolio.id} fetchPortfolios={fetchPortfolios} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioList;

PortfolioList.propTypes = {
  portfolios: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
