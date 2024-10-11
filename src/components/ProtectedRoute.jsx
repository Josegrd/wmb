import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  if (!username || !password) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
