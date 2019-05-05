import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import LoadingOverlay from 'react-loading-overlay';
import 'babel-polyfill';
import Home from './components/home/';
import TopBar from './components/topBar/';
import Login from './components/login/';
import Logout from './components/logout/';
import Dashboard from './components/dashboard/';
import {isAuthenticated} from './auth/';
import './App.scss';

const App = () => {
    const [isLoggedIn,
        setIsLoggedIn] = useState(false);
    const [authStatus,
        setAuthStatus] = useState('Not Logged In');
    const [isLoading,
        setLoading] = useState(false);
    useEffect(() => {
        if (!isLoggedIn) {
            const userData = isAuthenticated();
            if (userData) {
                setIsLoggedIn(true);
                setAuthStatus('Logged In');
            }
        }
    });
    const AuthenticatedRoute = ({
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
            <LoadingOverlay active={isLoading} spinner text='Please Wait...'>
                <div className="App">
                    <TopBar authStatus={authStatus} isLoggedIn={isLoggedIn}/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route
                            path="/login"
                            exact
                            render={() => <Login
                            setIsLoggedIn={setIsLoggedIn}
                            setAuthStatus={setAuthStatus}
                            setLoading={setLoading}/>}/>
                        <Route
                            path="/logout"
                            exact
                            render={() => <Logout setIsLoggedIn={setIsLoggedIn} setAuthStatus={setAuthStatus}/>}/>

                        <AuthenticatedRoute path="/dashboard" exact component={Dashboard}/>
                    </Switch>
                </div>
            </LoadingOverlay>
        </Router>
    );
};

export default App;