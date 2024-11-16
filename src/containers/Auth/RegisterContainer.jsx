import React, { useState } from 'react';

import RegisterForm from 'components/Auth/RegisterForm';
import useAuth from 'hooks/useAuth';

const RegisterContainer = () => {
  const { register, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    role: 'admin',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await register(formData);
    if (response) {
      setSuccessMessage(response.message);
      setFormData({ name: '', username: '', password: '', role: 'admin' });
    }
  };
  return (
    <RegisterForm
      error={error}
      formData={formData}
      loading={loading}
      success={successMessage}
      onHandleChange={handleChange}
      onHandleSubmit={handleSubmit}
    />
  );
};

export default RegisterContainer;
