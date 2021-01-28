import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/home/home';
import Dashboard from '../pages/dashboard';
import Courses from '../pages/course';


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" exact component={Dashboard} /> 
                <Route path="/courses/:id" exact component={Courses} /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;