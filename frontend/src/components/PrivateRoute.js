// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const isTokenValid = (token) => {
    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decodedToken.exp && decodedToken.exp > currentTime;
    } catch (error) {
        return false;
    }
};

function PrivateRoute({ children }) {
    const token = localStorage.getItem('token');
    if (!token || !isTokenValid(token)) {
        localStorage.removeItem('token');
        return <Navigate to="/login" />;
    }
    return children;
}

export default PrivateRoute;
