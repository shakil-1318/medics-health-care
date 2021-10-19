import React from 'react';
import { Redirect, Route } from 'react-router';
import Spinner from 'react-bootstrap/Spinner'
import useAuth from '../../../hooks/useAuth';
import './PrivateRoute.css'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading, name } = useAuth();
    if (isLoading) {
        return <div className='centered'><Spinner animation="border" variant="danger" />;</div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                ></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;