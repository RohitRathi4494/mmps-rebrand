import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { GraduationCap, Lock, Mail, Eye, EyeOff, Loader2 } from 'lucide-react';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const { login, loading } = useAuth();
  const toast = useToast();

  const handle = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(form.email, form.password);
      toast('Authentication Successful! 👋', 'success');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #0d1b3e 0%, #1a3c7e 50%, #0d1b3e 100%)',
      padding: 20, position: 'relative', overflow: 'hidden',
    }}>
      {/* Geometric decorations */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: 200 + i * 80, height: 200 + i * 80,
            borderRadius: '50%', border: '1px solid rgba(255,255,255,.05)',
            top: `${20 + i * 10}%`, left: `${10 + i * 15}%`,
          }} />
        ))}
      </div>

      <div style={{ width: '100%', maxWidth: 420, position: 'relative', zIndex: 1 }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{
            width: 72, height: 72, borderRadius: 20, background: 'rgba(255,255,255,.1)',
            border: '1px solid rgba(255,255,255,.2)', backdropFilter: 'blur(12px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px',
          }}>
            <GraduationCap size={36} color="#f5a623" />
          </div>
          <h1 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, marginBottom: 6 }}>
            MMPS Admin Dashboard
          </h1>
          <p style={{ color: 'rgba(255,255,255,.5)', fontSize: '.9rem' }}>
            M M Public School · Gurugram
          </p>
        </div>

        {/* Card */}
        <div style={{
          background: 'rgba(255,255,255,.07)', borderRadius: 20,
          border: '1px solid rgba(255,255,255,.12)', backdropFilter: 'blur(20px)',
          padding: '36px 32px',
        }}>
          <h2 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 600, marginBottom: 24 }}>Sign in to continue</h2>

          {error && (
            <div style={{ background: 'rgba(220,38,38,.15)', border: '1px solid rgba(220,38,38,.3)', borderRadius: 10, padding: '12px 16px', marginBottom: 20, color: '#fca5a5', fontSize: '.875rem' }}>
              {error}
            </div>
          )}

          <form onSubmit={handle} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div className="form-group">
              <label style={{ color: 'rgba(255,255,255,.6)', fontSize: '.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.04em' }}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,.4)', pointerEvents: 'none' }} />
                <input
                  type="email" required value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  placeholder="admin@mmps.edu.in"
                  style={{
                    width: '100%', padding: '12px 14px 12px 40px',
                    background: 'rgba(255,255,255,.08)', border: '1.5px solid rgba(255,255,255,.15)',
                    borderRadius: 10, color: 'white', fontSize: '.9rem', outline: 'none',
                    fontFamily: 'inherit',
                  }}
                  onFocus={e => e.target.style.borderColor = '#f5a623'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.15)'}
                />
              </div>
            </div>

            <div className="form-group">
              <label style={{ color: 'rgba(255,255,255,.6)', fontSize: '.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.04em' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,.4)', pointerEvents: 'none' }} />
                <input
                  type={showPw ? 'text' : 'password'} required value={form.password}
                  onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                  placeholder="••••••••"
                  style={{
                    width: '100%', padding: '12px 44px 12px 40px',
                    background: 'rgba(255,255,255,.08)', border: '1.5px solid rgba(255,255,255,.15)',
                    borderRadius: 10, color: 'white', fontSize: '.9rem', outline: 'none',
                    fontFamily: 'inherit',
                  }}
                  onFocus={e => e.target.style.borderColor = '#f5a623'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.15)'}
                />
                <button type="button" onClick={() => setShowPw(p => !p)}
                  style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.4)', padding: 0 }}>
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading} style={{
              background: 'linear-gradient(135deg, #f5a623, #e05a1e)',
              border: 'none', borderRadius: 12, padding: '14px',
              color: 'white', fontWeight: 700, fontSize: '1rem',
              cursor: loading ? 'not-allowed' : 'pointer', marginTop: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              opacity: loading ? .7 : 1, transition: 'all .2s', fontFamily: 'inherit',
            }}>
              {loading ? <><Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />Authenticating...</> : 'Authenticate ->'}
            </button>
          </form>

          <div style={{ marginTop: 24, padding: '14px 16px', background: 'rgba(255,255,255,.05)', borderRadius: 10, border: '1px solid rgba(255,255,255,.08)' }}>
            <p style={{ color: 'rgba(255,255,255,.5)', fontSize: '.78rem', marginBottom: 6, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.04em' }}>Connection Notice</p>
            <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '.82rem', lineHeight: 1.5 }}>
              This dashboard connects directly to your GitHub repository by proxying through Vercel Serverless Functions securely. No classic access tokens needed manually.
            </p>
          </div>
        </div>

        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,.3)', fontSize: '.78rem', marginTop: 20 }}>
          MMPS Admin · Secured · © 2026
        </p>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder { color: rgba(255,255,255,.25) !important; }
      `}</style>
    </div>
  );
}
