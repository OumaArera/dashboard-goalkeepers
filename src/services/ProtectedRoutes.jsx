import { Navigate, Outlet } from "react-router-dom";
import handleLogout from "../hooks/useLogout";

const ProtectedRoute = () => {
  const token = localStorage.getItem("encryptedSpecialToken");
  const role = localStorage.getItem("role");

  if (!token || !role) {
    handleLogout();
  }

  return <Outlet />;
};

export default ProtectedRoute;