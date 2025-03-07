import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials, logout } from '../store/slices/authSlice';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        dispatch(logout());
        return;
      }

      try {
        // Gọi API để verify token
        const response = await fetch('/api/verify-token', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Token invalid');
        }

        const data = await response.json();
        dispatch(setCredentials({
          user: data.user,
          token
        }));
      } catch (error) {
        localStorage.removeItem('token');
        dispatch(logout());
      }
    };

    checkAuth();
  }, [dispatch]);

  return <>{children}</>;
}; 