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

import DashboardLayout from './layouts/DashboardLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<LoginPage />} path="/" />
        <Route element={<RegisterPage />} path="/register" />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route element={<DashboardPage />} path="/dashboard" />
            <Route
              element={<AboutUsDashboardPage />}
              path="/dashboard/about-us"
            />
            <Route
              element={<ArticleDasboardPage />}
              path="/dashboard/articles"
            />
            <Route
              element={<ContactDasboardPage />}
              path="/dashboard/contact"
            />
            <Route
              element={<ExpertiseDashboardPage />}
              path="/dashboard/expertise"
            />
            <Route
              element={<PortfolioDashboardPage />}
              path="/dashboard/portfolio"
            />
            <Route
              element={<SubscribeDashboardPage />}
              path="/dashboard/subscribe"
            />
            <Route element={<TeamDashboardPage />} path="/dashboard/team" />
            <Route
              element={<TestimonialDashboardPage />}
              path="/dashboard/testimonials"
            />
            <Route
              element={<WhatWeDoDashboardPage />}
              path="/dashboard/what-we-do"
            />
          </Route>
        </Route>

        {/* Fallback */}
        <Route element={<LoginPage />} path="*" />
      </Routes>
    </Router>
  );
};

export default App;
