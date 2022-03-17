import React from "react";
import { Route, Switch } from "react-router-dom";
import Registro from '../src/Pages/Registro';
import "../src/App.css" 


export default function App() {
  return (
    
      <Switch>
     
      <Route exact path="/" component={Registro} />
      
      </Switch>
      
  );
}