import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom'

const Auth = ({component: Component, path, loggedIn, exact }) => {
    debugger
    return(
    <Route
        path={path}
        exact={exact}
        render={props => 
        !loggedIn ? <Component {...props}/> : <Redirect to="/home" /> 
        }
    >
    </Route>
    )
}; 

const mapStateToProps = state => {
    return {loggedInd: Boolean(state.session.id)}; 
}

export const AuthRoute = withRouter(
    connect(
        mapStateToProps, 
        null
    )(Auth)
); 