import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import Dashboard from './components/dashboard';
import { ProtectedRoute } from './ProtectedRoute';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/" exact component={Home} />
        <ProtectedRoute path="/dashboard" exact component={Dashboard} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>

  );
}

export default App;
