import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

// Mock credentials — replace with real API call
const MOCK_USERS = [
  { id: 1, email: 'admin@mmps.edu.in', password: 'mmps@admin123', name: 'Admin User', role: 'super-admin', avatar: null },
  { id: 2, email: 'editor@mmps.edu.in', password: 'editor@123', name: 'Content Editor', role: 'editor', avatar: null },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('mmps_admin_user')); } catch { return null; }
  });
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 800)); // simulate network
    const found = MOCK_USERS.find(u => u.email === email && u.password === password);
    setLoading(false);
    if (!found) throw new Error('Invalid email or password. Please try again.');
    const { password: _p, ...safe } = found;
    localStorage.setItem('mmps_admin_user', JSON.stringify(safe));
    setUser(safe);
    return safe;
  };

  const logout = () => {
    localStorage.removeItem('mmps_admin_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAdmin: user?.role === 'super-admin' }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
