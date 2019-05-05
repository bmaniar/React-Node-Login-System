const users = require('../fakeData/users');
const doLogin = (req, res) => {
    let response = {};
    const {email, password} = req.body;
    if (email !== '' && password !== '') {
        console.log(password);
        let obj = users.find(user => user.email === email);
        console.log(obj);
        if (obj) {
            response = obj.password === password
                ? {
                    success: true,
                    userData: {
                        token: '12345'
                    }
                }
                : {
                    success: false,
                    errorMessage: "Invalid Password."
                }
        } else {
            response = {
                success: false,
                errorMessage: "No User Found."
            }
        }
    } else {
        response = {
            success: false,
            errorMessage: "Missing Required Param"
        }
    }
    setTimeout((function () {
        res.send(response)
    }), 2000);

}
module.exports = doLogin;