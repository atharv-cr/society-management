const { check } = require('express-validator')

const AuthenticateAlertMessage = ()=>{

    return [check('phoneNumber').notEmpty(),
     check('phoneNumberOtp').notEmpty()]
     
 }

 module.exports = {
     AuthenticateAlertMessage
  
}