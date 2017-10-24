import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from '../actions';

import { AppState } from '../../store/rootReducer';

type LoginProps = {
    loggedIn: boolean;
    login: () => void;
};

export class Login extends React.Component<LoginProps> {
    render() {
        return this.props.loggedIn ?
            <Redirect to="/" /> :
            <button onClick={() => this.props.login()}>Login</button>;
    }
}

const mapStateToProps = (state: AppState) => ({
    loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = (dispatch: Function) => ({
    login: () => dispatch(login())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
