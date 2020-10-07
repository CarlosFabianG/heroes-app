import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from '../components/ui/NavBar'
import DcScreen from '../components/dc/DcScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'
import HeroScreen from '../components/hero/HeroScreen'
import SearchScreen from '../components/search/SearchScreen'

const DashboardRouter = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/hero/:heroId" component={HeroScreen} />
                    <Route exact path="/searchscreen" component={SearchScreen} />
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}

export default DashboardRouter