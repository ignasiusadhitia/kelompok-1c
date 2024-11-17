import React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ProtectedRoute from 'components/Shared/ProtectedRoute';
import DashboardLayout from 'layouts/DashboardLayout';
import AboutUsFormPage from 'pages/AboutUsFormPage';
import AboutUsPage from 'pages/AboutUsPage';
import ArticleFormPage from 'pages/ArticleFormPage';
import ArticlePage from 'pages/ArticlePage';
import LoginPage from 'pages/Auth/LoginPage';
import RegisterPage from 'pages/Auth/RegisterPage';
import ContactPage from 'pages/ContactPage';
import ExpertiseFormPage from 'pages/ExpertiseFormPage';
import ExpertisePage from 'pages/ExpertisePage';
import OverviewPage from 'pages/OverviewPage';
import AddPortfolioFormPage from 'pages/Portfolio/AddPortfolioFormPage';
import EditPortfolioFormPage from 'pages/Portfolio/EditPortfolioFormPage';
import PortfolioDetailPage from 'pages/Portfolio/PortfolioDetailPage';
import PortfolioPage from 'pages/Portfolio/PortfolioPage';
import SubscribePage from 'pages/SubscribePage';
import TeamAddFormPage from 'pages/TeamAddFormPage';
import TeamEditFormPage from 'pages/TeamEditFormPage';
import TeamPage from 'pages/TeamPage';
import TestimonialFormPage from 'pages/TestimonialFormPage';
import TestimonialPage from 'pages/TestimonialPage';
import WhatWeDoFormPage from 'pages/WhatWeDoFormPage';
import WhatWeDoPage from 'pages/WhatWeDoPage';

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        {/* Public Routes */}
        <Route element={<LoginPage />} path="/" />
        <Route element={<RegisterPage />} path="/register" />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route element={<OverviewPage />} path="/dashboard" />
            <Route element={<AboutUsPage />} path="/dashboard/about-us" />
            <Route
              element={<AboutUsFormPage />}
              path="/dashboard/about-us/add"
            />
            <Route
              element={<AboutUsFormPage />}
              path="/dashboard/about-us/edit/:id"
            />
            <Route element={<ArticlePage />} path="/dashboard/articles" />
            <Route
              element={<ArticleFormPage />}
              path="/dashboard/articles/add"
            />
            <Route
              element={<ArticleFormPage />}
              path="/dashboard/articles/edit/:id"
            />
            <Route element={<ContactPage />} path="/dashboard/contact" />
            <Route element={<ExpertisePage />} path="/dashboard/expertise" />
            <Route
              element={<ExpertiseFormPage />}
              path="/dashboard/expertise/add"
            />
            <Route
              element={<ExpertiseFormPage />}
              path="/dashboard/expertise/edit/:id"
            />
            <Route element={<PortfolioPage />} path="/dashboard/portfolio" />
            <Route
              element={<PortfolioDetailPage />}
              path="/dashboard/portfolio/:id"
            />
            <Route
              element={<AddPortfolioFormPage />}
              path="/dashboard/portfolio/add"
            />
            <Route
              element={<EditPortfolioFormPage />}
              path="/dashboard/portfolio/edit/:id"
            />
            <Route element={<SubscribePage />} path="/dashboard/subscribe" />
            <Route element={<TeamPage />} path="/dashboard/team" />
            <Route element={<TeamAddFormPage />} path="/dashboard/team/add" />
            <Route
              element={<TeamEditFormPage />}
              path="/dashboard/team/edit/:id"
            />
            <Route
              element={<TestimonialPage />}
              path="/dashboard/testimonials"
            />
            <Route
              element={<TestimonialFormPage />}
              path="/dashboard/testimonials/add"
            />
            <Route
              element={<TestimonialFormPage />}
              path="/dashboard/testimonials/edit/:id"
            />
            <Route element={<WhatWeDoPage />} path="/dashboard/what-we-do" />
            <Route
              element={<WhatWeDoFormPage />}
              path="/dashboard/what-we-do/add"
            />
            <Route
              element={<WhatWeDoFormPage />}
              path="/dashboard/what-we-do/edit/:id"
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
