import React from "react";
import Splash from './session/splash/splash'; 
import SignUp from './session/signup'; 
import LogIn from './session/login'; 
import {Route, Switch} from 'react-router-dom'; 
const App = () => (
    <div className='TradeAwayApp'>
        <Route exact path='/login' component={LogIn}></Route>
        <Route exact path='/signup' component={SignUp}></Route> 
        <Route exact path='/' component={Splash}></Route>
    </div>
);

export default App;