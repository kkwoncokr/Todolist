import React from 'react';
import {Switch,Route} from 'react-router-dom';
import todoIndex from '../../components/todo';


const Routes = () => {
    return(
            <Switch>
                <Route path='/' component={todoIndex} exact></Route>
            </Switch>
    );
}

export default Routes;