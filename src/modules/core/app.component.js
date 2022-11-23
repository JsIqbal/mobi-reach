import React from "react";
import { Routes, Route, Navigate  } from 'react-router-dom';

import Dashboard from "../platform/user/components/dashboard.component";
import PublicRoute from "./public-route";
import PrivateRoute from "./private-route";
import Layout from "./components/layout.component";
import Registration from "./common/components/registration.component";
import ForgotPassword from "./common/forgot-password.component";

import { AdminClientRoutes, Login } from "../platform/user";

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
                    path="/dashboard" 
                    element={
                        <PrivateRoute>
                            <Layout>
                                <Dashboard />
                            </Layout>
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