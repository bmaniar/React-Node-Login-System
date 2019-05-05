const doLogin = (req, res) => {
    setTimeout((function () {
        res.send({
            success: true,
            userData: {
                token: '12345'
            }
        })
    }), 2000);

}
module.exports = doLogin;