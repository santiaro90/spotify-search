import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppState } from '../../store/rootReducer';

type ProtectedRouteProps = RouteProps & {
    loggedIn: boolean;
};

export const ProtectedRoute = ({ component, ...props }: ProtectedRouteProps) => {
    const { loggedIn } = props;

    return loggedIn ?
        <Route component={component} {...props} /> :
        <Redirect to="/login" />;
};

const mapStateToProps = (state: AppState) => ({
    loggedIn: state.auth.loggedIn,
});

export default connect(mapStateToProps)(ProtectedRoute);
