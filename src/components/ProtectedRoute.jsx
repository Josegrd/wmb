import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  if (!email || !password) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
