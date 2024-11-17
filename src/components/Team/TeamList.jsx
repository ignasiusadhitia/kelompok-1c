import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TeamList = ({ team, onDelete }) => (
  <div className="p-6 bg-white dark:bg-gray-800">
    <h2 className="text-2xl font-bold mb-4">Team Members</h2>
    <Link
      className="mb-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      to="/dashboard/team/add"
    >
      Add Team Member
    </Link>
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {team?.map((member) => (
        <li key={member.id} className="py-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">{member.name}</h3>
            <p className="text-sm">{member.role}</p>
          </div>
          <div>
            <Link
              className="text-blue-600 hover:underline mr-4"
              to={`/dashboard/team/edit/${member.id}`}
            >
              Edit
            </Link>
            <button
              className="text-red-600 hover:underline"
              onClick={() => onDelete(member.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

TeamList.propTypes = {
  team: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TeamList;
