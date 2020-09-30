import React from 'react'
import DcScreen from '../components/dc/DcScreen'
import LoginScreen from '../components/login/LoginScreen'
import NavBar from '../components/ui/NavBar'
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";

const Router = () => {
    return (
        < BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={DcScreen}></Route>
            <Route exact path="/login" component={LoginScreen}></Route>
          </Switch>
      </ BrowserRouter>
    )
}

export default Router