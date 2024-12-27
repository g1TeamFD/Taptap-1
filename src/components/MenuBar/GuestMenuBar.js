import React from 'react';
import { NavLink } from 'react-router-dom';
import guestMenuConfig from '../../config/routes/guestMenuConfig';

const GuestMenuBar = () => (
  <nav>
    {guestMenuConfig.map(({ label, route }) => (
      <NavLink key={route} to={route} activeClassName="active">
        {label}
      </NavLink>
    ))}
  </nav>
);

export default GuestMenuBar;
