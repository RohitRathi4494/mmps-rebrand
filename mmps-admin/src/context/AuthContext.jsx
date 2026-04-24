import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Store the user profile (usually their GitHub handle) and their token
  const [session, setSession] = useState(() => {
    try { 
      return JSON.parse(localStorage.getItem('mmps_github_session')); 
    } catch { 
      return null; 
    }
  });

  const [loading, setLoading] = useState(false);

  const login = async (token) => {
    setLoading(true);
    try {
      // Validate the token by fetching the authenticated user from GitHub
      const response = await fetch('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
        }
      });

      if (!response.ok) {
        throw new Error('Invalid GitHub token. Ensure it has repo scopes.');
      }

      const userData = await response.json();
      
      const newSession = {
        token: token,
        name: userData.name || userData.login,
        avatar: userData.avatar_url,
        username: userData.login,
        role: 'admin' // If they have a valid token giving repo access, they are an admin
      };

      localStorage.setItem('mmps_github_session', JSON.stringify(newSession));
      setSession(newSession);
      return newSession;

    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('mmps_github_session');
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user: session, 
      token: session?.token, 
      loading, 
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
