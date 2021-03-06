const { check } = require('express-validator')

const AuthenticateUser = ()=>{

   return [check('phoneNumber').notEmpty(),
    check('phoneNumberOtp').notEmpty(),
    
]
    
}

const AuthenticateUserDetails = ()=>{

    return [
        check('fullname').notEmpty(),
        check('society').notEmpty(),
        check('building').notEmpty(),
        check('flatnumber').notEmpty(),
        check('ownership').notEmpty(),
        check('occupancy').notEmpty(),
    
    ]
     
 }



module.exports = {
    AuthenticateUser,AuthenticateUserDetails
}