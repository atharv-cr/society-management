const express = require('express')
const router = express.Router()
const { AuthenticateUser } = require('../validation/user-validation')
const userRegistrationController = require('../controller/userRegistration-controller')
const { validate } = require('../validation/common-validation')

router.post('/register',
AuthenticateUser(),validate,
userRegistrationController.register)


router.post('/login',
userRegistrationController.login)


module.exports = router;