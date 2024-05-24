const router = require('express').Router()
const db = require('../models')

router.get('/', (req,res) => {
    res.send('GET home stub')
})

module.exports = router