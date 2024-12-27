import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Host/Home/Login";
import Home from "../pages/Host/Home/Home";
import Resources from "../pages/Host/Resources/Resources";
import Dashboard from "../pages/Host/Dashboard/Dashboard";
import PublicProfile from "../pages/Host/PublicProfile/PublicProfile";
import Program from "../pages/Host/Program/Program";

const HostRoutes = () => (
  <Routes>
    <Route path="login" element={<Login />} />
    <Route path="home" element={<Home />} />
    <Route path="resources" element={<Resources />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="profile" element={<PublicProfile />} />
    <Route path="program" element={<Program />} />
  </Routes>
);

export default HostRoutes;
