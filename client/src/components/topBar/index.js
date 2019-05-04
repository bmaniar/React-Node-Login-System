import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import './topBar.scss';
const TopBar = (props) => {
    return (
        <header className="header">
            <ul className="main-nav">
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </header>
    );
}
export default TopBar;