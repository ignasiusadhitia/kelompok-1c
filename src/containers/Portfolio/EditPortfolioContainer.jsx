import React from 'react';
import { useLocation } from 'react-router-dom';
import PortfolioForm from '../../components/Portfolio/PortfolioForm';

const EditPortfolioContainer = () => {
  const location = useLocation();
  const portfolio = location.state;

  return <PortfolioForm isEdit={true} portfolio={portfolio} />;
};

export default EditPortfolioContainer;
