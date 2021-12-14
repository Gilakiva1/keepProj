const express = require('express')
const { login } = require('./user.conroller')

const router = express.Router()

router.post('/', login)

module.exports = router