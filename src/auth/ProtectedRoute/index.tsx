import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppState } from '../../store/types';

type ProtectedRouteProps = RouteProps & {
    component: React.ComponentClass;
    loggedIn: boolean;
};

export class ProtectedRoute extends React.Component<ProtectedRouteProps> {
    renderRoute = (props: {}) => {
        const loggedIn = this.props.loggedIn;
        const Component = this.props.component;

        return loggedIn ?
            <Component {...props} /> :
            <Redirect to="/login" />;
    }

    render() {
        return <Route render={this.renderRoute} />;
    }
}

const mapStateToProps = (state: AppState) => ({
    loggedIn: state.auth.loggedIn,
});

export default connect(mapStateToProps)(ProtectedRoute);
