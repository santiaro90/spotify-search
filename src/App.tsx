import * as React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Login from './auth/Login';
import ProtectedRoute from './auth/ProtectedRoute';
import Search from './search';

import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
            <h1 className="App-header">Spotifynd</h1>
            <Switch>
                <Redirect exact={true} from="/" to="/search" />
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/search" component={Search} />
            </Switch>
        </div>
    );
  }
}

export default App;
