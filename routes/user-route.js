const express = require('express')
const router = express.Router()
const { AuthenticateUserDetails } = require('../validation/user-validation')
const userController = require('../controller/user-controller')
const { validate } = require('../validation/common-validation')
const checktoken = require("../middleware/checktoken");

router.use(checktoken);

router.get("/:uid/profile"
,userController.getProfileById);

router.put(
"/:uid/mandatory-profile",
AuthenticateUserDetails(),
validate,
userController.updateMandatoryProfile);



module.exports = router;














