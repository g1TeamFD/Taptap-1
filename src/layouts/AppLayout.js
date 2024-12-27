import React from 'react';
import { Outlet } from 'react-router-dom';
import theme from '../styles/theme';

const AppLayout = ({ role }) => {
  const layoutStyle = role === 'host' ? theme.host : theme.guest;

  return (
    <div style={{ backgroundColor: layoutStyle.background }}>
      <header style={{ color: layoutStyle.primary }}>
        <h1>{role === 'host' ? 'Host Dashboard' : 'Guest Interaction'}</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
