export const doLogin = (email, password) => {
    let user = {
        'token': 'abc',
        'name': 'abc'
    };
    sessionStorage.setItem('user', JSON.stringify(user));
    return user;
}
export const isAuthenticated = () => {
    let user = JSON.parse(sessionStorage.getItem('user'));
    return false;
}
export const doLogout = () => {
    sessionStorage.removeItem('user');
}