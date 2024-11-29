// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage'; // Import RegistrationPage
import DashboardPage from './pages/DashboardPage';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute

function App() {
    return (
        <Router>
            <Routes>
                {/* Root path will render the LoginPage */}
                <Route path="/" element={<LoginPage />} />

                {/* Authentication routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />

                {/* Protected routes */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <DashboardPage />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
