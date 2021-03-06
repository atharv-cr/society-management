const { check } = require('express-validator')

const AuthenticateDiscussionDetails = ()=>{

   return [
       check('title').notEmpty(),
       check('message').notEmpty()
    ]
    
}

module.exports = {
    AuthenticateDiscussionDetails
}