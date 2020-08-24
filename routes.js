import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Kepler from './components/Kepler/Kepler';
import NotFound from './components/NotFound/NotFound';
import Maps from './components/Maps/Maps';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Signup' component={Signup} />
            <Route exact path='/Kepler' component={Kepler} />
            <Route exact path='/Maps' component={Maps} />
            <Route exact path='*' component={NotFound} />
        </Switch>
    </BrowserRouter>

);

export default Routes;