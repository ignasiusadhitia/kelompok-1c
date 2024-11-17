import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import teamService from 'api/services/teamService';
import TeamForm from 'components/team/TeamForm';

const TeamEditContainer = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    imageUrl: '',
  });
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await teamService.getAll();
        const teamMembers = response.data;

        const teamMember = teamMembers.find(
          (member) => String(member.id) === id
        );
        if (teamMember) {
          setFormData({
            name: teamMember.name,
            title: teamMember.title,
            imageUrl: teamMember.imageUrl,
          });
        } else {
          setError('Team member not found');
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch data');
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('title', formData.title);
    if (file) data.append('image', file);

    try {
      await teamService.update(id, data);
      navigate('/dashboard/team');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update team member');
    }
  };

  return (
    <TeamForm
      error={error}
      formData={formData}
      isEdit={true}
      previewImage={previewImage}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
};

export default TeamEditContainer;
