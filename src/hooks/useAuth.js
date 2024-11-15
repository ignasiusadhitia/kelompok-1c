import React, { useState } from 'react';

import authService from '../api/services/authService';

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const data = await authService.login(credentials);
      localStorage.setItem('token', data.token);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return { login, logout, loading, error };
};

export default useAuth;
