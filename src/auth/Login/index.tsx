import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store/rootReducer';

type LoginProps = {
    loggedIn: boolean;
    login: () => void;
};

export class Login extends React.Component<LoginProps> {
    render() {
        return <button onClick={() => this.props.login()}>Login</button>;
    }
}

const mapStateToProps = (state: AppState) => ({
    loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = () => ({
    login: () => { return; }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
