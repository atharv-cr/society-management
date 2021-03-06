const express = require('express')
const router = express.Router()
const { AuthenticateDiscussionDetails } = require('../validation/discussion-validation')
const discussionController = require('../controller/discussion-controller')
const { validate } = require('../validation/common-validation')
const checktoken = require("../middleware/checktoken");

router.use(checktoken);




router.post(
"/:uid/post-discussion",
AuthenticateDiscussionDetails(),
validate,
discussionController.postDiscussion);

router.get(
"/:uid/get-discussion",
discussionController.getDiscussion);





module.exports = router;














