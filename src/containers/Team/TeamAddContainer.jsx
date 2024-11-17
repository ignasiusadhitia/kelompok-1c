import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import teamService from 'api/services/teamService';
import TeamForm from 'components/Team/TeamForm';

const TeamAddContainer = () => {
  const [formData, setFormData] = useState({ name: '', title: '' });
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setPreviewImage(URL.createObjectURL(file)); // Buat URL untuk preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('title', formData.title);
    if (file) data.append('image', file);

    try {
      await teamService.create(data);
      navigate('/dashboard/team/');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add team member');
    }
  };

  // Bersihkan URL preview saat komponen di-unmount
  useEffect(() => {
    return () => {
      if (previewImage) URL.revokeObjectURL(previewImage);
    };
  }, [previewImage]);

  return (
    <TeamForm
      error={error}
      formData={formData}
      isEdit={false}
      previewImage={previewImage} // Kirim previewImage ke komponen form
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
};

export default TeamAddContainer;
