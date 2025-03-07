import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Matching from './pages/Matching';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import PrivateRoute from './components/PrivateRoute';

interface RootState {
  auth: {
    isAuthenticated: boolean;
  };
}

const AppRoutes: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Routes>
      <Route 
        path="/login" 
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} 
      />
      <Route 
        path="/dashboard/*" 
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } 
      />
      {/* Các tuyến đường hỗ trợ khi truy cập trực tiếp các trang con */}
      <Route 
        path="/profile" 
        element={<Navigate to="/dashboard/profile" replace />} 
      />
      <Route 
        path="/matching" 
        element={<Navigate to="/dashboard/matching" replace />} 
      />
      <Route 
        path="/analytics" 
        element={<Navigate to="/dashboard/analytics" replace />} 
      />
      <Route 
        path="/settings" 
        element={<Navigate to="/dashboard/settings" replace />} 
      />
      {/* Redirect to dashboard if authenticated, otherwise to login */}
      <Route 
        path="/" 
        element={
          isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
        } 
      />
      {/* Nếu không tìm thấy route, chuyển về dashboard hoặc login */}
      <Route 
        path="*" 
        element={
          isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
        } 
      />
    </Routes>
  );
};

export default AppRoutes; 