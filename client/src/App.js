import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import Home from './components/home/';
import TopBar from './components/topBar/';
import Login from './components/login/';
import Dashboard from './components/dashboard/';
import {isAuthenticated} from './auth/';
import './App.scss';

const App = () => {
    const [isLoggedIn,
        setIsLoggedIn] = useState(false);
    const [user,
        setUser] = useState();
    useEffect(() => {
        const userData = isAuthenticated();
        if (userData) {
            setIsLoggedIn(true);
            setUser(userData);
        }
    });
    const AuthenticatedRoute  = ({
        component: Component,
        ...rest
    }) => (
        <Route
            {...rest}
            render={(props) => (isLoggedIn
            ? <Component {...props}/>
            : <Redirect to='/login'/>)}/>
    )
    return (
        <Router>
            <div className="App">
                <TopBar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" exact component={Login} />
                    <AuthenticatedRoute path="/dashboard" exact component={Dashboard}/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;