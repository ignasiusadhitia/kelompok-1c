import React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ProtectedRoute from 'components/Shared/ProtectedRoute';
import AboutUsDashboardPage from 'pages/AboutUsDashboardPage';
import ArticleDasboardPage from 'pages/ArticleDasboardPage';
import LoginPage from 'pages/Auth/LoginPage';
import RegisterPage from 'pages/Auth/RegisterPage';
import ContactDasboardPage from 'pages/ContactDasboardPage';
import DashboardPage from 'pages/DashboardPage';
import ExpertiseDashboardPage from 'pages/ExpertiseDashboardPage';
import PortfolioDashboardPage from 'pages/PortfolioDashboardPage';
import SubscribeDashboardPage from 'pages/SubscribeDashboardPage';
import TeamDashboardPage from 'pages/TeamDashboardPage';
import TestimonialDashboardPage from 'pages/TestimonialDashboardPage';
import WhatWeDoDashboardPage from 'pages/WhatWeDoDashboardPage';

const App = () => {
  return (
    // To minimize risk of breaking changes, and future updates on react-router-dom v7
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<LoginPage />} path="/" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<ProtectedRoute />}>
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
        </Route>
        <Route element={<LoginPage />} path="*" />
      </Routes>
    </Router>
  );
};

export default App;
