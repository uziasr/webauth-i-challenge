const express = require('express')
const router = express.Router()//==> should be imported

const server = express()
router.use(express.json())

module.exports = server