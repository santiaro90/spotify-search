import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './auth/Login';
import ProtectedRoute from './auth/ProtectedRoute';
import Search from './search';

import './App.css';

class App extends React.Component {
  render() {
    return (
        <div>
            <h1>
                Spotify search
            </h1>
            <Switch>
                <ProtectedRoute exact={true} path="/" component={Search} />
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    );
  }
}

export default App;
