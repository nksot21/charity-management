import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

function ProtectedRoute() {
  const { role } = useSelector((state) => state.auth);

  return (
    <div>{role === "ADMIN" ? <Outlet /> : <Navigate to="/khong-co-quyen" />}</div>
  );
}

export default ProtectedRoute;
