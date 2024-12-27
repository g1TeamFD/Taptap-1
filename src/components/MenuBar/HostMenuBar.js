import React from 'react';
import { NavLink } from 'react-router-dom';
import hostMenuConfig from '../../config/routes/hostMenuConfig';

const HostMenuBar = () => (
  <nav>
    {hostMenuConfig.map(({ label, route }) => (
      <NavLink key={route} to={route} activeClassName="active">
        {label}
      </NavLink>
    ))}
  </nav>
);

export default HostMenuBar;
