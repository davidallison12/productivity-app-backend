const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.post('/', ctrls.users.signup)
router.post('/login', ctrls.users.login);
router.delete('/logout', ctrls.users.logout);

module.exports = router;
