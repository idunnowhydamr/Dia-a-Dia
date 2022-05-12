import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from '../src/Pages/Register';
import Login from '../src/Pages/Login';
import Calendar from '../src/Pages/Calendar';
import Development from '../src/Pages/Development';
import User from '../src/Pages/User';



export default function App() {
  return ( 
    <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/Register" component={Register} />
    <Route exact path="/Calendar" component={Calendar} />
    <Route exact path="/Progress" component={Development}/>
    <Route exact path="/User" component={User}/>
    </Switch>
       

  );
}