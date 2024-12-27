import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HostRoutes from "./HostRoutes";
import GuestRoutes from "./GuestRoutes";
import RouteGuard from "../guards/RouteGuard";
import NotFoundPage from "../error/NotFoundPage";
import UnauthorizedPage from "../error/UnauthorizedPage";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/host/*" element={<RouteGuard role="host"><HostRoutes /></RouteGuard>} />
      <Route path="/guest/*" element={<RouteGuard role="guest"><GuestRoutes /></RouteGuard>} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
