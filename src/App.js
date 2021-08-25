import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import AuthRoutes from "./Routes/AuthRoutes";
import Dashboard from "./Dashboard/Dashboard";
import LoginPage from './Login/LoginPage'
import useToken from "./Token/UseToken";
function App() {
 
  return (
  
      <div className="App">
      
        <BrowserRouter>
          <Switch>
            <Route  path="/login" component={LoginPage} />
            <AuthRoutes  path="/dashboard" component={Dashboard} />
            <AuthRoutes path="/" component={Dashboard} />
          </Switch>
        </BrowserRouter>
         
      
      </div>
   
  );
}

export default App;
