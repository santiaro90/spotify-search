import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppState } from '../../store/types';

import { login } from '../actions';

import './styles.css';

type LoginProps = {
    loggedIn: boolean;
    login: () => void;
};

export class Login extends React.Component<LoginProps> {
    render() {
        const buttonClass = 'Login-button light-green accent-4 btn btn-large waves-effect waves-light';

        return (
            <section className="Login">
                {
                    this.props.loggedIn ?
                        <Redirect to="/" /> :
                        <button className={buttonClass} onClick={() => this.props.login()}>Login</button>
                }
            </section>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = (dispatch: Function) => ({
    login: () => dispatch(login())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
