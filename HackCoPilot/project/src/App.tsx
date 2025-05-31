import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import GeneratorPage from './pages/GeneratorPage';
import ProjectIdeasPage from './pages/ProjectIdeasPage';
import TechStackPage from './pages/TechStackPage';
import TemplatesPage from './pages/TemplatesPage';
import PitchDecksPage from './pages/PitchDecksPage';
import ResourcesPage from './pages/ResourcesPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="generator" element={<GeneratorPage />} />
          <Route path="project-ideas" element={<ProjectIdeasPage />} />
          <Route path="tech-stack" element={<TechStackPage />} />
          <Route path="templates" element={<TemplatesPage />} />
          <Route path="pitch-decks" element={<PitchDecksPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;