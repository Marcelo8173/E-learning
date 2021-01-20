import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/home/home';
import Dashboard from '../pages/dashboard';


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" exact component={Dashboard} /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;