import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { isSignInWithEmailLink } from "firebase/auth";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading</div>;
  }
  if (currentUser) {
    return children;
  }

  return <Navigate to="/login" replace />;
};
export default PrivateRoute;
