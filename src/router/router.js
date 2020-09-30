import React from 'react'
import DcScreen from '../components/dc/DcScreen'
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";

const Router = () => {
    return (
        < BrowserRouter>
          <Switch>
            <Route exact path="/" component={DcScreen}></Route>
          </Switch>
      </ BrowserRouter>
    )
}

export default Router