import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();
const SESSION_KEY = 'mmps_admin_session';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const sessionData = localStorage.getItem(SESSION_KEY);
      if (sessionData) {
        setUser(JSON.parse(sessionData));
      }
    } catch (e) {
      console.error("Session parse error", e);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Authentication failed');
      }

      // data contains { token, user: { email, role } }
      localStorage.setItem(SESSION_KEY, JSON.stringify(data));
      setUser(data);
      return data;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  // Provide a safe generic proxy for the currently authenticated user
  const _isAuthenticated = !!user?.token;

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, isAuthenticated: _isAuthenticated }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
