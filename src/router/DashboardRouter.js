import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from '../components/ui/NavBar'
import DcScreen from '../components/dc/DcScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'

const DashboardRouter = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/marvel" component={MarvelScreen} />
                <Route exact path="/dc" component={DcScreen} />
            </Switch>
        </div>
    )
}

export default DashboardRouter