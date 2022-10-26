import React, { useContext, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <Button className='align-center' variant="success" disabled>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </Button>
    }
    if (!user) {
        return <Navigate to='/login' state={{ privateRoute: location }} replace> </Navigate >
    }
    return children;
};

export default PrivateRoute;