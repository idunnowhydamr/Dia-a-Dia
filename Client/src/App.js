import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from '../src/Pages/Register';
import Login from '../src/Pages/Login';
<<<<<<< HEAD
import Index from '../src/Pages/Index';
=======
import Calendar from '../src/Pages/Calendar';
>>>>>>> e34efcd585517e4b66ff3a810eb1305baf56d6f1

export default function App() {
  return (
    
      <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Register" component={Register} />
<<<<<<< HEAD
      <Route exact path="/Index" component={Index} />
=======
      <Route exact path="/Calendar" component={Calendar} />
      
>>>>>>> e34efcd585517e4b66ff3a810eb1305baf56d6f1
      </Switch>
      
  );
}