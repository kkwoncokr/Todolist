import React from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import LoginIndex from '../../components/login';
import todoIndex from '../../components/todo';


const Routes = () => {
    return(
            <Switch>
                <Route path="/login" component={LoginIndex} />
                <Route path='/' component={todoIndex} exact />
                <Redirect path="*" to="/" exact/> 
            </Switch>
    );
}

export default Routes;