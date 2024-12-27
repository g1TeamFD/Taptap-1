import React from 'react';
import HostMenuBar from '../components/MenuBar/HostMenuBar';

const HostLayout = ({ children }) => (
  <div>
    <HostMenuBar />
    {children}
  </div>
);

export default HostLayout;
