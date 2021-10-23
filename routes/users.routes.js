const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.post('/', ctrls.users.signup)

module.exports = router;
