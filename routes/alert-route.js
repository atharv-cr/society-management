const router = require("express").Router();
const { validate } = require("../validation/common-validation");
const alertMessageController = require("../controller/alertMessage-controller")
const {
 AuthenticateAlertMessage
} = require("../validation/alert-validation");
const checktoken = require("../middleware/checktoken");

router.use(checktoken);

router.
post('/alert-message'
,AuthenticateAlertMessage(),validate
,alertMessageController.sendAlertMessage)

module.exports = router;


