import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute ({ children }) {
    const loggedInUser = localStorage.getItem("access_token");
    console.log(loggedInUser);
    
    if (loggedInUser === "admin") {
        return <Navigate to="/dashboard" replace />
    }
    return children;
}

export default PublicRoute;