import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PortfolioList from '../../components/Portfolio/PortfolioList';

const PortfolioContainer = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Fetch Portfolio Data
  const fetchPortfolios = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/portfolio`,
        {
          headers: {
            authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      setPortfolios(response.data.data);
      // console.log('Portfolios:', response.data);
    } catch (error) {
      setError(
        error.response.data.message || error.message || 'Something went wrong'
      );
      // console.log(error)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  return (
    <PortfolioList portfolios={portfolios} loading={loading} error={error} fetchPortfolios={fetchPortfolios} />
  );
};

export default PortfolioContainer;
