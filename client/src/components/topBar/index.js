import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import './topBar.scss';
const TopBar = (props) => {
    const {isLoggedIn, authStatus} = props;
    return (
        <header className="header">
            <ul className="main-nav">
                <li>
                    <Link to="/">home</Link>
                </li>
                {!isLoggedIn && <li>
                    <Link to="/login">Login</Link>
                </li>
}
                {isLoggedIn && <li>
                    <Link to="/logout">Logout</Link>
                </li>
}
                <li className="status-indicator">
                    Status Indicator : {authStatus}
                </li>
            </ul>
        </header>
    );
}
export default TopBar;