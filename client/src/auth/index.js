export const doLogin = (email, password) => {
    return fetch('http://localhost:3000/login', {
        method: 'post',
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
        })
        .then(response => response.json())
        .then(function (response) {
            if (response.success && response.userData) {
                sessionStorage.setItem('user', JSON.stringify(response.userData));
            }
            return response;
        })
        .catch(error => console.error('Error:', error));
}
export const isAuthenticated = () => {
    let user = JSON.parse(sessionStorage.getItem('user'));
    return false;
}
export const doLogout = () => {
    sessionStorage.removeItem('user');
}