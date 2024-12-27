import React from 'react';
import GuestMenuBar from '../components/MenuBar/GuestMenuBar';

const GuestLayout = ({ children }) => (
  <div>
    <GuestMenuBar />
    {children}
  </div>
);

export default GuestLayout;
