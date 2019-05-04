import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import Home from './components/home/';
import TopBar from './components/topBar/';
import Login from './components/login/';

import './App.scss';

const App = () => {
    const [isLoggedIn,
        setIsLoggedIn] = useState(false);
    return (
        <Router>
            <div className="App">
                <TopBar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" exact component={Login}/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;