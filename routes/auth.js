const express = require('express')
const router = express.Router()
const Validator = require('../middlewares/Validator')

router.post('/login', Validator('login'), (req, res, next) => {
    
    //* LET'S MAKE IT MORE REALISTIC
    const accessToken = Date.now()
    const refreshToken = Date.now()
    
    res.json({ accessToken, refreshToken })
})

router.post('/register', Validator('register'), (req, res, next) => {

    //* LET'S MAKE IT MORE REALISTIC
    const accessToken = Date.now()
    const refreshToken = Date.now()
    
    res.json({ accessToken, refreshToken })
})

module.exports = router