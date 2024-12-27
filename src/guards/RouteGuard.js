import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../services/authService';

const RouteGuard = ({ role, children }) => {
  const user = authService.getUser();
  if (!user || user.role !== role) {
    return <Navigate to={role === 'host' ? '/host/login' : '/guest/home'} />;
  }
  return children;
};

export default RouteGuard;
