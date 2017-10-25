const router = require('express').Router()

const auth = require('./auth')
const search = require('./search')

router.use('/auth', auth)
router.use('/search', search)

module.exports = router
