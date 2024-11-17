import React, { useEffect, useState } from 'react';

import teamService from 'api/services/teamService';

import TeamList from '../../components/Team/TeamList';

const TeamListContainer = () => {
  const [team, setTeam] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await teamService.getAll();
        setTeam(data.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch team members');
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      try {
        await teamService.delete(id);
        setTeam((prev) => prev.filter((member) => member.id !== id));
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to delete team member');
      }
    }
  };

  return <TeamList team={team} onDelete={handleDelete} />;
};

export default TeamListContainer;
