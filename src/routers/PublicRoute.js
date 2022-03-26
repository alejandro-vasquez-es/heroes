
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext.js';

export const PublicRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    return !user.logged
        ? children
        : <Navigate to={`${process.env.REACT_APP_URL}/`} />;
};
