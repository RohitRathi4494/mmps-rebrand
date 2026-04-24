import React, { useEffect, useState } from 'react';
import { getStats } from '../services/mockData';
import { Megaphone, BookOpen, Users, Calendar, Trophy, Star, Image, TrendingUp, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const STAT_DEFS = [
  { key: 'announcements', label: 'Announcements',    icon: Megaphone, color: '#1a3c7e', bg: '#dbeafe', to: '/announcements' },
  { key: 'published',     label: 'Published Blogs',  icon: BookOpen,  color: '#16a34a', bg: '#dcfce7', to: '/blog' },
  { key: 'faculty',       label: 'Faculty Members',  icon: Users,     color: '#7c3aed', bg: '#ede9fe', to: '/faculty' },
  { key: 'events',        label: 'Events',           icon: Calendar,  color: '#d97706', bg: '#fef3c7', to: '/events' },
  { key: 'achievements',  label: 'Achievements',     icon: Trophy,    color: '#e05a1e', bg: '#fed7aa', to: '/achievements' },
  { key: 'testimonials',  label: 'Testimonials',     icon: Star,      color: '#0891b2', bg: '#e0f2fe', to: '/testimonials' },
  { key: 'gallery',       label: 'Gallery Items',    icon: Image,     color: '#db2777', bg: '#fce7f3', to: '/gallery' },
  { key: 'blogs',         label: 'Total Blogs',      icon: TrendingUp,color: '#059669', bg: '#d1fae5', to: '/blog' },
];

const QUICK_ACTIONS = [
  { label: 'New Announcement', to: '/announcements', icon: Megaphone, color: 'var(--primary)' },
  { label: 'Write Blog Post',  to: '/blog',          icon: BookOpen,  color: 'var(--success)' },
  { label: 'Add Event',        to: '/events',        icon: Calendar,  color: 'var(--warning)' },
  { label: 'Add Faculty',      to: '/faculty',       icon: Users,     color: '#7c3aed' },
  { label: 'Upload Photo',     to: '/gallery',       icon: Image,     color: '#db2777' },
  { label: 'Add Achievement',  to: '/achievements',  icon: Trophy,    color: 'var(--accent)' },
];

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const { user } = useAuth();

  useEffect(() => { getStats().then(setStats); }, []);

  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div>
      {/* Welcome Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--navy) 100%)',
        borderRadius: 'var(--radius-lg)', padding: '28px 32px', marginBottom: 28,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', right: -20, top: -20, width: 180, height: 180, background: 'rgba(255,255,255,.04)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', right: 60, bottom: -40, width: 140, height: 140, background: 'rgba(255,255,255,.03)', borderRadius: '50%' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: 'rgba(255,255,255,.55)', fontSize: '.85rem', marginBottom: 6 }}>{greeting},</p>
          <h2 style={{ color: 'white', fontSize: '1.6rem', fontWeight: 700, marginBottom: 8 }}>{user?.name} 👋</h2>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.9rem' }}>
            Welcome to the MMPS Content Management Dashboard. Manage site content from one place.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14, marginBottom: 28 }}>
        {STAT_DEFS.map(s => (
          <Link key={s.key} to={s.to} style={{ textDecoration: 'none' }}>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: s.bg }}>
                <s.icon size={24} color={s.color} />
              </div>
              <div>
                <div className="stat-value">{stats ? stats[s.key] ?? 0 : <span className="skeleton" style={{ width: 40, height: 28, display: 'block' }} />}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="card">
        <div className="card-header">
          <h3>Quick Actions</h3>
          <span style={{ fontSize: '.8rem', color: 'var(--text-muted)' }}>Jump right in</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12 }}>
          {QUICK_ACTIONS.map(a => (
            <Link key={a.label} to={a.to} style={{ textDecoration: 'none' }}>
              <div style={{
                padding: '18px 16px', borderRadius: 'var(--radius)',
                border: '1.5px solid var(--border)', background: 'var(--surface-2)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                textAlign: 'center', cursor: 'pointer', transition: 'all .2s',
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = a.color; e.currentTarget.style.background = 'white'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface-2)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: a.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <a.icon size={20} color={a.color} />
                </div>
                <span style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--text)' }}>{a.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
