const express = require('express')
const router = express.Router()


const ctrls = require('../controllers')


router.get('/', ctrls.goals.index)
router.post('/', ctrls.goals.create)
router.put('/:id', ctrls.goals.update)
router.delete('/:id', ctrls.goals.destroy)


module.exports = router