import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { useAuth } from '../context/AuthContext';
import { Menu, Bell, ExternalLink } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom';

const TITLES = {
  '/': 'Dashboard',
  '/announcements': 'Announcements',
  '/blog': 'Blog Manager',
  '/gallery': 'Photo Gallery',
  '/faculty': 'Faculty & Staff',
  '/testimonials': 'Testimonials',
  '/events': 'Events Manager',
  '/achievements': 'Achievements',
  '/hero': 'Hero Section Editor',
  '/contact': 'Contact Info Editor',
};

export default function Layout() {
  const { user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  if (!user) return <Navigate to="/login" replace />;

  const title = Object.entries(TITLES).find(([k]) => pathname === k || (k !== '/' && pathname.startsWith(k)))?.[1] || 'Admin';

  return (
    <div className="admin-layout">
      {/* Desktop Sidebar */}
      <div style={{ display: 'none' }} className="sidebar-desktop">
        <Sidebar />
      </div>
      <Sidebar />

      {/* Mobile Sidebar */}
      {mobileOpen && <Sidebar mobile onClose={() => setMobileOpen(false)} />}

      <div className="admin-main">
        {/* Header */}
        <header style={{
          height: 'var(--header-h)', background: 'var(--surface)',
          borderBottom: '1px solid var(--border)', padding: '0 24px',
          display: 'flex', alignItems: 'center', gap: 16,
          boxShadow: 'var(--shadow)', position: 'sticky', top: 0, zIndex: 100,
          flexShrink: 0,
        }}>
          <button className="btn btn-ghost btn-icon" onClick={() => setMobileOpen(true)} style={{ display: 'none' }}>
            <Menu size={20} />
          </button>
          <div>
            <h1 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>{title}</h1>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
            <a href="https://mmps-rebrand.vercel.app" target="_blank" rel="noopener noreferrer"
              className="btn btn-outline btn-sm" style={{ gap: 6 }}>
              <ExternalLink size={14} /> View Site
            </a>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <span style={{ color: 'white', fontWeight: 700, fontSize: '.85rem' }}>{user?.name?.[0]}</span>
            </div>
          </div>
        </header>

        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
