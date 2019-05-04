export const doLogin = (email, password) => {
    let user = {
        'token': 'abc',
        'name': 'abc'
    };
    sessionStorage.setItem('user', JSON.stringify(user));
}
export const isAuthenticated = () => {
    let user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user);
    return user;
}