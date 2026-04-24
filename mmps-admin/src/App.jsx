import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AnnouncementsManager from './pages/AnnouncementsManager';
import BlogManager from './pages/BlogManager';
import GalleryManager from './pages/GalleryManager';
import FacultyManager from './pages/FacultyManager';
import EventsManager from './pages/EventsManager';
import AchievementsManager from './pages/AchievementsManager';
import TestimonialsManager from './pages/TestimonialsManager';
import ContactEditor from './pages/ContactEditor';
import HeroEditor from './pages/HeroEditor';

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

function AppRoutes() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
      <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route index element={<Dashboard />} />
        <Route path="announcements" element={<AnnouncementsManager />} />
        <Route path="blog" element={<BlogManager />} />
        <Route path="gallery" element={<GalleryManager />} />
        <Route path="faculty" element={<FacultyManager />} />
        <Route path="events" element={<EventsManager />} />
        <Route path="achievements" element={<AchievementsManager />} />
        <Route path="testimonials" element={<TestimonialsManager />} />
        <Route path="contact" element={<ContactEditor />} />
        <Route path="hero" element={<HeroEditor />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  );
}
