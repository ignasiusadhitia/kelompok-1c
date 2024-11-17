import axios from '../axiosConfig';

const teamService = {
  create: async (teamData) => {
    const response = await axios.post('/api/team', teamData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  getAll: async () => {
    const response = await axios.get('/api/team');
    return response.data;
  },

  update: async (id, teamData) => {
    const response = await axios.put(`/api/team/${id}`, teamData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  delete: async (id) => {
    const response = await axios.delete(`/api/team/${id}`);
    return response.data;
  },
};

export default teamService;
