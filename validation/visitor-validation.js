const { check } = require('express-validator')

const AuthenticateVisitorDetails = ()=>{

    return [check('name').notEmpty(),
     check('number').notEmpty(),
     check('date').isDate().notEmpty(),
    
    ]
     
 }

 module.exports = {
     AuthenticateVisitorDetails
  
}