import React from "react";
import Splash from './session/splash/splash'; 
import SignUp from './session/signup'; 
import LogIn from './session/login'; 
import Home from './home/home'; 
import {Route, Switch} from 'react-router-dom'; 
import {AuthRoute} from '../util/route_util'; 
const App = () => (
    <div className='TradeAwayApp'>
        <Route exact path ='/home' component={Home}></Route>
        <AuthRoute exact path='/login' component={LogIn}></AuthRoute>
        <AuthRoute exact path='/signup' component={SignUp}></AuthRoute> 
        <AuthRoute exact path='/' component={Splash}></AuthRoute>
    </div>
);

export default App;