const {body} = require('express-validator')

const AuthenticateSociety = ()=>{
    return [
        body("societyName").notEmpty(),
        body("name").notEmpty(),
        body("city").notEmpty(),
        body("phoneNumber").notEmpty(),
        body("address").notEmpty()
    ];
}





module.exports = {
    AuthenticateSociety,
}
