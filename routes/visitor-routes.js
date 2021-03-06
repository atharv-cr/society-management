const express = require('express')
const router = express.Router()
const { AuthenticateVisitorDetails } = require('../validation/visitor-validation')
const visitorController = require('../controller/visitor-controller')
const { validate } = require('../validation/common-validation')
const checktoken = require("../middleware/checktoken");

router.use(checktoken);




router.get(
"/:uid/visitor-history",
visitorController.getVisitorHistory);


router.post("/:uid/visitor",AuthenticateVisitorDetails(),
validate,visitorController.newVisitors)



module.exports = router;
