import React, { useEffect } from "react";

const Logout = (props) => {
    useEffect(() => {
        props.setIsLoggedIn(false);
        props.setAuthStatus('Logged Out');
    })
    return (
        <div className="page-home">
            <h2>Logout</h2>
        </div>
    );
}
export default Logout;