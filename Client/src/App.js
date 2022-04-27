import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from '../src/Pages/Register';
import Login from '../src/Pages/Login';
import Calendar from '../src/Pages/Calendar';

export default function App() {
  return (
    
      <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Calendar" component={Calendar} />
      
      </Switch>
      
  );
}