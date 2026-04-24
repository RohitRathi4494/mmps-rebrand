import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';

const ToastContext = createContext(null);

const ICONS = {
  success: <CheckCircle size={20} color="var(--success)" />,
  error:   <XCircle    size={20} color="var(--danger)"  />,
  warning: <AlertTriangle size={20} color="var(--warning)" />,
  info:    <Info       size={20} color="var(--info)"    />,
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback((message, type = 'success', duration = 3500) => {
    const id = Date.now();
    setToasts(p => [...p, { id, message, type }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), duration);
  }, []);

  const remove = (id) => setToasts(p => p.filter(t => t.id !== id));

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="toast-container">
        {toasts.map(t => (
          <div key={t.id} className={`toast toast-${t.type}`}>
            {ICONS[t.type]}
            <span style={{ flex: 1, fontSize: '.875rem' }}>{t.message}</span>
            <button className="btn-icon btn-ghost" style={{ padding: 4 }} onClick={() => remove(t.id)}>
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
