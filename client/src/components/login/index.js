import React, {useState} from "react";
import {withRouter} from 'react-router-dom';

import {doLogin} from '../../auth/';

import './login.scss';
const Login = (props) => {
    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');
    const [error, setError] = useState('');
    const onLoginClick = async() => {
        props.setLoading(true);
        props.setAuthStatus('Login In-Progress');
        const loginData = await doLogin(email, password);
        props.setLoading(false);
        if (loginData.success && loginData.userData) {
            props.setIsLoggedIn(true);
            props.setAuthStatus('Logged In');
            props
                .history
                .push('/dashboard');

        } else {
            props.setAuthStatus('Login Failed');
            setError(loginData.errorMessage);
        }
    }
    return (
        <div className="login-container">
            <div className="input-container">
                <input
                    type="text"
                    onChange={event => setEmail(event.target.value)}
                    placeholder="Username"/>
            </div>
            <div className="input-container">
                <input
                    type="password"
                    onChange={event => setPassword(event.target.value)}
                    placeholder="Password"/>
            </div>
            <span className="error">{error}</span>
            <button className="login-button" onClick={onLoginClick}>Log In</button>
        </div>
    );
}
export default withRouter(Login);