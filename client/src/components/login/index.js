import React from "react";
import './login.scss';
const Login = () => {
    return (
        <div className="login-container">
            <div className="input-container">
                <input type="text" placeholder="Email"/>
            </div>
            <div className="input-container">
                <input type="password" placeholder="Password"/>
            </div>
            <button className="login-button" type="submit">Log In</button>
        </div>
    );
}
export default Login;