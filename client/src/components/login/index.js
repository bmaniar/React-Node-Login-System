import React, {useState} from "react";
import {doLogin} from '../../auth/';

import './login.scss';
const Login = (props) => {
    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');
    const onLoginClick = () => {
        doLogin(email, password);
    }
    return (
        <div className="login-container">
            <div className="input-container">
                <input
                    type="text"
                    onChange={event => setEmail(event.target.value)}
                    placeholder="Email"/>
            </div>
            <div className="input-container">
                <input
                    type="password"
                    onChange={event => setPassword(event.target.value)}
                    placeholder="Password"/>
            </div>
            <button className="login-button" onClick={onLoginClick}>Log In</button>
        </div>
    );
}
export default Login;