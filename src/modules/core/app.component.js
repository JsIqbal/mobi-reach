import React from "react";
import { Routes, Route, Navigate  } from 'react-router-dom';

import "../../style/dashboard.scss";

// import Dashboard from "../platform/user/components/dashboard.component";
import Dashboard from "./components/common.dashboard.component";
import PublicRoute from "./public-route";
import PrivateRoute from "./private-route";
import Layout from "./components/layout.component";
import Registration from "./common/components/registration.component";

import { AdminClientRoutes, Login } from "../platform/user";
import ForgotPassword from "./common/components/forgot-password.component";

function App() {
    return (
      <div className="app">
            <Routes>
                <Route path="/registration" element={<Registration />} />
                <Route path="/reset-password" element={<ForgotPassword />} />
                <Route path="/" element={<Navigate to="/login" />} />
                
                <Route 
                    path="/login" 
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                <Route 
                    path="/reset-password"
                    element={
                        <PublicRoute>
                            <ForgotPassword />
                        </PublicRoute>
                    }
                />

                <Route 
                    path="/dashboard" 
                    element={
                        <PrivateRoute>
                           
                                <Dashboard />
                       
                        </PrivateRoute>
                    }
                />
                <Route 
                    path="/dashboard/*" 
                    element={<AdminClientRoutes />} 
                />
            </Routes>
      </div>
    );
}
 
export default App;