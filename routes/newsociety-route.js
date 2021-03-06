const express = require('express')
const router = express.Router()
const registerSocietyController = require('../controller/society-registration')
const { validate } = require('../validation/common-validation')
const {AuthenticateSociety} = require('../validation/society-validation')


router.post('/new-society',
registerSocietyController.registerNewSociety)

router.get('/registered-societies',
registerSocietyController.getNewSocieties)

module.exports = router;
