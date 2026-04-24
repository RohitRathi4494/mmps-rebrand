import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard, Megaphone, BookOpen, Image, Users, Calendar,
  Trophy, Star, Phone, Shield, GraduationCap, ChevronRight,
  LogOut, Menu, X, Settings, Globe
} from 'lucide-react';

const NAV = [
  { group: 'Overview',  items: [
    { to: '/',              icon: LayoutDashboard, label: 'Dashboard' },
  ]},
  { group: 'Content',   items: [
    { to: '/announcements', icon: Megaphone,       label: 'Announcements' },
    { to: '/blog',          icon: BookOpen,        label: 'Blog Manager' },
    { to: '/gallery',       icon: Image,           label: 'Photo Gallery' },
  ]},
  { group: 'People',    items: [
    { to: '/faculty',       icon: Users,           label: 'Faculty & Staff' },
    { to: '/testimonials',  icon: Star,            label: 'Testimonials' },
  ]},
  { group: 'Activities', items: [
    { to: '/events',        icon: Calendar,        label: 'Events' },
    { to: '/achievements',  icon: Trophy,          label: 'Achievements' },
  ]},
  { group: 'Site Config', items: [
    { to: '/hero',          icon: Globe,           label: 'Hero Section' },
    { to: '/contact',       icon: Phone,           label: 'Contact Info' },
  ]},
];

export default function Sidebar({ mobile, onClose }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const doLogout = () => { logout(); navigate('/login'); };

  return (
    <>
      {mobile && <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.5)', zIndex: 199 }} />}
      <aside style={{
        width: 'var(--sidebar-w)', background: 'var(--navy)',
        display: 'flex', flexDirection: 'column', height: '100vh',
        position: mobile ? 'fixed' : 'relative', left: 0, top: 0, zIndex: 200,
        transform: mobile ? 'translateX(0)' : undefined,
        boxShadow: mobile ? 'var(--shadow-lg)' : '1px 0 0 rgba(255,255,255,.05)',
        transition: 'transform .25s ease',
        overflowY: 'auto', overflowX: 'hidden',
      }}>
        {/* Logo */}
        <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid rgba(255,255,255,.07)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(245,166,35,.15)', border: '1px solid rgba(245,166,35,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <GraduationCap size={22} color="#f5a623" />
          </div>
          <div>
            <div style={{ color: 'white', fontWeight: 700, fontSize: '.92rem', lineHeight: 1.2 }}>MMPS Admin</div>
            <div style={{ color: 'rgba(255,255,255,.35)', fontSize: '.72rem' }}>Content Manager</div>
          </div>
          {mobile && (
            <button onClick={onClose} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.4)', padding: 4 }}>
              <X size={20} />
            </button>
          )}
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '12px 10px', overflowY: 'auto' }}>
          {NAV.map(group => (
            <div key={group.group} style={{ marginBottom: 4 }}>
              <div style={{ color: 'rgba(255,255,255,.25)', fontSize: '.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', padding: '10px 10px 6px' }}>
                {group.group}
              </div>
              {group.items.map(item => (
                <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={mobile ? onClose : undefined}
                  style={({ isActive }) => ({
                    display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px',
                    borderRadius: 10, textDecoration: 'none', marginBottom: 2,
                    background: isActive ? 'rgba(245,166,35,.12)' : 'transparent',
                    color: isActive ? '#f5a623' : 'rgba(255,255,255,.55)',
                    fontWeight: isActive ? 600 : 400, fontSize: '.875rem',
                    transition: 'all .15s',
                    borderLeft: isActive ? '3px solid #f5a623' : '3px solid transparent',
                  })}
                >
                  <item.icon size={17} />
                  {item.label}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        {/* User */}
        <div style={{ padding: '12px 12px', borderTop: '1px solid rgba(255,255,255,.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 8px', borderRadius: 12, background: 'rgba(255,255,255,.05)', marginBottom: 8 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: 'white', fontWeight: 700, fontSize: '.85rem' }}>{user?.name?.[0]}</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ color: 'white', fontWeight: 600, fontSize: '.85rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user?.name}</div>
              <div style={{ color: 'rgba(255,255,255,.3)', fontSize: '.72rem', textTransform: 'capitalize' }}>{user?.role}</div>
            </div>
          </div>
          <button onClick={doLogout} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8, padding: '9px 12px', background: 'transparent', border: 'none', borderRadius: 10, cursor: 'pointer', color: 'rgba(255,255,255,.4)', fontSize: '.85rem', transition: 'all .15s' }}
            onMouseOver={e => { e.currentTarget.style.background='rgba(220,38,38,.1)'; e.currentTarget.style.color='#fca5a5'; }}
            onMouseOut={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='rgba(255,255,255,.4)'; }}>
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}
