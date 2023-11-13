import React, { useEffect } from "react";
import { Route, Redirect, useNavigate } from "react-router-dom";

// A HOC to ensure that only authenticated user can load an application page

const AuthRoute = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const loggedIn = localStorage.getItem("LabelizeMockJWT");
    if (!loggedIn) {
      // Redirect to the login page
      navigate("/auth");
    }
  }, [navigate]);

  return children;
};

export default AuthRoute;
