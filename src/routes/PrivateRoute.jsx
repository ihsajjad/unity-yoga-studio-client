import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = () => {

    const { user } = useContext(AuthContext);
    if(user) {
        return Children;
    }
    return <Navigate to='/' />;
};

export default PrivateRoute;