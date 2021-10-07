import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App'
import Home from './Home'
import Episode from './Episode';

const Routing = () =>{
    return(
        <BrowserRouter>
         <Route exact path="/" component={Home} />
         <Route exact path="/shows" component={App}/>
         <Route exact path="/episode" component={Episode}/>
        </BrowserRouter>
    )
}

export default Routing;