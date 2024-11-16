import React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AboutUsDashboardPage from './pages/AboutUsDashboardPage';
import ArticleDasboardPage from './pages/ArticleDasboardPage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import ContactDasboardPage from './pages/ContactDasboardPage';
import DashboardPage from './pages/DashboardPage';
import ExpertiseDashboardPage from './pages/ExpertiseDashboardPage';
import PortfolioDashboardPage from './pages/PortfolioDashboardPage';
import ProtectedRoute from './pages/ProtectedRoute';
import SubscribeDashboardPage from './pages/SubscribeDashboardPage';
import TeamDashboardPage from './pages/TeamDashboardPage';
import TestimonialDashboardPage from './pages/TestimonialDashboardPage';
import WhatWeDoDashboardPage from './pages/WhatWeDoDashboardPage';

import AddPortfolioContainer from './containers/Portfolio/AddPortfolioContainer';
import EditPortfolioContainer from './containers/Portfolio/EditPortfolioContainer';
import PortfolioDetail from './components/Portfolio/PortfolioDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LoginPage />} path="/" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<DashboardPage />} path="/dashboard" />
        <Route element={<AboutUsDashboardPage />} path="/about-us" />

        <Route element={<ArticleDasboardPage />} path="/articles" />
        <Route element={<ContactDasboardPage />} path="/contact" />
        <Route element={<ExpertiseDashboardPage />} path="/expertise" />
        <Route element={<PortfolioDashboardPage />} path="/portfolio" />
        <Route element={<SubscribeDashboardPage />} path="/subscribe" />
        <Route element={<TeamDashboardPage />} path="/team" />
        <Route element={<TestimonialDashboardPage />} path="/testimonials" />
        <Route element={<WhatWeDoDashboardPage />} path="/testimonials" />
        <Route element={<ProtectedRoute />}></Route>
        <Route element={<LoginPage />} path="*" />

        // Routes for Portfolio
        <Route element={<AddPortfolioContainer/>} path="/portfolio/add-data" />
        <Route element={<EditPortfolioContainer />} path="/portfolio/edit-data/:id" />
        <Route element={<PortfolioDetail />} path="/portfolio/:id" />
      </Routes>
    </Router>
  );
};

export default App;
