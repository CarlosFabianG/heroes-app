import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from '../components/ui/NavBar'
import DcScreen from '../components/dc/DcScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'

const DashboardRouter = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}

export default DashboardRouter