import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import teamService from 'api/services/teamService';
import TeamForm from 'components/Team/TeamForm';

const TeamAddPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
  });
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('role', formData.role);
    if (file) formDataToSend.append('image', file);

    try {
      await teamService.create(formDataToSend);
      navigate('/dashboard/team/list');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add team member');
    }
  };

  return (
    <TeamForm
      error={error}
      formData={formData}
      isEdit={false}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
};

export default TeamAddPage;
