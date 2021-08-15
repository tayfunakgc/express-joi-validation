const express = require('express')
const router = express.Router()
const Validator = require('../middlewares/Validator')

router.post('/', Validator('post'), (req, res, next) => {
    res.json({ post: req.body })
})

module.exports = router