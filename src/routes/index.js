import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HostRoutes from "./HostRoutes";
import GuestRoutes from "./GuestRoutes";
import RouteGuard from "../guards/RouteGuard";
import NotFoundPage from "../error/NotFoundPage";
import UnauthorizedPage from "../error/UnauthorizedPage";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* Redirect root URL to host login */}
      <Route path="/" element={<Navigate to="/host/login" />} />

      {/* Host Flow */}
      <Route path="/host/*" element={<RouteGuard role="host"><HostRoutes /></RouteGuard>} />

      {/* Guest Flow */}
      <Route path="/guest/*" element={<RouteGuard role="guest"><GuestRoutes /></RouteGuard>} />

      {/* Error Routes */}
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
