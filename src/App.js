import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Registro from '../src/Pages/Registro';

export default function App() {
  return (
    
      <Switch>
     
      <Route exact path="/" component={Registro} />
      
      </Switch>
      
  );
}