import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext)

    if (!user) {
        <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;