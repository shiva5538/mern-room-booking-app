import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from "./AuthService";


export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const auth = new AuthService();
    return (
        <Route {...rest} render={props => {
            if (auth.loggedIn()) {
                return <Component {...props} />;
            } else {
                return <Redirect to={
                    {
                        pathname: "/login",
                        state: {
                            from: props.location
                        }
                    }
                } />
            }
        }} />
    );
};

