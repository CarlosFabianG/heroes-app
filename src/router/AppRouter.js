import React from 'react'
import LoginScreen from '../components/login/LoginScreen'
import DashboardRouter from './DashboardRouter'
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginScreen}></Route>
            <Route path="/" component={DashboardRouter}></Route>
          </Switch>
      </ BrowserRouter>
    )
}

export default Router